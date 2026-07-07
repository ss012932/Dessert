<template>
  <div class="home-page">
    <section id="top" class="hero-section hero-editorial">
      <div class="hero-environment" :style="backgroundImageStyle(homeHeroImage)"></div>
      <div class="hero-shade"></div>
      <div class="hero-brand-mark taste-reveal delay-1">菓<br />子<br />と<br />茶</div>
      <div class="hero-editorial-inner">
        <div class="hero-copy-panel taste-reveal">
          <div class="hero-kicker">KASANE 菓｜SEASONAL WAGASHI</div>
          <h1 class="hero-title">安靜的午後<br />只留一口甜</h1>
          <p class="hero-description">一間藏在木色與茶香裡的日式甜點店。每日少量製作，把當季水果、茶香與手作餡料，重疊成剛好的甜。</p>
          <div class="hero-signature-row">
            <span>台中・西區</span>
            <span>週三至週日</span>
            <span>11:00 開始販售</span>
          </div>
          <div class="hero-actions">
            <button class="base-button base-button-primary" type="button" @click="scrollToToday">走進本周新品</button>
            <button class="base-button base-button-ghost" type="button" @click="openReservation">預約午後取貨</button>
          </div>
        </div>
      </div>
      <div class="hero-bottom-line">
        <span>KASANE</span>
        <span>quiet sweets / tea / seasonal gift</span>
      </div>
    </section>

    <section id="weekly" ref="todaySection" class="content-section weekly-section">
      <div class="section-inner weekly-inner">
        <div class="weekly-intro taste-reveal">
          <div class="weekly-heading-block">
            <div class="section-kicker">NEW SWEETS NOTE</div>
            <h2 class="weekly-title">本周新品</h2>
          </div>
          
        </div>

        <div class="weekly-carousel taste-reveal delay-1">
          <transition name="weekly-slide" mode="out-in">
            <div v-if="activeWeeklyIndex === 0" key="matcha-yuzu-monaka" class="weekly-editorial">
              <div class="weekly-photo-wrap">
                <div class="weekly-main-photo" :style="backgroundImageStyle(homeWeeklyMonakaImage)"></div>
                <div class="weekly-paper-label">
                  <span>01</span>
                  <strong>抹茶柚子最中</strong>
                  <small>matcha / yuzu / crisp shell</small>
                </div>
              </div>

              <div class="weekly-notes">
                <div class="weekly-note-title">店主筆記</div>
                <h3>不是很甜<br />卻會留下很久</h3>
                <p>薄脆最中殼先出聲，抹茶餡壓低甜度，柚子皮只在最後出現。這款新品希望客人記得的是「清苦之後的甜」</p>
                <div class="weekly-taste-line">
                  <span>入口</span>
                  <b>薄脆</b>
                  <span>中段</span>
                  <b>抹茶</b>
                  <span>尾韻</span>
                  <b>柚子</b>
                </div>
              </div>
            </div>

            <div v-else-if="activeWeeklyIndex === 1" key="hojicha-pudding" class="weekly-editorial">
              <div class="weekly-photo-wrap">
                <div class="weekly-main-photo" :style="backgroundImageStyle(homeWeeklyPuddingImage)"></div>
                <div class="weekly-paper-label">
                  <span>02</span>
                  <strong>焙茶布丁</strong>
                  <small>hojicha / caramel / custard</small>
                </div>
              </div>

              <div class="weekly-notes">
                <div class="weekly-note-title">店主筆記</div>
                <h3>茶香厚一點<br />甜味就安靜一點</h3>
                <p>焦糖只留淺淺一層，讓焙茶的烘香慢慢往上走。適合不趕時間的人，用小湯匙一口一口吃完</p>
                <div class="weekly-taste-line">
                  <span>入口</span>
                  <b>滑順</b>
                  <span>中段</span>
                  <b>焙茶</b>
                  <span>尾韻</span>
                  <b>焦糖</b>
                </div>
              </div>
            </div>

            <div v-else-if="activeWeeklyIndex === 2" key="strawberry-daifuku" class="weekly-editorial">
              <div class="weekly-photo-wrap">
                <div class="weekly-main-photo" :style="backgroundImageStyle(homeWeeklyDaifukuImage)"></div>
                <div class="weekly-paper-label">
                  <span>03</span>
                  <strong>草莓白餡大福</strong>
                  <small>strawberry / shiro-an / mochi</small>
                </div>
              </div>

              <div class="weekly-notes">
                <div class="weekly-note-title">店主筆記</div>
                <h3>酸香把白餡修得更乾淨</h3>
                <p>糯皮保持柔軟，白餡不搶味，讓草莓的酸香留在第一口。這款大福想做的是乾淨、輕盈，而不是厚重</p>
                <div class="weekly-taste-line">
                  <span>入口</span>
                  <b>柔軟</b>
                  <span>中段</span>
                  <b>白餡</b>
                  <span>尾韻</span>
                  <b>草莓</b>
                </div>
              </div>
            </div>

            <div v-else key="tea-sweets-set" class="weekly-editorial">
              <div class="weekly-photo-wrap">
                <div class="weekly-main-photo" :style="backgroundImageStyle(homeWeeklyTeaImage)"></div>
                <div class="weekly-paper-label">
                  <span>04</span>
                  <strong>茶席小菓組</strong>
                  <small>tea / wagashi / afternoon set</small>
                </div>
              </div>

              <div class="weekly-notes">
                <div class="weekly-note-title">店主筆記</div>
                <h3>留給午後的<br />兩款甜點與一杯茶</h3>
                <p>小菓組把口感做得更分明：一款脆、一款軟，再配一杯溫茶。不是為了吃飽，而是讓午後慢下來</p>
                <div class="weekly-taste-line">
                  <span>入口</span>
                  <b>清茶</b>
                  <span>中段</span>
                  <b>小菓</b>
                  <span>尾韻</span>
                  <b>回甘</b>
                </div>
              </div>
            </div>
          </transition>

          <div class="weekly-carousel-footer">
            <div class="weekly-carousel-count">{{ (activeWeeklyIndex + 1).toString().padStart(2, "0") }} / 04</div>
            <div class="weekly-carousel-actions">
              <button class="weekly-carousel-button" type="button" aria-label="上一款新品" @click="showPreviousWeeklyItem">‹</button>
              <button class="weekly-carousel-button" type="button" aria-label="下一款新品" @click="showNextWeeklyItem">›</button>
            </div>
            <div class="weekly-carousel-dots" aria-label="本周新品輪播選單">
              <button
                class="weekly-carousel-dot"
                :class="{ 'is-active': activeWeeklyIndex === 0 }"
                type="button"
                aria-label="切換到抹茶柚子最中"
                @click="setWeeklyItem(0)"
              ></button>
              <button
                class="weekly-carousel-dot"
                :class="{ 'is-active': activeWeeklyIndex === 1 }"
                type="button"
                aria-label="切換到焙茶布丁"
                @click="setWeeklyItem(1)"
              ></button>
              <button
                class="weekly-carousel-dot"
                :class="{ 'is-active': activeWeeklyIndex === 2 }"
                type="button"
                aria-label="切換到草莓白餡大福"
                @click="setWeeklyItem(2)"
              ></button>
              <button
                class="weekly-carousel-dot"
                :class="{ 'is-active': activeWeeklyIndex === 3 }"
                type="button"
                aria-label="切換到茶席小菓組"
                @click="setWeeklyItem(3)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="story" class="content-section story-section">
      <div class="section-inner story-layout">
        <div class="story-visual taste-reveal">
          <div class="story-photo story-photo-main" :style="backgroundImageStyle(homeStoryCraftImage)"></div>
          <div class="story-photo story-photo-side" :style="backgroundImageStyle(homeStoryGiftImage)"></div>
          <div class="story-stamp">
            <span>HANDMADE</span>
            <strong>菓子與茶</strong>
          </div>
        </div>

        <div class="story-content taste-reveal delay-1">
          <div class="section-kicker">FROM CRAFT TO GIFT</div>
          <h2 class="story-title">從餡料<br />到能帶走的午後</h2>
          <p class="story-lead">KASANE 菓想做的不是華麗甜點，而是把當季水果、茶香與手作餡料整理成剛好的份量。你可以在店裡配茶慢慢吃，也可以把這份安靜帶去送人。</p>

          <div class="story-steps">
            <article class="story-step">
              <span>01</span>
              <div>
                <h3>跟著季節選味道</h3>
                <p>依水果酸度、茶香厚度與餡料口感調整甜度，不讓糖蓋過原本的香氣。</p>
              </div>
            </article>
            <article class="story-step">
              <span>02</span>
              <div>
                <h3>少量手作，保留細節</h3>
                <p>每批都控制份量，讓外皮、內餡與尾韻維持穩定，不追求大量快速出貨。</p>
              </div>
            </article>
            <article class="story-step">
              <span>03</span>
              <div>
                <h3>成為能送人的午後</h3>
                <p>三入小盒、六入季節盒或茶點組，都會附上建議品嚐順序與茶飲搭配。</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="shop" class="quiet-section">
      <div class="section-inner quiet-layout taste-reveal">
        <div class="quiet-photo" :style="backgroundImageStyle(homeQuietGiftImage)">
          <div class="quiet-photo-caption">seasonal gift / quiet ending</div>
        </div>

        <div class="quiet-letter">
          <div class="section-kicker">SHOP RHYTHM</div>
          <h2>甜點做好時<br />店裡也慢慢安靜下來。</h2>
          <p>每天的甜點從早上的餡與茶開始。<br />抹茶、焙茶、當季水果和糯米皮，會依照那一天的狀態微調。沒有很多品項，也不急著把櫃子填滿，只留下適合午後的幾款。</p>
          <p>有人坐下來配一杯茶，有人帶一盒回家。對我們來說，那都是同一件事：把短短的一段安靜，整理成可以被好好品嚐的樣子。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import homeHeroImage from "~/assets/image/hero.webp";
