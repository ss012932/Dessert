<template>
  <main class="school-page">
    <section class="school-lab-hero" aria-label="日本茶道與日式甜點小學堂">
      <div class="school-lab-title taste-reveal">
        <p class="eyebrow">KASANE TEA LAB</p>
        <h1>日式茶點小學堂</h1>
        <p>
          這裡不是考試用的茶道教室，而是一份給初次來店客人的味覺地圖<br />從日本茶道的基本精神、抹茶與和菓子的關係，到焙茶、煎茶適合搭配什麼甜點讓你下次點茶時更有方向
        </p>
      </div>

      <aside class="school-hero-ticket study-guide-card taste-reveal delay-1" aria-label="今日學習重點">
        <div class="study-guide-photo" aria-hidden="true"></div>

        <div class="study-guide-copy">
          <p class="study-guide-kicker">TODAY'S TEA NOTE</p>
          <h2>先不用懂茶道<br />先學習怎麼感受一口茶</h2>
          <p>今天從三個入口開始：款待、甜味、搭配。看完這頁，你會知道抹茶、焙茶、煎茶分別適合什麼日式甜點</p>
        </div>

        <div class="study-guide-points" aria-label="今日學習關鍵字">
          <span>款待</span>
          <span>尾韻</span>
          <span>茶菓搭配</span>
        </div>
      </aside>
    </section>

    <div class="school-study-flow" aria-label="小學堂學習區塊">
      <section class="tea-path-section taste-reveal" aria-label="日本茶道入門學習路線">
      <div class="vertical-title taste-reveal">
        <span>茶道入門</span>
        <strong>TEA PATH</strong>
      </div>

      <div class="path-scroll">
        <article class="path-panel path-panel-wide taste-reveal">
          <small>LESSON 01</small>
          <h2>日本茶道的核心<br />不是規矩，是款待</h2>
          <p>
            茶道裡常聽到「一期一會」，意思是每一次相遇都只有一次。客人不需要一開始就背完所有茶席禮法，先理解「好好準備一杯茶，讓對方舒服地度過一段時間」就很接近茶道精神。
          </p>
        </article>

        <article class="path-panel taste-reveal delay-1">
          <small>LESSON 02</small>
          <h3>和菓子<br />為什麼常搭配抹茶？</h3>
          <p>抹茶有茶苦與濃厚香氣，和菓子的白餡、小豆或水果酸香，可以把茶苦修得圓潤，讓尾韻更乾淨。</p>
        </article>

        <article class="path-panel taste-reveal delay-1">
          <small>LESSON 03</small>
          <h3>先吃甜點還是先喝茶？</h3>
          <p>正式茶席常先品嚐主菓子，再飲茶。日常來店可以更自由：先喝一小口茶醒味，再吃甜點，最後用茶收尾。</p>
        </article>

        <article class="path-panel path-panel-note taste-reveal delay-2">
          <small>小提醒</small>
          <h3>不要只問「甜不甜」<br />也可以問「尾韻重不重」</h3>
          <p>日式甜點的重點常在尾韻。草莓大福是酸香收尾，焙茶布丁是烘香收尾，最中則多了外殼的脆感。</p>
        </article>
      </div>
    </section>

    <section class="pairing-lab-section taste-reveal" aria-label="日式甜點與日本茶搭配實驗室">
      <div class="pairing-lab-head taste-reveal">
        <p class="eyebrow">PAIRING LAB</p>
        <h2>選一種茶<br />看看它適合哪種甜點</h2>
        <p>這一區把常見日本茶與日式甜點的搭配整理成「味覺實驗」。點選茶款後，右側會切換成推薦甜點、適合口味與不建議搭配的方向。</p>
      </div>

      <div class="tea-lab-layout">
        <div class="tea-selector taste-reveal delay-1" role="tablist" aria-label="選擇日本茶種類">
          <button
            type="button"
            :class="['tea-selector-item', { 'is-active': selectedTea === 'matcha' }]"
            :aria-selected="selectedTea === 'matcha'"
            role="tab"
            @click="selectedTea = 'matcha'"
          >
            <span>抹茶</span>
            <small>濃厚、茶苦、適合白餡水果</small>
          </button>
          <button
            type="button"
            :class="['tea-selector-item', { 'is-active': selectedTea === 'hojicha' }]"
            :aria-selected="selectedTea === 'hojicha'"
            role="tab"
            @click="selectedTea = 'hojicha'"
          >
            <span>焙茶</span>
            <small>烘香、溫厚、適合焦糖栗子</small>
          </button>
          <button
            type="button"
            :class="['tea-selector-item', { 'is-active': selectedTea === 'sencha' }]"
            :aria-selected="selectedTea === 'sencha'"
            role="tab"
            @click="selectedTea = 'sencha'"
          >
            <span>煎茶</span>
            <small>鮮味、清爽、適合寒天糯米</small>
          </button>
          <button
            type="button"
            :class="['tea-selector-item', { 'is-active': selectedTea === 'genmaicha' }]"
            :aria-selected="selectedTea === 'genmaicha'"
            role="tab"
            @click="selectedTea = 'genmaicha'"
          >
            <span>玄米茶</span>
            <small>穀香、輕盈、適合小豆米香</small>
          </button>
        </div>

        <Transition name="lab-card-switch" mode="out-in">
          <article v-if="selectedTea === 'matcha'" key="matcha" class="tea-result-card taste-reveal delay-1">
            <div class="tea-result-photo" :style="backgroundImageStyle(schoolMatchaResultImage)"></div>
            <div class="tea-result-copy">
              <p class="result-label">MATCHA × WAGASHI</p>
              <h3 class="tea-result-heading">
                <span class="tea-result-heading-lead">抹茶適合</span>
                <span class="tea-result-heading-main">
                  <span class="tea-result-dessert">草莓白餡大福</span>
                  <span class="tea-result-dessert">抹茶柚子最中</span>
                </span>
              </h3>
              <p>抹茶的茶苦明顯，最適合用白餡、水果酸香或小豆甜味去平衡。草莓的酸香會讓抹茶變得清亮，柚子的尾韻則能讓茶苦不沉重。</p>
              <dl>
                <div><dt>適合口味</dt><dd>白餡、水果、柚子、小豆</dd></div>
                <div><dt>避免搭配</dt><dd>太重奶油、過甜焦糖</dd></div>
                <div><dt>推薦點法</dt><dd>先吃一口大福，再喝一口抹茶</dd></div>
              </dl>
            </div>
          </article>

          <article v-else-if="selectedTea === 'hojicha'" key="hojicha" class="tea-result-card taste-reveal delay-1">
            <div class="tea-result-photo" :style="backgroundImageStyle(schoolHojichaResultImage)"></div>
            <div class="tea-result-copy">
              <p class="result-label">HOJICHA × CARAMEL</p>
              <h3 class="tea-result-heading">
                <span class="tea-result-heading-lead">焙茶適合</span>
                <span class="tea-result-heading-main">
                  <span class="tea-result-dessert">焙茶布丁</span>
                  <span class="tea-result-dessert">栗香浮島</span>
                  <span class="tea-result-dessert">焦糖系甜點</span>
                </span>
              </h3>
              <p>焙茶的香氣像烘烤後的木質香，比抹茶更溫柔。它很適合布丁、栗子、焦糖、小豆這種圓潤甜點，能把甜味收得比較安靜。</p>
              <dl>
                <div><dt>適合口味</dt><dd>焦糖、栗子、布丁、紅豆</dd></div>
                <div><dt>避免搭配</dt><dd>太酸的水果、香氣太尖的柑橘</dd></div>
                <div><dt>推薦點法</dt><dd>焙茶布丁配熱焙茶，甜味會更厚</dd></div>
              </dl>
            </div>
          </article>

          <article v-else-if="selectedTea === 'sencha'" key="sencha" class="tea-result-card taste-reveal delay-1">
            <div class="tea-result-photo" :style="backgroundImageStyle(schoolSenchaResultImage)"></div>
            <div class="tea-result-copy">
              <p class="result-label">SENCHA × CLEAN SWEETS</p>
              <h3 class="tea-result-heading">
                <span class="tea-result-heading-lead">煎茶適合</span>
                <span class="tea-result-heading-main">
                  <span class="tea-result-dessert">小豆寒天</span>
                  <span class="tea-result-dessert">茶席小菓組</span>
                  <span class="tea-result-dessert">低甜度糯米點心</span>
                </span>
              </h3>
              <p>煎茶帶有清爽鮮味與一點澀感，適合用來收尾。搭配寒天、糯米皮或低甜度小菓，可以讓口中變乾淨，不容易膩。</p>
              <dl>
                <div><dt>適合口味</dt><dd>寒天、糯米、清爽小豆、輕甜水果</dd></div>
                <div><dt>避免搭配</dt><dd>厚重奶香、重巧克力</dd></div>
                <div><dt>推薦點法</dt><dd>飯後甜點選煎茶，尾韻最俐落</dd></div>
              </dl>
            </div>
          </article>

          <article v-else key="genmaicha" class="tea-result-card taste-reveal delay-1">
            <div class="tea-result-photo" :style="backgroundImageStyle(schoolGenmaichaResultImage)"></div>
            <div class="tea-result-copy">
              <p class="result-label">GENMAICHA × COMFORT</p>
              <h3 class="tea-result-heading">
                <span class="tea-result-heading-lead">玄米茶適合</span>
                <span class="tea-result-heading-main">
                  <span class="tea-result-dessert">小豆</span>
                  <span class="tea-result-dessert">米香</span>
                  <span class="tea-result-dessert">淡甜禮盒點心</span>
                </span>
              </h3>
              <p>玄米茶有炒米香，感覺親切、放鬆。它不會像抹茶那麼濃，也不會像煎茶那麼清瘦，很適合第一次來店、想要穩穩搭配的人。</p>
              <dl>
                <div><dt>適合口味</dt><dd>小豆、米香、淡甜餅菓、禮盒點心</dd></div>
                <div><dt>避免搭配</dt><dd>香氣太細緻的花果味</dd></div>
                <div><dt>推薦點法</dt><dd>搭配四入禮盒，適合分享</dd></div>
              </dl>
            </div>
          </article>
        </Transition>
      </div>
    </section>

    <section class="aeo-section taste-reveal" aria-label="茶與甜點搭配小問答">
      <div class="aeo-title taste-reveal">
        <p class="eyebrow">TEA PAIRING FAQ</p>
        <h2>茶與甜點搭配小問答</h2>
      <p>這裡先聊茶與甜點的風味搭配<br />關於宅配、預訂、保存與取貨，請到門市資訊頁查看</p>
      </div>

      <div class="aeo-list taste-reveal delay-1">
        <article>
          <h3>日式甜點適合搭配什麼茶？</h3>
          <p>日式甜點可以依甜度與香氣搭配茶。<br />白餡、水果、大福適合抹茶<br />布丁、栗子、焦糖適合焙茶<br />寒天、低甜度小菓與飯後甜點適合煎茶</p>
        </article>
        <article>
          <h3>抹茶適合配什麼和菓子？</h3>
          <p>抹茶適合搭配白餡大福、小豆甜點、最中與帶有柚子或草莓香氣的和菓子，抹茶的茶苦能平衡甜味，讓尾韻更乾淨</p>
        </article>
        <article>
          <h3>焙茶和抹茶差在哪裡？</h3>
          <p>抹茶風味較濃，帶茶苦與鮮明茶香；<br />焙茶則有烘烤香氣，口感較溫厚，適合搭配布丁、焦糖、栗子與小豆甜點</p>
        </article>
        <article>
          <h3>第一次來店不知道怎麼搭配茶與甜點怎麼辦？</h3>
          <p>第一次來店可以選茶席小菓組，搭配煎茶或焙茶<br />想吃水果系可選草莓白餡大福配抹茶<br />想吃溫厚口感可選焙茶布丁配焙茶</p>
        </article>
      </div>
    </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import schoolMatchaResultImage from '~/assets/image/matcha.webp';
