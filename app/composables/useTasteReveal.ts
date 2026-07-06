import { nextTick, onMounted, onUnmounted } from 'vue';

// 控制滾動淡入動畫：觀察 .taste-reveal 元素，進入畫面後加上 .is-visible。
export function useTasteReveal(selector = '.taste-reveal') {
  let observer: IntersectionObserver | null = null;
  let mutationObserver: MutationObserver | null = null;
  const observedItems = new WeakSet<Element>();

  // 控制目前頁面上尚未顯示的動畫元素註冊到 IntersectionObserver。
  function observeRevealItems() {
    const items = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (item) => !item.classList.contains('is-visible') && !observedItems.has(item),
    );

    if (!items.length) {
      return;
    }

    // 控制舊瀏覽器備援：如果不支援 IntersectionObserver，就直接顯示，避免內容消失。
    if (!observer) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    items.forEach((item) => {
      observedItems.add(item);
      observer?.observe(item);
    });
  }

  onMounted(async () => {
    await nextTick();

    if (!('IntersectionObserver' in window)) {
      observeRevealItems();
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observeRevealItems();

    // 控制動態內容：例如菜單分類切換或小學堂茶品切換後，新出現的卡片也能淡入。
    if ('MutationObserver' in window) {
      mutationObserver = new MutationObserver(() => observeRevealItems());
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }
  });

  onUnmounted(() => {
    observer?.disconnect();
    mutationObserver?.disconnect();
    observer = null;
    mutationObserver = null;
  });
}
