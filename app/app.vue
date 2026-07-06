<template>
  <div>
    <NuxtRouteAnnouncer />

    <Transition name="brand-route-loading">
      <div v-if="isLoadingVisible" class="loading-screen" :class="{ 'is-leaving': isLoadingLeaving }">
        <div class="loading-stage">
          <img :src="logoImage" alt="KASANE 菓 Logo" class="brand-loading-logo" />
          <div class="loading-brand-text">KASANE 菓</div>
          <div class="loading-subtitle">SEASONAL WAGASHI</div>
        </div>
      </div>
    </Transition>

    <NuxtLayout>
      <NuxtPage :transition="{ name: 'kasane-page', mode: 'out-in' }" />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.brand-route-loading-enter-active,
.brand-route-loading-leave-active {
  transition: opacity 260ms ease;
}

.brand-route-loading-enter-from,
.brand-route-loading-leave-to {
  opacity: 0;
}

.kasane-page-enter-active,
.kasane-page-leave-active {
  transition:
    opacity 360ms cubic-bezier(.25, 1, .5, 1),
    transform 360ms cubic-bezier(.25, 1, .5, 1),
    filter 360ms cubic-bezier(.25, 1, .5, 1);
}

.kasane-page-enter-from {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(4px);
}

.kasane-page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  filter: blur(3px);
}

.kasane-page-enter-to,
.kasane-page-leave-from {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import logoImage from '~/assets/image/logo.webp';

const isLoadingVisible = ref(true);
const isLoadingLeaving = ref(false);
let leaveTimer: ReturnType<typeof window.setTimeout> | undefined;
let hideTimer: ReturnType<typeof window.setTimeout> | undefined;

// 控制網站正式網址，分享預覽的 og:url 會使用這個網址。
const siteUrl = 'https://dessert.christylove.com.tw/';

// 控制 LINE / Facebook / X 分享時要顯示的圖片。
// 注意：這是 Nuxt build 後產生的 hashed 圖片路徑，之後重新 build 可能會改變檔名。
const shareImageUrl = 'https://dessert.christylove.com.tw/_nuxt/logo.kNNZPrz8.webp';

// 控制初次進站 loading 畫面顯示與離場動畫。
function showInitialBrandLoading() {
  isLoadingVisible.value = true;
  isLoadingLeaving.value = false;

  leaveTimer = window.setTimeout(() => {
    isLoadingLeaving.value = true;
  }, 1100);

  hideTimer = window.setTimeout(() => {
    isLoadingVisible.value = false;
  }, 1650);
}

onMounted(() => {
  showInitialBrandLoading();
});

onUnmounted(() => {
  if (leaveTimer) {
    window.clearTimeout(leaveTimer);
  }

  if (hideTimer) {
    window.clearTimeout(hideTimer);
  }
});

useHead({
  titleTemplate: '%s | KASANE 菓',
  htmlAttrs: {
    lang: 'zh-TW',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#4F6F52' },
    { charset: 'utf-8' },
  ],
  link: [
    {
      // 控制瀏覽器分頁 icon，不是分享預覽圖。
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico?v=2',
    },
  ],
});

useSeoMeta({
  // 控制一般搜尋結果與瀏覽器標題。
  title: 'KASANE 菓｜日式甜點與茶香禮盒',
  description: '少量手作日式甜點、和菓子與茶品搭配，適合內用、預約取貨與送禮。',

  // 控制 LINE / Facebook / Messenger 分享預覽內容。
  ogTitle: 'KASANE 菓｜日式甜點與茶香禮盒',
  ogDescription: '少量手作日式甜點、和菓子與茶品搭配，適合內用、預約取貨與送禮。',
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'KASANE 菓',
  ogImage: shareImageUrl,
  ogImageType: 'image/webp',

  // 控制 X / Twitter 分享卡片。
  twitterCard: 'summary_large_image',
  twitterTitle: 'KASANE 菓｜日式甜點與茶香禮盒',
  twitterDescription: '少量手作日式甜點、和菓子與茶品搭配，適合內用、預約取貨與送禮。',
  twitterImage: shareImageUrl,
});
</script>