import schoolHojichaResultImage from '~/assets/image/pei.webp';
import schoolSenchaResultImage from '~/assets/image/chan.webp';
import schoolGenmaichaResultImage from '~/assets/image/shan.webp';

useTasteReveal();

function backgroundImageStyle(imageUrl: string) {
  return { backgroundImage: `url(${imageUrl})` };
}

const { $swal } = useNuxtApp();
const selectedTea = ref<'matcha' | 'hojicha' | 'sencha' | 'genmaicha'>('matcha');

type TasteType = 'fresh' | 'deep' | 'clean' | 'gift';

type TasteOption = {
  type: TasteType;
  label: string;
  hint: string;
  icon: string;
};

type TasteResult = {
  tag: string;
  title: string;
  lead: string;
  tea: string;
  sweet: string;
  finish: string;
  notes: string[];
  ctaTitle: string;
  ctaText: string;
};

const selectedTaste = ref<TasteType>('fresh');

const tasteOptions: TasteOption[] = [
  {
    type: 'fresh',
    label: '果香清爽',
    hint: '想吃水果、白餡、酸甜感',
    icon: '🍓',
  },
  {
    type: 'deep',
    label: '焦糖焙香',
    hint: '想吃布丁、栗子、焦糖香',
    icon: '🍮',
  },
  {
    type: 'clean',
    label: '飯後清甜',
    hint: '想吃寒天、糯米、低甜度',
    icon: '🍵',
  },
  {
    type: 'gift',
    label: '送禮穩搭',
    hint: '想要多人分享、不容易出錯',
    icon: '🎁',
  },
];

const tasteResultMap: Record<TasteType, TasteResult> = {
  fresh: {
    tag: 'FRUITY / LIGHT',
    title: '果香清爽籤：抹茶把酸甜收乾淨。',
    lead: '適合今天想吃草莓、柚子、白餡大福的人。水果酸香先打開味覺，抹茶再用茶苦把甜味收住。',
    tea: '抹茶',
    sweet: '草莓白餡大福',
    finish: '清亮、不厚重',
    notes: ['先吃一口大福，讓白餡和水果香留在口中。', '再喝一口抹茶，茶苦會把甜味修得更乾淨。', '適合怕甜膩、喜歡清爽尾韻的客人。'],
    ctaTitle: '果香清爽：抹茶 × 草莓白餡大福',
    ctaText: '先吃大福再喝抹茶，酸甜會被茶苦收乾淨，適合想要清爽口感的時候。',
  },
  deep: {
    tag: 'ROASTED / RICH',
    title: '焦糖焙香籤：焙茶讓甜味變溫厚。',
    lead: '適合今天想吃布丁、栗子或焦糖香的人。焙茶的烘香會把甜點的奶香和焦糖感接起來。',
    tea: '焙茶',
    sweet: '焙茶布丁',
    finish: '溫厚、安靜',
    notes: ['先聞焙茶香，再吃布丁，焦糖感會更明顯。', '熱焙茶可以降低奶香甜點的膩感。', '適合下午想吃一點厚度，但不想太甜的時候。'],
    ctaTitle: '焦糖焙香：焙茶 × 焙茶布丁',
    ctaText: '焙茶的烘香很適合布丁與焦糖，能把甜味收得比較溫厚、不容易膩。',
  },
  clean: {
    tag: 'CLEAN / AFTER MEAL',
    title: '飯後清甜籤：煎茶適合把尾韻收乾淨。',
    lead: '適合飯後、或今天只想吃一點輕甜的人。煎茶的鮮味和微澀感，能讓寒天與糯米點心更俐落。',
    tea: '煎茶',
    sweet: '小豆寒天',
    finish: '清爽、俐落',
    notes: ['先喝一小口煎茶醒味，再吃寒天或小豆。', '最後再用煎茶收尾，口中比較不會黏甜。', '適合飯後甜點、或不想吃太重口味的人。'],
    ctaTitle: '飯後清甜：煎茶 × 小豆寒天',
    ctaText: '煎茶有清爽鮮味，搭配寒天和小豆時，尾韻會比較俐落，適合飯後。',
  },
  gift: {
    tag: 'SHARE / GIFT',
    title: '送禮穩搭籤：玄米茶最適合多人分享。',
    lead: '適合第一次來店、想買禮盒或要和朋友分享的人。玄米茶有親切米香，搭不同甜點都不容易失手。',
    tea: '玄米茶',
    sweet: '四入季節禮盒',
    finish: '親切、穩定',
    notes: ['禮盒裡口味不同時，玄米茶比較容易全部接住。', '米香讓茶感更親切，第一次喝日本茶也不突兀。', '適合送禮、聚會、或不知道對方口味時。'],
    ctaTitle: '送禮穩搭：玄米茶 × 四入季節禮盒',
    ctaText: '玄米茶有親切米香，搭配多種甜點不容易出錯，適合第一次來店或送禮分享。',
  },
};

const currentTaste = computed(() => tasteResultMap[selectedTaste.value]);