import homeWeeklyMonakaImage from "~/assets/image/matcha-yuzu-monaka.webp";
import homeWeeklyPuddingImage from "~/assets/image/hojicha-pudding.webp";
import homeWeeklyDaifukuImage from "~/assets/image/strawberry-daifuku.webp";
import homeWeeklyTeaImage from "~/assets/image/tea-pairing.webp";
import homeStoryCraftImage from "~/assets/image/craft-making.webp";
import homeStoryGiftImage from "~/assets/image/make1.webp";
import homeQuietGiftImage from "~/assets/image/seasonal-gift-box1.webp";

function backgroundImageStyle(imageUrl) {
  return { backgroundImage: `url(${imageUrl})` };
}

useTasteReveal();

useSeoMeta({
  title: '日式甜點、和菓子與茶香禮盒',
  description: 'KASANE 菓提供日式甜點、和菓子、抹茶焙茶搭配與季節禮盒，整理本週新品、茶甜點搭配與預約取貨資訊。',
  ogTitle: 'KASANE 菓｜日式甜點與茶香禮盒',
  ogDescription: '少量手作日式甜點、和菓子與茶品搭配，適合內用、預約取貨與送禮。',
  ogType: 'website',
  ogUrl: 'https://dessert.christylove.com.tw/',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
});

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'KASANE 菓,日式甜點,和菓子,抹茶甜點,焙茶甜點,季節禮盒,台中日式甜點',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: 'KASANE 菓',
            description: '日式甜點、和菓子、茶品搭配與季節禮盒。',
            inLanguage: 'zh-Hant-TW',
          },
          {
            '@type': 'Bakery',
            name: 'KASANE 菓',
            description: '少量手作日式甜點與茶香禮盒品牌。',
            servesCuisine: ['日式甜點', '和菓子', '日本茶'],
            areaServed: '台灣',
          },
        ],
      }),
    },
  ],
});