function showTasteResult(type: TasteType = selectedTaste.value) {
  const result = tasteResultMap[type];

  $swal.fire({
    title: result.ctaTitle,
    html: `<p style="line-height:1.8;margin:0 0 12px;">${result.ctaText}</p><p style="line-height:1.8;margin:0;"><strong>推薦點法：</strong>${result.tea} × ${result.sweet}</p>`,
    icon: 'success',
    confirmButtonText: '記下來',
    confirmButtonColor: '#536b53',
  });
}

useSeoMeta({
  title: '日式甜點茶品小學堂｜日本茶入門與和菓子搭配｜KASANE 菓',
  description: 'KASANE 菓小學堂整理日本茶入門、茶與和菓子搭配、抹茶、焙茶、煎茶與玄米茶的甜點推薦，第一次點茶也能快速找到適合口味。',
  ogTitle: '日式甜點茶品小學堂｜KASANE 菓',
  ogDescription: '學會抹茶、焙茶、煎茶、玄米茶與和菓子的搭配方式，用口味找到適合自己的茶與甜點。',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
});

useHead({
  meta: [
    {
      name: 'keywords',
      content: '日式甜點小學堂,日本茶入門,茶與甜點搭配,和菓子搭配,抹茶搭配甜點,焙茶搭配甜點,煎茶搭配甜點,玄米茶搭配甜點,KASANE 菓',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: '日式甜點茶品小學堂',
            description: '日本茶入門與和菓子、日式甜點搭配指南。',
            author: {
              '@type': 'Organization',
              name: 'KASANE 菓',
            },
            inLanguage: 'zh-Hant-TW',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '日式甜點適合搭配什麼茶？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '白餡、水果與大福適合抹茶；布丁、栗子與焦糖適合焙茶；寒天、低甜度小菓與飯後甜點適合煎茶。',
                },
              },
              {
                '@type': 'Question',
                name: '抹茶適合配什麼和菓子？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '抹茶適合搭配白餡大福、小豆甜點、最中，以及帶有柚子或草莓香氣的和菓子。',
                },
              },
              {
                '@type': 'Question',
                name: '焙茶和抹茶差在哪裡？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '抹茶風味較濃，帶茶苦與鮮明茶香；焙茶有烘烤香氣，口感較溫厚，適合焦糖、栗子與布丁類甜點。',
                },
              },
              {
                '@type': 'Question',
                name: '第一次來店不知道怎麼搭配茶與甜點怎麼辦？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '可以先選想要的尾韻，例如清爽、焙香、飯後清甜或送禮分享，再由店內搭配適合的茶與甜點。',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
});
</script>

<style scoped>
.school-page {
  --ink: #302a24;
  --muted: #746d64;
  --line: rgba(188, 172, 145, .5);
  --green: #536b53;
  --accent: #9a6749;
  --paper: #fffdf8;
  min-height: 100vh;
  color: var(--ink);
  background:
    linear-gradient(180deg, rgba(255, 250, 242, .86), rgba(251, 243, 231, .92) 48%, #fffdf8 100%),
    url('~/assets/image/store-interior.webp') center top / cover fixed;
  overflow: hidden;
}

.eyebrow {
  margin: 0;
  color: var(--green);
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: 4.4px;
  text-transform: uppercase;
}

.school-lab-hero {
  position: relative;
  min-height: 92vh;
  background:
    linear-gradient(90deg, rgba(255, 250, 242, .92) 0%, rgba(255, 250, 242, .82) 42%, rgba(255, 250, 242, .36) 100%),
    url('~/assets/image/school1.webp') center / cover;
  isolation: isolate;
  padding: clamp(124px, 13vw, 170px) clamp(24px, 6vw, 92px) clamp(70px, 8vw, 120px);
  display: grid;
  grid-template-columns: minmax(340px, .58fr) minmax(300px, .42fr);
  gap: clamp(38px, 7vw, 110px);
  align-items: center;
}

.school-lab-hero::before {
  content: "TEA STUDY";
  position: absolute;
  left: clamp(24px, 5vw, 84px);
  bottom: 28px;
  color: rgba(83, 107, 83, .08);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(72px, 13vw, 188px);
  line-height: 1;
  letter-spacing: -.08em;
}

.school-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.school-hero-bg span {
  position: absolute;
  display: grid;
  place-items: center;
  width: clamp(58px, 8vw, 96px);
  height: clamp(58px, 8vw, 96px);
  border-radius: 50%;
  background: rgba(255, 253, 248, .7);
  border: 1px solid rgba(188, 172, 145, .5);
  color: rgba(83, 107, 83, .9);
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: 15px;
  animation: floatingWord 4.6s ease-in-out infinite;
}

.school-hero-bg span:nth-child(1) { right: 11%; top: 18%; }
.school-hero-bg span:nth-child(2) { right: 34%; top: 33%; animation-delay: .4s; }
.school-hero-bg span:nth-child(3) { right: 8%; bottom: 23%; animation-delay: .8s; }
.school-hero-bg span:nth-child(4) { left: 7%; bottom: 18%; animation-delay: 1.2s; }

.school-lab-title,
.school-hero-ticket {
  position: relative;
  z-index: 1;
}

.school-lab-title h1 {
  margin: 18px 0 24px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(44px, 6vw, 84px);
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -2px;
}

.school-lab-title p,
.school-hero-ticket p,
.path-panel p,
.pairing-lab-head p,
.tea-result-copy p,
.flavor-finder-card p,
.floating-notes p,
.aeo-title p,
.aeo-list p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.92;
  letter-spacing: .36px;
}

.school-lab-title > p {
  max-width: 680px;
  font-size: 16px;
}

.school-hero-ticket {
  align-self: end;
  justify-self: end;
  width: min(460px, 100%);
  padding: clamp(30px, 4vw, 48px);
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .88), rgba(255, 250, 242, .76));
  border: 1px solid rgba(188, 172, 145, .56);
  box-shadow: 0 24px 72px rgba(48, 42, 36, .08);
}

.ticket-stamp {
  display: inline-grid;
  place-items: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(83, 107, 83, .1);
  color: var(--green);
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
}

.school-hero-ticket h2 {
  margin: 24px 0 16px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(27px, 3vw, 40px);
  line-height: 1.22;
  font-weight: 400;
}

.ticket-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.ticket-keywords span {
  padding: 6px 10px;
  border: 1px solid rgba(154, 103, 73, .24);
  background: rgba(154, 103, 73, .07);
  color: #7d4f36;
  font-size: 12px;
  letter-spacing: 1px;
}

.tea-path-section {
  position: relative;
  padding: clamp(76px, 9vw, 124px) clamp(24px, 6vw, 92px);
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: clamp(20px, 4vw, 54px);
  background: linear-gradient(90deg, rgba(255, 253, 248, .7), rgba(250, 244, 234, .48));
}

.vertical-title {
  position: sticky;
  top: 108px;
  align-self: start;
  display: grid;
  gap: 14px;
  writing-mode: vertical-rl;
  color: var(--green);
}

.vertical-title span {
  font-size: 24px;
  letter-spacing: 6px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
}

.vertical-title strong {
  color: var(--accent);
  font-size: 10px;
  letter-spacing: 4px;
}

.path-scroll {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);
  overflow: visible;
}

.path-panel {
  position: relative;
  min-height: 352px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 16px;
  overflow: hidden;
  padding: clamp(24px, 3vw, 34px);
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .9), rgba(255, 250, 242, .78));
  border: 1px solid rgba(188, 172, 145, .48);
  box-shadow: 0 18px 54px rgba(48, 42, 36, .06);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.path-panel:hover {
  transform: translateY(-6px);
  border-color: rgba(154, 103, 73, .36);
  box-shadow: 0 22px 58px rgba(48, 42, 36, .09);
}

.path-panel p {
  align-self: end;
  max-width: 58ch;
}

.path-panel-wide {
  min-height: 352px;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .22), rgba(255, 253, 248, .92) 68%),
    url('~/assets/image/tea-pairing.webp') center / cover;
}

.path-panel-wide::after {
  content: "一期一會";
  position: absolute;
  right: 22px;
  top: 18px;
  writing-mode: vertical-rl;
  color: rgba(83, 107, 83, .22);
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: 15px;
  letter-spacing: 5px;
}

.path-panel-note {
  background:
    linear-gradient(180deg, rgba(83, 107, 83, .12), rgba(255, 253, 248, .82));
}

.path-panel small,
.result-label,
.aeo-list h3::before {
  color: var(--accent);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.3px;
  text-transform: uppercase;
}

.path-panel h2,
.path-panel h3,
.pairing-lab-head h2,
.tea-result-copy h3,
.finder-title h2,
.aeo-title h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-weight: 400;
  letter-spacing: -.7px;
}

.path-panel h2 {
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.22;
}

.path-panel h3 {
  font-size: clamp(22px, 2vw, 28px);
  line-height: 1.38;
}

.pairing-lab-section,
.flavor-finder-section,
.aeo-section {
  padding: clamp(78px, 9vw, 132px) clamp(24px, 6vw, 92px);
  border-top: 1px solid var(--line);
}

.pairing-lab-head {
  max-width: 760px;
  margin-bottom: clamp(32px, 5vw, 58px);
}

.pairing-lab-head h2,
.finder-title h2,
.aeo-title h2 {
  margin-top: 14px;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.25;
}

.pairing-lab-head p:last-child,
.aeo-title p {
  margin-top: 18px;
}

.tea-lab-layout {
  display: grid;
  grid-template-columns: minmax(260px, .3fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 76px);
  align-items: start;
}

.tea-selector {
  display: grid;
  gap: 12px;
  position: sticky;
  top: 98px;
}

.tea-selector-item {
  display: grid;
  gap: 5px;
  padding: 18px;
  border: 1px solid rgba(188, 172, 145, .55);
  background: rgba(255, 253, 248, .62);
  color: var(--ink);
  text-align: left;
  cursor: pointer;
  transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
}

.tea-selector-item span {
  font-size: 18px;
  font-weight: 600;
}

.tea-selector-item small {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

.tea-selector-item:hover,
.tea-selector-item.is-active {
  transform: translateX(8px);
  background: rgba(83, 107, 83, .1);
  border-color: rgba(83, 107, 83, .36);
}

.tea-result-card {
  display: grid;
  grid-template-columns: minmax(320px, .48fr) minmax(320px, .52fr);
  min-height: 620px;
  background: rgba(255, 253, 248, .74);
  border: 1px solid rgba(188, 172, 145, .48);
  box-shadow: 0 24px 70px rgba(48, 42, 36, .07);
  overflow: hidden;
}

.tea-result-photo {
  background-size: cover;
  background-position: center;
}

.tea-result-copy {
  display: grid;
  align-content: center;
  gap: 15px;
  padding: clamp(30px, 4vw, 56px);
}

.tea-result-copy h3 {
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.28;
}

.tea-result-copy dl {
  display: grid;
  gap: 10px;
  margin: 12px 0 0;
}

.tea-result-copy dl div {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 14px;
  padding-top: 10px;
  border-top: 1px dashed rgba(188, 172, 145, .52);
}

.tea-result-copy dt {
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.tea-result-copy dd {
  margin: 0;
  color: #5d554c;
  line-height: 1.7;
}

.lab-card-switch-enter-active,
.lab-card-switch-leave-active {
  transition: opacity 260ms ease, transform 260ms ease, filter 260ms ease;
}

.lab-card-switch-enter-from,
.lab-card-switch-leave-to {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(5px);
}

.flavor-finder-section {
  display: grid;
  grid-template-columns: minmax(320px, .48fr) minmax(0, 1fr);
  gap: clamp(30px, 6vw, 88px);
  background: linear-gradient(180deg, rgba(250, 244, 234, .5), rgba(255, 253, 248, .48));
}

.flavor-finder-card {
  position: relative;
  padding: clamp(30px, 5vw, 54px);
  background: rgba(83, 107, 83, .1);
  border: 1px solid rgba(83, 107, 83, .24);
}

.flavor-finder-card::after {
  content: "🍵";
  position: absolute;
  right: 28px;
  top: 24px;
  font-size: 34px;
  animation: cupWiggle 2.8s ease-in-out infinite;
}

.finder-title p:last-child {
  margin-top: 16px;
}

.finder-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 32px;
}

.finder-options button {
  min-height: 94px;
  display: grid;
  place-items: center;
  gap: 7px;
  padding: 16px;
  border: 1px solid rgba(83, 107, 83, .28);
  background: rgba(255, 253, 248, .72);
  color: var(--green);
  font-size: 15px;
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;
}

.finder-options button:hover {
  transform: translateY(-5px) rotate(-1deg);
  background: rgba(255, 253, 248, .96);
}

.finder-options button span {
  font-size: 24px;
}

.floating-notes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: end;
}

.floating-notes article {
  min-height: 230px;
  display: grid;
  align-content: center;
  gap: 12px;
  padding: 24px;
  background: rgba(255, 253, 248, .72);
  border: 1px solid rgba(188, 172, 145, .48);
  transform: rotate(-1.4deg);
}

.floating-notes article:nth-child(2) {
  transform: translateY(26px) rotate(1.2deg);
}

.floating-notes article:nth-child(3) {
  transform: rotate(-.4deg);
}

.floating-notes span {
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.knowledge-ribbon {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(48, 42, 36, .92);
}

.ribbon-track {
  width: max-content;
  display: flex;
  gap: 38px;
  padding: 17px 0;
  color: rgba(255, 253, 248, .9);
  font-size: 13px;
  letter-spacing: 2px;
  animation: ribbonMove 30s linear infinite;
}

.ribbon-track span::before {
  content: "茶";
  margin-right: 12px;
  color: #d5c7ad;
}

.aeo-section {
  display: grid;
  grid-template-columns: minmax(280px, .32fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 92px);
}

.aeo-title {
  position: sticky;
  top: 98px;
  align-self: start;
}

.aeo-list {
  display: grid;
  gap: 14px;
}

.aeo-list article {
  padding: 26px;
  background: rgba(255, 253, 248, .66);
  border: 1px solid rgba(188, 172, 145, .48);
}

.aeo-list h3 {
  margin: 0 0 12px;
  font-size: 21px;
  line-height: 1.45;
  font-weight: 500;
}

.aeo-list h3::before {
  content: "Q";
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border-radius: 50%;
  background: rgba(154, 103, 73, .1);
}


@keyframes floatingWord {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(-4deg); }
}

@keyframes cupWiggle {
  0%, 100% { transform: rotate(0deg); }
  44% { transform: rotate(-7deg); }
  58% { transform: rotate(6deg); }
}

@keyframes ribbonMove {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}



/* School hero redesign：移除浮動茶圓章，改用店內環境圖與茶帖索引 */
.school-hero-bg {
  display: none;
}

.school-lab-hero::before {
  z-index: -1;
  color: rgba(255, 253, 248, .34);
}

.school-lab-title {
  max-width: 760px;
}

.school-hero-ticket {
  align-self: center;
  width: min(520px, 100%);
  padding: 0;
  background: rgba(255, 253, 248, .84);
  backdrop-filter: blur(18px);
}

.lesson-index-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 24px;
  border-bottom: 1px solid rgba(188, 172, 145, .5);
}

.lesson-index-head p {
  margin: 0;
  color: var(--green);
  font-size: 15px;
  letter-spacing: 1.4px;
}

.lesson-index-head span {
  color: var(--accent);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
}

.lesson-index-list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lesson-index-list li {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding: 22px 24px;
  border-bottom: 1px solid rgba(188, 172, 145, .38);
}

.lesson-index-list small {
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 18px;
}

.lesson-index-list strong {
  color: var(--ink);
  font-size: clamp(18px, 1.5vw, 22px);
  line-height: 1.55;
  font-weight: 500;
  letter-spacing: .2px;
}

.lesson-index-tip {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding: 22px 24px 24px;
  background: rgba(83, 107, 83, .08);
}