const { $swal } = useNuxtApp();
const todaySection = ref(null);
const activeWeeklyIndex = ref(0);
let weeklyCarouselTimer = null;

const weeklyItemCount = 4;

function scrollToToday() {
  if (todaySection.value) {
    todaySection.value.scrollIntoView({ behavior: "smooth" });
  }
}

function openReservation() {
  $swal.fire({
    title: "已收到預約需求",
    text: "目前先用前端 JS 模擬，之後可以改成呼叫後端 API。",
    icon: "success",
    confirmButtonText: "知道了",
    confirmButtonColor: "#4F6F52",
  });
}

// 控制「本周新品」切換到指定項目。
function setWeeklyItem(index) {
  activeWeeklyIndex.value = index;
  restartWeeklyCarousel();
}

// 控制「本周新品」切換下一款。
function showNextWeeklyItem() {
  activeWeeklyIndex.value = (activeWeeklyIndex.value + 1) % weeklyItemCount;
  restartWeeklyCarousel();
}

// 控制「本周新品」切換上一款。
function showPreviousWeeklyItem() {
  activeWeeklyIndex.value = (activeWeeklyIndex.value - 1 + weeklyItemCount) % weeklyItemCount;
  restartWeeklyCarousel();
}

// 控制「本周新品」自動輪播，使用固定時間切換，避免畫面閃爍。
function startWeeklyCarousel() {
  weeklyCarouselTimer = window.setInterval(() => {
    activeWeeklyIndex.value = (activeWeeklyIndex.value + 1) % weeklyItemCount;
  }, 4200);
}

// 控制使用者手動切換後重新計時，避免剛點完馬上又自動跳下一張。
function restartWeeklyCarousel() {
  if (weeklyCarouselTimer) {
    window.clearInterval(weeklyCarouselTimer);
  }

  startWeeklyCarousel();
}

onMounted(() => {
  startWeeklyCarousel();
});

onUnmounted(() => {
  if (weeklyCarouselTimer) {
    window.clearInterval(weeklyCarouselTimer);
  }
});
</script>