.lesson-index-tip span {
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.lesson-index-tip p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.ticket-stamp,
.ticket-keywords {
  display: none;
}

@media (max-width: 1080px) {
  .school-lab-hero,
  .tea-lab-layout,
  .flavor-finder-section,
  .aeo-section {
    grid-template-columns: 1fr;
  }

  .path-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .path-panel-wide {
    grid-column: 1 / -1;
  }

  .school-hero-ticket {
    justify-self: start;
  }

  .tea-selector,
  .aeo-title {
    position: static;
  }

  .tea-selector {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tea-result-card {
    grid-template-columns: 1fr;
  }

  .tea-result-photo {
    min-height: 360px;
  }

  .floating-notes {
    grid-template-columns: 1fr;
  }

  .floating-notes article,
  .floating-notes article:nth-child(2),
  .floating-notes article:nth-child(3) {
    min-height: auto;
    transform: none;
  }
}

@media (max-width: 720px) {
  .school-lab-hero {
    min-height: auto;
    padding-top: 112px;
  }

  .school-lab-title h1 {
    font-size: 38px;
    line-height: 1.2;
  }

  .school-hero-bg {
    display: none;
  }

  .tea-path-section {
    grid-template-columns: 1fr;
    padding: 64px 24px;
  }

  .vertical-title {
    position: relative;
    top: auto;
    writing-mode: horizontal-tb;
  }

  .path-scroll {
    grid-template-columns: 1fr;
  }

  .path-panel-wide {
    grid-column: auto;
  }

  .path-panel {
    min-height: 280px;
  }

  .tea-selector,
  .finder-options {
    grid-template-columns: 1fr;
  }

  .tea-result-photo {
    min-height: 260px;
  }

  .tea-result-copy dl div {
    grid-template-columns: 1fr;
  }
}


/* School hero：右側導讀卡改成茶席感，不再使用列表式課題卡 */
.study-guide-card.school-hero-ticket {
  align-self: center;
  justify-self: end;
  width: min(520px, 100%);
  padding: 12px;
  background: rgba(255, 253, 248, .78);
  border: 1px solid rgba(188, 172, 145, .58);
  box-shadow: 0 24px 80px rgba(48, 42, 36, .12);
  backdrop-filter: blur(16px);
}

.study-guide-photo {
  min-height: 190px;
  background:
    linear-gradient(180deg, rgba(48, 42, 36, .05), rgba(48, 42, 36, .18)),
    url('~/assets/image/school2.webp') center 58% / cover;
}

.study-guide-copy {
  padding: clamp(24px, 3vw, 34px) clamp(22px, 3vw, 34px) 22px;
}

.study-guide-kicker {
  margin: 0 0 14px !important;
  color: var(--accent) !important;
  font-size: 10px !important;
  font-weight: 700;
  letter-spacing: 3px !important;
  line-height: 1.5 !important;
}

.study-guide-copy h2 {
  margin: 0 0 18px;
  max-width: 390px;
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: -.6px;
}

.study-guide-copy p:last-child {
  max-width: 410px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.study-guide-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(188, 172, 145, .46);
}

.study-guide-points span {
  display: grid;
  place-items: center;
  min-height: 54px;
  color: var(--green);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.8px;
}

.study-guide-points span + span {
  border-left: 1px solid rgba(188, 172, 145, .38);
}

.lesson-index-head,
.lesson-index-list,
.lesson-index-tip {
  display: none;
}

@media (max-width: 1080px) {
  .study-guide-card.school-hero-ticket {
    justify-self: start;
  }
}

@media (max-width: 720px) {
  .study-guide-card.school-hero-ticket {
    padding: 10px;
  }

  .study-guide-photo {
    min-height: 150px;
  }

  .study-guide-points {
    grid-template-columns: 1fr;
  }

  .study-guide-points span + span {
    border-left: 0;
    border-top: 1px solid rgba(188, 172, 145, .38);
  }
}

/* Tea path final redesign：改成茶帖清單，不再混用只有第一張有圖的大卡片 */
.tea-path-section {
  padding: clamp(72px, 8vw, 112px) clamp(24px, 6vw, 92px);
  grid-template-columns: 116px minmax(0, 1120px);
  justify-content: center;
  align-items: start;
  background: linear-gradient(180deg, rgba(255, 253, 248, .92), rgba(250, 244, 234, .66));
}

.path-scroll {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  overflow: visible;
  padding: 0;
}

.path-panel,
.path-panel-wide,
.path-panel-note {
  min-height: auto;
  display: grid;
  grid-template-columns: 88px minmax(230px, .78fr) minmax(320px, 1fr);
  align-items: center;
  gap: clamp(18px, 3vw, 34px);
  padding: clamp(22px, 2.6vw, 32px) clamp(22px, 3vw, 38px);
  background: linear-gradient(90deg, rgba(255, 253, 248, .96), rgba(255, 250, 242, .82));
  border: 1px solid rgba(188, 172, 145, .48);
  box-shadow: 0 16px 44px rgba(48, 42, 36, .055);
  overflow: hidden;
}

.path-panel:hover {
  transform: translateX(6px);
  border-color: rgba(154, 103, 73, .4);
  box-shadow: 0 20px 56px rgba(48, 42, 36, .085);
}

.path-panel-wide::after {
  display: none;
}

.path-panel-note {
  background: linear-gradient(90deg, rgba(83, 107, 83, .13), rgba(255, 253, 248, .88));
  border-color: rgba(83, 107, 83, .24);
}

.path-panel small {
  display: grid;
  place-items: center;
  width: 68px;
  height: 68px;
  margin: 0;
  border-radius: 999px;
  background: rgba(255, 253, 248, .96);
  border: 1px solid rgba(154, 103, 73, .3);
  color: var(--accent);
  font-size: 9px;
  line-height: 1.35;
  text-align: center;
  letter-spacing: 1.8px;
}

.path-panel h2,
.path-panel h3 {
  color: var(--ink);
  font-size: clamp(22px, 2.1vw, 30px);
  line-height: 1.38;
  letter-spacing: -.4px;
}

.path-panel p {
  align-self: center;
  max-width: none;
  padding-left: clamp(18px, 2vw, 28px);
  border-left: 1px solid rgba(188, 172, 145, .42);
  color: #675f56;
  font-size: 14px;
  line-height: 1.9;
}

@media (max-width: 1080px) {
  .tea-path-section {
    grid-template-columns: 1fr;
  }

  .vertical-title {
    position: relative;
    top: auto;
    writing-mode: horizontal-tb;
  }

  .path-scroll {
    grid-template-columns: 1fr;
  }

  .path-panel,
  .path-panel-wide,
  .path-panel-note {
    grid-column: auto;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 18px;
  }

  .path-panel p {
    grid-column: 2;
    padding-left: 0;
    border-left: 0;
  }
}

@media (max-width: 720px) {
  .tea-path-section {
    padding: 58px 20px;
  }

  .path-panel,
  .path-panel-wide,
  .path-panel-note {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 24px;
  }

  .path-panel:hover {
    transform: translateY(-4px);
  }

  .path-panel small {
    width: auto;
    height: auto;
    place-items: start;
    padding-bottom: 10px;
    border: 0;
    border-radius: 0;
    background: transparent;
    text-align: left;
  }

  .path-panel h2,
  .path-panel h3 {
    font-size: 23px;
  }

  .path-panel p {
    grid-column: auto;
  }
}

/* Tea path horizontal redesign：改回橫向卡片，控制文字高度與間距，避免頁面被拉太長 */
.tea-path-section {
  padding: clamp(68px, 7vw, 104px) clamp(24px, 5vw, 76px);
  grid-template-columns: 104px minmax(0, 1fr);
  gap: clamp(18px, 3vw, 38px);
  justify-content: normal;
  align-items: stretch;
  background:
    linear-gradient(90deg, rgba(255, 253, 248, .94), rgba(250, 244, 234, .7)),
    url('~/assets/image/store-interior.webp') center / cover;
}

.path-scroll {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 1.6vw, 22px);
  padding: 0;
  overflow: visible;
}

.path-panel,
.path-panel-wide,
.path-panel-note {
  min-height: 368px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(92px, auto) 1fr;
  align-items: start;
  gap: 16px;
  padding: clamp(24px, 2.4vw, 34px);
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(255, 250, 242, .78));
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 18px 52px rgba(48, 42, 36, .06);
  overflow: hidden;
}

.path-panel-wide {
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(255, 250, 242, .78));
}

.path-panel-note {
  background:
    linear-gradient(180deg, rgba(83, 107, 83, .12), rgba(255, 253, 248, .82));
}

.path-panel::before,
.path-panel::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.path-panel::before {
  inset: auto 24px 24px auto;
  width: 96px;
  height: 96px;
  border-radius: 999px;
  background: rgba(83, 107, 83, .07);
}

.path-panel::after {
  left: 0;
  right: 0;
  top: 0;
  height: 5px;
  background: linear-gradient(90deg, rgba(154, 103, 73, .42), rgba(83, 107, 83, .2));
}

.path-panel:hover {
  transform: translateY(-6px);
  border-color: rgba(154, 103, 73, .42);
  box-shadow: 0 24px 62px rgba(48, 42, 36, .09);
}

.path-panel small {
  display: inline-grid;
  place-items: center;
  width: max-content;
  height: auto;
  min-height: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--accent);
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 2.5px;
  text-align: left;
}

.path-panel h2,
.path-panel h3 {
  color: var(--ink);
  font-size: clamp(23px, 2vw, 32px);
  line-height: 1.36;
  letter-spacing: -.45px;
}

.path-panel p {
  align-self: end;
  display: -webkit-box;
  max-width: none;
  padding-left: 0;
  border-left: 0;
  color: #675f56;
  font-size: 14px;
  line-height: 1.9;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

@media (max-width: 1180px) {
  .path-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .path-panel,
  .path-panel-wide,
  .path-panel-note {
    min-height: 300px;
  }
}

@media (max-width: 720px) {
  .tea-path-section {
    grid-template-columns: 1fr;
    padding: 58px 20px;
  }

  .vertical-title {
    position: relative;
    top: auto;
    writing-mode: horizontal-tb;
  }

  .path-scroll {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(260px, 82vw);
    grid-template-columns: none;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
  }

  .path-panel,
  .path-panel-wide,
  .path-panel-note {
    min-height: 320px;
    scroll-snap-align: start;
  }

  .path-panel h2,
  .path-panel h3 {
    font-size: 24px;
  }
}

/* Shared study background: TEA PATH / PAIRING LAB / TASTE FINDER use one continuous scroll background */
.school-study-flow {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(250, 244, 234, .76) 46%, rgba(255, 253, 248, .9) 100%),
    url('~/assets/image/store-interior.webp') center top / cover scroll;
}

.school-study-flow::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 14% 18%, rgba(154, 103, 73, .09), transparent 30%),
    radial-gradient(circle at 82% 58%, rgba(83, 107, 83, .08), transparent 34%);
}

.school-study-flow::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(188, 172, 145, .16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(188, 172, 145, .12) 1px, transparent 1px);
  background-size: 100% 120px, 120px 100%;
  opacity: .32;
}

.school-study-flow > section {
  position: relative;
  z-index: 1;
  background: transparent !important;
}

.school-study-flow .tea-path-section {
  border-top: 1px solid rgba(188, 172, 145, .42);
}

.school-study-flow .pairing-lab-section,
.school-study-flow .flavor-finder-section {
  border-top: 1px solid rgba(188, 172, 145, .3);
}

.school-study-flow .path-panel,
.school-study-flow .tea-selector-item,
.school-study-flow .tea-result-card,
.school-study-flow .flavor-finder-card,
.school-study-flow .floating-notes article {
  backdrop-filter: blur(10px);
}


/* Shared study background motion: 共用背景固定在視窗，內容上下滑動時會有背景被帶出的層次感 */
.school-study-flow {
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(250, 244, 234, .76) 46%, rgba(255, 253, 248, .9) 100%),
    url('~/assets/image/school3.webp') center center / cover fixed;
}

.school-study-flow::before {
  background:
    radial-gradient(circle at 14% 18%, rgba(154, 103, 73, .09), transparent 30%),
    radial-gradient(circle at 82% 58%, rgba(83, 107, 83, .08), transparent 34%),
    linear-gradient(180deg, rgba(255, 253, 248, .2), rgba(255, 253, 248, .52));
}

@media (max-width: 720px) {
  .school-study-flow {
    background:
      linear-gradient(180deg, rgba(255, 253, 248, .95), rgba(250, 244, 234, .8) 46%, rgba(255, 253, 248, .92) 100%),
      url('~/assets/image/store-interior.webp') center top / cover scroll;
  }
}


/* Tea path card normalize：四張卡片統一成 LESSON 03 的乾淨茶帖樣式 */
.path-scroll .path-panel,
.path-scroll .path-panel-wide,
.path-scroll .path-panel-note {
  min-height: 368px;
  grid-template-rows: auto minmax(92px, auto) 1fr;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(255, 250, 242, .78));
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 18px 52px rgba(48, 42, 36, .06);
}

.path-scroll .path-panel-wide,
.path-scroll .path-panel-note {
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(255, 250, 242, .78));
  border-color: rgba(188, 172, 145, .5);
}

.path-scroll .path-panel small {
  color: var(--accent);
}

.path-scroll .path-panel h2,
.path-scroll .path-panel h3 {
  min-height: 92px;
  display: flex;
  align-items: flex-start;
  color: var(--ink);
  font-size: clamp(23px, 2vw, 32px);
  line-height: 1.36;
}

.path-scroll .path-panel p {
  align-self: end;
  -webkit-line-clamp: 4;
}

@media (max-width: 1180px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 300px;
  }
}

@media (max-width: 720px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 320px;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: auto;
    font-size: 24px;
  }
}


/* tea path exact normalize */
.path-scroll .path-panel,
.path-scroll .path-panel-wide,
.path-scroll .path-panel-note {
  background:
    linear-gradient(180deg, rgba(255, 253, 248, .94), rgba(255, 250, 242, .78));
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 18px 52px rgba(48, 42, 36, .06);
}

.path-scroll .path-panel::before,
.path-scroll .path-panel-wide::before,
.path-scroll .path-panel-note::before {
  display: none;
}

.path-scroll .path-panel::after,
.path-scroll .path-panel-wide::after,
.path-scroll .path-panel-note::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, rgba(154, 103, 73, .42), rgba(83, 107, 83, .2));
  pointer-events: none;
}

.path-scroll .path-panel small,
.path-scroll .path-panel-note small {
  color: var(--accent);
}

.path-scroll .path-panel h2,
.path-scroll .path-panel h3 {
  color: var(--ink);
}


/* taste finder layout redesign */
.flavor-finder-section {
  max-width: 1480px;
  margin: 0 auto;
  grid-template-columns: minmax(340px, 440px) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 56px);
  align-items: stretch;
}

.flavor-finder-card {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 460px;
  padding: clamp(30px, 4vw, 46px);
  background: rgba(255, 253, 248, .76);
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 22px 64px rgba(48, 42, 36, .07);
}

.flavor-finder-card::after {
  content: none;
}

.finder-title {
  display: grid;
  gap: 14px;
}

.finder-title h2 {
  margin-top: 0;
  font-size: clamp(32px, 3.2vw, 48px);
  line-height: 1.18;
}

.finder-title p:last-child {
  max-width: 360px;
  margin-top: 0;
}

.finder-options {
  align-self: end;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 34px;
}

.finder-options button {
  min-height: 68px;
  grid-template-columns: 42px minmax(0, 1fr);
  place-items: center start;
  gap: 14px;
  padding: 14px 18px;
  background: rgba(255, 253, 248, .82);
  border: 1px solid rgba(188, 172, 145, .52);
  color: var(--ink);
  text-align: left;
}

.finder-options button:hover {
  transform: translateX(6px);
  background: rgba(255, 253, 248, .96);
  border-color: rgba(83, 107, 83, .42);
}

.finder-options button span {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: rgba(83, 107, 83, .08);
  font-size: 19px;
}

.floating-notes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto 1fr 1fr;
  gap: 16px;
  align-items: stretch;
}

.floating-notes::before {
  content: "依今天想吃的感覺選";
  grid-column: 1 / -1;
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.floating-notes article,
.floating-notes article:nth-child(2),
.floating-notes article:nth-child(3) {
  min-height: auto;
  display: grid;
  align-content: center;
  gap: 12px;
  padding: clamp(24px, 3vw, 34px);
  background: rgba(255, 253, 248, .74);
  border: 1px solid rgba(188, 172, 145, .46);
  box-shadow: 0 18px 54px rgba(48, 42, 36, .055);
  transform: none;
}

.floating-notes article:first-of-type {
  grid-column: 1 / -1;
}

.floating-notes article:hover {
  transform: translateY(-5px);
  border-color: rgba(154, 103, 73, .36);
}

.floating-notes span {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 2.2px;
}

.floating-notes p {
  color: #675f56;
  font-size: 16px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .flavor-finder-section {
    max-width: none;
    grid-template-columns: 1fr;
  }

  .flavor-finder-card {
    min-height: auto;
  }

  .finder-options {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .finder-options,
  .floating-notes {
    grid-template-columns: 1fr;
  }

  .floating-notes article:first-of-type {
    grid-column: auto;
  }
}


/* taste finder interactive redesign */
.flavor-finder-section {
  max-width: 1480px;
  margin: 0 auto;
  grid-template-columns: minmax(330px, 430px) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 56px);
  align-items: stretch;
}

.taste-selector-panel {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 560px;
  background: rgba(255, 253, 248, .8);
}

.finder-options {
  align-self: end;
  grid-template-columns: 1fr;
  gap: 12px;
}

.taste-option {
  position: relative;
  min-height: 76px;
  grid-template-columns: 44px minmax(0, 1fr);
  place-items: center start;
  gap: 15px;
  overflow: hidden;
}

.taste-option::after {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: rgba(83, 107, 83, .55);
  opacity: 0;
  transition: opacity 180ms ease;
}

.taste-option.is-active {
  background: rgba(83, 107, 83, .1);
  border-color: rgba(83, 107, 83, .42);
  transform: translateX(6px);
}

.taste-option.is-active::after {
  opacity: 1;
}

.taste-option-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgba(83, 107, 83, .08);
  font-size: 20px;
}

.taste-option-copy {
  display: grid;
  gap: 4px;
}

.taste-option-copy strong {
  color: var(--ink);
  font-size: 16px;
  font-weight: 500;
}

.taste-option-copy small {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
}

.taste-result-stage {
  min-height: 560px;
}

.taste-result-board {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto 1fr auto;
  gap: clamp(16px, 2vw, 24px);
  padding: clamp(32px, 4vw, 58px);
  background: rgba(255, 253, 248, .78);
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 24px 70px rgba(48, 42, 36, .07);
  backdrop-filter: blur(10px);
}

.taste-result-board h3 {
  margin: 0;
  max-width: 760px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(30px, 3.4vw, 52px);
  line-height: 1.22;
  font-weight: 400;
  letter-spacing: -.8px;
}

.taste-result-lead {
  max-width: 760px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.9;
}

.taste-pair-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid rgba(188, 172, 145, .44);
  background: rgba(255, 253, 248, .54);
}

.taste-pair-row div {
  display: grid;
  gap: 8px;
  padding: 18px 20px;
}

.taste-pair-row div + div {
  border-left: 1px solid rgba(188, 172, 145, .38);
}

.taste-pair-row span {
  color: var(--accent);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.taste-pair-row strong {
  color: var(--ink);
  font-size: 18px;
  font-weight: 500;
}

.taste-reason-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.taste-reason-list li {
  position: relative;
  padding: 18px 18px 18px 42px;
  color: #675f56;
  font-size: 14px;
  line-height: 1.75;
  background: rgba(255, 250, 242, .62);
  border: 1px solid rgba(188, 172, 145, .34);
}

.taste-reason-list li::before {
  content: "茶";
  position: absolute;
  left: 16px;
  top: 20px;
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
}

.taste-result-action {
  justify-self: start;
  padding: 13px 22px;
  border: 1px solid rgba(83, 107, 83, .42);
  background: rgba(83, 107, 83, .12);
  color: var(--green);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.6px;
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;
}

.taste-result-action:hover {
  transform: translateY(-3px);
  background: rgba(83, 107, 83, .18);
}

.taste-stage-switch-enter-active,
.taste-stage-switch-leave-active {
  transition: opacity 220ms ease, transform 220ms ease, filter 220ms ease;
}

.taste-stage-switch-enter-from,
.taste-stage-switch-leave-to {
  opacity: 0;
  transform: translateY(14px);
  filter: blur(4px);
}

@media (max-width: 1080px) {
  .flavor-finder-section {
    max-width: none;
    grid-template-columns: 1fr;
  }

  .taste-selector-panel,
  .taste-result-stage {
    min-height: auto;
  }

  .finder-options,
  .taste-reason-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .finder-options,
  .taste-pair-row,
  .taste-reason-list {
    grid-template-columns: 1fr;
  }

  .taste-pair-row div + div {
    border-left: 0;
    border-top: 1px solid rgba(188, 172, 145, .38);
  }

  .taste-result-board {
    padding: 26px;
  }
}


/* study flow extend to FAQ section */
.school-study-flow .aeo-section {
  border-top: 1px solid rgba(188, 172, 145, .3);
  background: transparent !important;
}

.school-study-flow .aeo-list article {
  backdrop-filter: blur(10px);
}


/* School fluid RWD polish: smooth tablet/mobile breakpoints */
.school-page {
  overflow-x: clip;
}

.school-lab-hero,
.tea-path-section,
.pairing-lab-section,
.flavor-finder-section,
.aeo-section {
  padding-left: clamp(20px, 5vw, 76px);
  padding-right: clamp(20px, 5vw, 76px);
}

.school-lab-hero {
  grid-template-columns: minmax(0, 1fr) minmax(320px, 440px);
  gap: clamp(28px, 5vw, 88px);
}

.school-lab-title h1,
.pairing-lab-head h2,
.finder-title h2,
.aeo-title h2,
.taste-result-board h3,
.tea-result-copy h3 {
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.school-lab-title > p,
.pairing-lab-head p,
.finder-title p:last-child,
.aeo-title p,
.taste-result-lead,
.tea-result-copy p {
  max-width: 68ch;
}

.tea-path-section {
  grid-template-columns: clamp(82px, 8vw, 104px) minmax(0, 1fr);
}

.path-scroll {
  grid-template-columns: repeat(4, minmax(220px, 1fr));
}

.path-scroll .path-panel,
.path-scroll .path-panel-wide,
.path-scroll .path-panel-note {
  min-height: clamp(320px, 28vw, 368px);
  padding: clamp(22px, 2vw, 34px);
}

.tea-lab-layout {
  grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
  gap: clamp(22px, 4vw, 64px);
}

.tea-result-card {
  grid-template-columns: minmax(280px, .42fr) minmax(0, 1fr);
  min-height: clamp(500px, 48vw, 620px);
}

.tea-result-copy dl div {
  grid-template-columns: minmax(72px, 92px) minmax(0, 1fr);
}

.flavor-finder-section {
  width: 100%;
  max-width: 1480px;
  grid-template-columns: minmax(300px, 410px) minmax(0, 1fr);
}

.taste-selector-panel,
.taste-result-stage {
  min-height: clamp(500px, 42vw, 560px);
}

.taste-pair-row,
.taste-reason-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.aeo-section {
  grid-template-columns: minmax(240px, .3fr) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 76px);
}

@media (max-width: 1280px) {
  .path-scroll {
    grid-template-columns: repeat(4, minmax(190px, 1fr));
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 330px;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 82px;
    font-size: clamp(22px, 2.2vw, 28px);
  }

  .tea-result-card {
    grid-template-columns: minmax(240px, .38fr) minmax(0, 1fr);
  }
}

@media (max-width: 1080px) {
  .school-lab-hero {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 390px);
    min-height: auto;
    padding-top: clamp(112px, 12vw, 142px);
  }

  .study-guide-card.school-hero-ticket {
    width: 100%;
  }

  .path-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 280px;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 66px;
  }

  .tea-lab-layout {
    grid-template-columns: 1fr;
  }

  .tea-selector {
    position: static;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }

  .tea-selector-item:hover,
  .tea-selector-item.is-active {
    transform: translateY(-4px);
  }

  .tea-result-card {
    grid-template-columns: minmax(260px, .42fr) minmax(0, 1fr);
    min-height: auto;
  }

  .tea-result-photo {
    min-height: 420px;
  }

  .flavor-finder-section,
  .aeo-section {
    grid-template-columns: 1fr;
  }

  .taste-selector-panel,
  .taste-result-stage {
    min-height: auto;
  }

  .finder-options {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }

  .taste-option.is-active,
  .finder-options button:hover {
    transform: translateY(-4px);
  }

  .aeo-title {
    position: static;
    max-width: 760px;
  }

  .aeo-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .school-lab-hero {
    grid-template-columns: 1fr;
  }

  .study-guide-card.school-hero-ticket {
    justify-self: stretch;
    max-width: 620px;
  }

  .tea-path-section {
    grid-template-columns: 1fr;
  }

  .vertical-title {
    position: relative;
    top: auto;
    writing-mode: horizontal-tb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
  }

  .vertical-title span {
    font-size: clamp(20px, 4vw, 26px);
    letter-spacing: 3px;
  }

  .tea-selector {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tea-result-card {
    grid-template-columns: 1fr;
  }

  .tea-result-photo {
    min-height: clamp(240px, 44vw, 360px);
  }

  .tea-result-copy {
    align-content: start;
  }

  .finder-options {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .taste-pair-row,
  .taste-reason-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .taste-pair-row div:nth-child(3) {
    grid-column: 1 / -1;
    border-left: 0;
    border-top: 1px solid rgba(188, 172, 145, .38);
  }

  .aeo-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .school-lab-hero,
  .tea-path-section,
  .pairing-lab-section,
  .flavor-finder-section,
  .aeo-section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .school-lab-title h1 {
    font-size: clamp(36px, 10vw, 48px);
    line-height: 1.16;
    letter-spacing: -1px;
  }

  .study-guide-points {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .study-guide-points span + span {
    border-top: 0;
    border-left: 1px solid rgba(188, 172, 145, .38);
  }

  .path-scroll {
    grid-auto-flow: column;
    grid-auto-columns: minmax(278px, 84vw);
    grid-template-columns: none;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 310px;
    scroll-snap-align: start;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: auto;
  }

  .tea-selector,
  .finder-options,
  .taste-pair-row,
  .taste-reason-list {
    grid-template-columns: 1fr;
  }

  .taste-pair-row div + div,
  .taste-pair-row div:nth-child(3) {
    border-left: 0;
    border-top: 1px solid rgba(188, 172, 145, .38);
  }

  .tea-result-copy dl div {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

@media (max-width: 520px) {
  .school-lab-hero {
    padding-top: 104px;
  }

  .study-guide-card.school-hero-ticket,
  .flavor-finder-card,
  .taste-result-board,
  .aeo-list article,
  .tea-result-card,
  .path-scroll .path-panel {
    box-shadow: 0 14px 38px rgba(48, 42, 36, .07);
  }

  .study-guide-photo {
    min-height: 132px;
  }

  .study-guide-points span {
    min-height: 46px;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .pairing-lab-head h2,
  .finder-title h2,
  .aeo-title h2,
  .taste-result-board h3,
  .tea-result-copy h3 {
    font-size: clamp(27px, 8vw, 34px);
  }

  .tea-result-copy,
  .taste-result-board,
  .flavor-finder-card,
  .aeo-list article {
    padding: 22px;
  }

  .taste-option {
    min-height: 70px;
  }
}


/* tea result heading RWD: prevent awkward CJK breaks in medium and small layouts */
.tea-result-copy h3.tea-result-heading {
  display: grid;
  gap: 10px;
  max-width: 720px;
  overflow-wrap: normal;
  word-break: keep-all;
  text-wrap: balance;
}

.tea-result-heading-lead {
  display: block;
  color: var(--accent);
  font-family: inherit;
  font-size: clamp(15px, .42em, 20px);
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 2px;
}

.tea-result-heading-lead::after {
  content: '：';
}

.tea-result-heading-main {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: .08em .38em;
  line-height: 1.34;
}

.tea-result-dessert {
  white-space: nowrap;
}

.tea-result-dessert:not(:last-child)::after {
  content: '、';
}

@media (max-width: 1280px) {
  .tea-result-copy h3.tea-result-heading {
    font-size: clamp(24px, 2.8vw, 34px);
    line-height: 1.34;
  }
}

@media (max-width: 1080px) {
  .tea-result-copy h3.tea-result-heading {
    gap: 8px;
    font-size: clamp(23px, 3vw, 31px);
  }

  .tea-result-heading-lead {
    font-size: 14px;
    letter-spacing: 1.8px;
  }
}

@media (max-width: 900px) {
  .tea-result-copy h3.tea-result-heading {
    font-size: clamp(25px, 4.6vw, 36px);
  }
}

@media (max-width: 520px) {
  .tea-result-copy h3.tea-result-heading {
    font-size: clamp(24px, 7vw, 31px);
  }

  .tea-result-heading-main {
    gap: .1em .26em;
  }
}


/* Tea path equal text rhythm: align title and body text heights across all cards */
.path-scroll .path-panel,
.path-scroll .path-panel-wide,
.path-scroll .path-panel-note {
  grid-template-rows: auto minmax(142px, auto) minmax(112px, auto);
}

.path-scroll .path-panel h2,
.path-scroll .path-panel h3 {
  min-height: 142px;
  display: flex;
  align-items: flex-start;
  margin: 0;
  text-wrap: balance;
}

.path-scroll .path-panel p {
  align-self: end;
  min-height: 112px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

@media (max-width: 1280px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    grid-template-rows: auto minmax(126px, auto) minmax(112px, auto);
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 126px;
  }
}

@media (max-width: 1080px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    grid-template-rows: auto minmax(94px, auto) minmax(92px, auto);
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 94px;
  }

  .path-scroll .path-panel p {
    min-height: 92px;
  }
}

@media (max-width: 720px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    grid-template-rows: auto auto 1fr;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3,
  .path-scroll .path-panel p {
    min-height: auto;
  }
}


/* Tea path title size tuning: reduce card title size for a calmer rhythm */
.path-scroll .path-panel h2,
.path-scroll .path-panel h3 {
  font-size: clamp(22px, 1.55vw, 28px);
  line-height: 1.45;
  letter-spacing: -.25px;
}

@media (max-width: 1280px) {
  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    font-size: clamp(21px, 1.9vw, 25px);
    line-height: 1.5;
  }
}

@media (max-width: 1080px) {
  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    font-size: clamp(21px, 2.5vw, 24px);
    line-height: 1.48;
  }
}

@media (max-width: 720px) {
  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    font-size: 22px;
    line-height: 1.5;
  }
}


/* Tea path 2-column breakpoint polish: use medium layout below 1400px and reduce empty bottom space */
@media (max-width: 1400px) {
  .tea-path-section {
    grid-template-columns: 104px minmax(0, 1fr);
  }

  .path-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 280px;
    grid-template-rows: auto minmax(92px, auto) auto;
    gap: 14px;
    padding: clamp(24px, 2.3vw, 30px);
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 92px;
    font-size: clamp(22px, 2vw, 27px);
    line-height: 1.45;
  }

  .path-scroll .path-panel p {
    align-self: start;
    min-height: auto;
    -webkit-line-clamp: 3;
  }
}

@media (max-width: 1080px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 260px;
    grid-template-rows: auto minmax(78px, auto) auto;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 78px;
  }
}

@media (max-width: 900px) {
  .tea-path-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 292px;
    grid-template-rows: auto auto 1fr;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3,
  .path-scroll .path-panel p {
    min-height: auto;
  }

  .path-scroll .path-panel p {
    -webkit-line-clamp: 4;
  }
}


/* Tea path tablet layout: below 1085px title moves to top, cards keep 2-column layout */
@media (max-width: 1085px) and (min-width: 721px) {
  .tea-path-section {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-top: clamp(58px, 7vw, 82px);
    padding-bottom: clamp(58px, 7vw, 82px);
  }

  .vertical-title {
    position: relative;
    top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    writing-mode: horizontal-tb;
  }

  .vertical-title span {
    font-size: clamp(22px, 3.2vw, 30px);
    letter-spacing: 4px;
  }

  .vertical-title strong {
    font-size: 10px;
    letter-spacing: 4px;
  }

  .path-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: 260px;
    grid-template-rows: auto minmax(76px, auto) auto;
    gap: 12px;
    padding: clamp(22px, 3vw, 28px);
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: 76px;
    font-size: clamp(21px, 2.9vw, 26px);
    line-height: 1.48;
  }

  .path-scroll .path-panel p {
    align-self: start;
    min-height: auto;
    font-size: 14px;
    line-height: 1.85;
    -webkit-line-clamp: 3;
  }
}


/* Hero large heading tuning: reduce oversized desktop hero titles */
@media (min-width: 1086px) {
  .school-lab-title h1 {
    font-size: clamp(48px, 5vw, 68px);
    line-height: 1.12;
    letter-spacing: -1.2px;
  }

  .study-guide-copy h2 {
    max-width: 360px;
    font-size: clamp(26px, 2.25vw, 34px);
    line-height: 1.34;
    letter-spacing: -.35px;
  }
}


/* Tea path mobile fix: below 720px show all cards in one clear vertical flow */
@media (max-width: 720px) {
  .tea-path-section {
    grid-template-columns: 1fr;
    gap: 22px;
    padding-top: 52px;
    padding-bottom: 52px;
  }

  .vertical-title {
    position: relative;
    top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    writing-mode: horizontal-tb;
  }

  .vertical-title span {
    font-size: 22px;
    letter-spacing: 4px;
  }

  .vertical-title strong {
    font-size: 10px;
    letter-spacing: 4px;
  }

  .path-scroll {
    display: grid;
    grid-template-columns: 1fr !important;
    grid-auto-flow: row !important;
    grid-auto-columns: auto !important;
    gap: 14px;
    overflow: visible;
    padding-bottom: 0;
    scroll-snap-type: none;
  }

  .path-scroll .path-panel,
  .path-scroll .path-panel-wide,
  .path-scroll .path-panel-note {
    min-height: auto;
    width: 100%;
    scroll-snap-align: none;
    grid-template-rows: auto auto auto;
    gap: 14px;
    padding: 24px;
  }

  .path-scroll .path-panel h2,
  .path-scroll .path-panel h3 {
    min-height: auto;
    font-size: 22px;
    line-height: 1.48;
  }

  .path-scroll .path-panel p {
    min-height: auto;
    -webkit-line-clamp: unset;
  }
}

</style>
