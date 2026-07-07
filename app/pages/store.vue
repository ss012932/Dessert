<template>
  <main class="store-page">
    <section class="store-hero" :style="backgroundImageStyle(storeHeroImage)" aria-label="門市資訊總覽">
      <div class="hero-overlay"></div>

      <div class="hero-ticket taste-reveal">
        <p class="eyebrow">KASANE STORE</p>
        <h1>來店、取貨、宅配<br />都有剛好的安排</h1>
        <p>
          門市每日少量製作，現場品項會依季節水果、茶香與餡料狀態調整。內用、預留取貨與冷藏宅配，都建議先確認時間與保存方式。
        </p>

        <div class="ticket-row">
          <span>OPEN</span>
          <strong>週三至週日 11:00–18:00</strong>
        </div>
        <div class="ticket-row">
          <span>PLACE</span>
          <strong>台中市西區午後路 12 號</strong>
        </div>
        <div class="ticket-row">
          <span>NOTE</span>
          <strong>售完可能提早打烊</strong>
        </div>
      </div>

      <div class="hero-store-note taste-reveal delay-1" aria-hidden="true">
        <span>visit</span>
        <span>pickup</span>
        <span>delivery</span>
      </div>
    </section>

    <section class="visit-guide-section" aria-label="訪店、取貨、宅配與保存指南">
      <div class="guide-receipt taste-reveal">
        <p class="eyebrow">VISIT GUIDE</p>
        <h2>到店前<br />把取貨與保存一起看完</h2>
        <p>
          甜點狀態會受到時間與溫度影響。這裡把到店購買、預留取貨、冷藏宅配與保存提醒整理成一張門市指南。
        </p>

        <div class="receipt-highlight">
          <span>冷藏宅配</span>
          <strong>NT$ 160 起</strong>
          <small>滿 NT$ 2,000 免運</small>
        </div>
      </div>

      <div class="guide-board">
        <article class="guide-step-card taste-reveal delay-1">
          <span>店內購買</span>
          <h3>當日品項以現場為準</h3>
          <p>每日甜點數量有限，季節水果與禮盒內容會依製作狀態調整。</p>
        </article>

        <article class="guide-step-card taste-reveal delay-1">
          <span>預留取貨</span>
          <h3>建議前一日預留</h3>
          <p>大福、水果類與禮盒可預留。若需大量訂購，建議提前 3–5 日聯繫。</p>
        </article>

        <article class="guide-step-card taste-reveal delay-1">
          <span>冷藏宅配</span>
          <h3>以保存狀態安排出貨</h3>
          <p>宅配品項會依適合運送的內容安排，重要送禮建議提前 1–2 日到貨。</p>
        </article>

        <article class="guide-keep-card taste-reveal delay-1">
          <span>保存提醒</span>
          <h3>收到後請冷藏 0–7°C</h3>
          <p>水果大福建議當日食用；禮盒依內容約可冷藏 1–3 日，不建議冷凍保存。</p>
        </article>

        <article class="guide-keep-card is-soft taste-reveal delay-2">
          <span>取貨提醒</span>
          <h3>離店後避免久放常溫</h3>
          <p>建議自備保冷袋，尤其是水果、鮮奶油或需長時間移動的訂單。</p>
        </article>
      </div>
    </section>

    <section class="faq-section" aria-label="購買宅配與保存常見問題">
      <div class="faq-title-card taste-reveal">
        <p class="eyebrow">ORDER FAQ</p>
        <h2>購買、宅配<br />與保存常見問題</h2>
        <!-- <p>這裡只整理宅配運費、到貨日期、保存方式、預訂取貨、付款與退換貨；茶與甜點怎麼搭配請看小學堂。</p> -->
      </div>

      <div class="faq-board">
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '宅配運費怎麼計算？'"
            @click="toggleFaq('宅配運費怎麼計算？')"
          >
            <span>運費</span>
            <strong>宅配運費怎麼計算？</strong>
            <i>{{ openedFaq === '宅配運費怎麼計算？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '宅配運費怎麼計算？'">冷藏宅配運費 NT$ 160 起，實際金額會依盒數、配送地區與材積調整。單筆訂單滿 NT$ 2,000 可免運；離島或特殊地區會另外確認運費。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '可以指定到貨日期嗎？'"
            @click="toggleFaq('可以指定到貨日期嗎？')"
          >
            <span>運送</span>
            <strong>可以指定到貨日期嗎？</strong>
            <i>{{ openedFaq === '可以指定到貨日期嗎？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '可以指定到貨日期嗎？'">可以備註希望到貨日期，我們會盡量安排，但冷藏物流仍可能受天候、節慶檔期或配送量影響，建議重要送禮提前 1–2 日到貨。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '甜點可以保存多久？'"
            @click="toggleFaq('甜點可以保存多久？')"
          >
            <span>保存</span>
            <strong>甜點可以保存多久？</strong>
            <i>{{ openedFaq === '甜點可以保存多久？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '甜點可以保存多久？'">水果大福與鮮果類建議當日食用，冷藏最晚隔日食用。焙茶布丁、寒天與部分禮盒品項約可冷藏 1–3 日，實際期限會以盒內保存卡為準。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '收到宅配後要怎麼保存？'"
            @click="toggleFaq('收到宅配後要怎麼保存？')"
          >
            <span>保存</span>
            <strong>收到宅配後要怎麼保存？</strong>
            <i>{{ openedFaq === '收到宅配後要怎麼保存？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '收到宅配後要怎麼保存？'">收到後請立即冷藏於 0–7°C，不建議冷凍。食用前可放置室溫 5–10 分鐘，讓糯米皮與餡料口感回到較柔軟的狀態。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '禮盒需要提前預訂嗎？'"
            @click="toggleFaq('禮盒需要提前預訂嗎？')"
          >
            <span>預訂</span>
            <strong>禮盒需要提前預訂嗎？</strong>
            <i>{{ openedFaq === '禮盒需要提前預訂嗎？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '禮盒需要提前預訂嗎？'">建議提前 1 日預訂。若需要 10 盒以上或指定日期大量取貨，建議提前 3–5 日聯繫，以便安排製作與包裝。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '預留後可以保留到幾點？'"
            @click="toggleFaq('預留後可以保留到幾點？')"
          >
            <span>取貨</span>
            <strong>預留後可以保留到幾點？</strong>
            <i>{{ openedFaq === '預留後可以保留到幾點？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '預留後可以保留到幾點？'">一般預留可保留至當日 17:30。若會晚到，請提前告知；未聯繫且逾時未取，可能會釋出給現場客人。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '宅配訂單需要先付款嗎？'"
            @click="toggleFaq('宅配訂單需要先付款嗎？')"
          >
            <span>付款</span>
            <strong>宅配訂單需要先付款嗎？</strong>
            <i>{{ openedFaq === '宅配訂單需要先付款嗎？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '宅配訂單需要先付款嗎？'">宅配訂單需先完成付款才會安排製作與出貨。門市取貨可現場付款，大量訂購可能需要先付訂金。</p>
          </Transition>
        </article>
        <article class="faq-item taste-reveal delay-1">
          <button
            type="button"
            :aria-expanded="openedFaq === '甜點可以退換貨嗎？'"
            @click="toggleFaq('甜點可以退換貨嗎？')"
          >
            <span>退換</span>
            <strong>甜點可以退換貨嗎？</strong>
            <i>{{ openedFaq === '甜點可以退換貨嗎？' ? '−' : '+' }}</i>
          </button>

          <Transition name="faq-collapse">
            <p v-if="openedFaq === '甜點可以退換貨嗎？'">因甜點屬於短效期食品，售出後不接受因個人口味、保存不當或未依時間取貨造成的退換貨。若商品配送過程有明顯損壞，請於收到當日拍照並聯繫我們。</p>
          </Transition>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import storeHeroImage from '~/assets/image/store1.webp';

useTasteReveal();

function backgroundImageStyle(imageUrl: string) {
  return { backgroundImage: `url(${imageUrl})` };
}

const openedFaq = ref('宅配運費怎麼計算？');

function toggleFaq(question: string) {
  openedFaq.value = openedFaq.value === question ? '' : question;
}

useSeoMeta({
  title: '門市資訊｜預約取貨、冷藏宅配、保存方式',
  description: '查看 KASANE 菓門市資訊、營業時間、地址、預留取貨、冷藏宅配運費、保存方式與購買常見問題。',
  ogTitle: '門市資訊｜KASANE 菓',
  ogDescription: '整理到店購買、預留取貨、冷藏宅配、保存提醒、付款與退換貨常見問題。',
  ogType: 'website',
  ogUrl: 'https://dessert.christylove.com.tw/store',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
});

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'KASANE 菓門市資訊,日式甜點宅配,甜點預約取貨,冷藏宅配,甜點保存方式,台中日式甜點',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Bakery',
            name: 'KASANE 菓',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '午後路 12 號',
              addressLocality: '西區',
              addressRegion: '台中市',
              addressCountry: 'TW',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '11:00',
                closes: '18:00',
              },
            ],
            servesCuisine: ['日式甜點', '和菓子', '日本茶'],
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '宅配運費怎麼計算？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '冷藏宅配運費 NT$ 160 起，實際金額會依盒數、配送地區與材積調整；單筆訂單滿 NT$ 2,000 可免運。',
                },
              },
              {
                '@type': 'Question',
                name: '可以指定到貨日期嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '可以備註希望到貨日期，實際到貨仍會依物流配送狀況調整，重要送禮建議提前 1 至 2 日到貨。',
                },
              },
              {
                '@type': 'Question',
                name: '收到宅配後要怎麼保存？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '收到後請立即冷藏 0 至 7°C 保存，水果大福建議當日食用，禮盒依內容約可冷藏 1 至 3 日。',
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
.store-page {
  --ink: #302a24;
  --muted: #746d64;
  --line: rgba(188, 172, 145, .5);
  --green: #536b53;
  --accent: #9a6749;
  --paper: #fffdf8;
  min-height: 100vh;
  color: var(--ink);
  background: linear-gradient(180deg, #fffaf2 0%, #fbf6ed 50%, #fffdf8 100%);
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

.store-hero {
  position: relative;
  min-height: 100vh;
  padding: clamp(116px, 12vw, 162px) clamp(26px, 6vw, 92px) clamp(56px, 7vw, 96px);
  display: grid;
  align-items: end;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(35, 28, 23, .58), rgba(35, 28, 23, .16) 46%, rgba(250, 244, 234, .5)),
    linear-gradient(180deg, rgba(20, 15, 12, .12), rgba(20, 15, 12, .42));
}

.hero-ticket {
  position: relative;
  z-index: 1;
  width: min(560px, 100%);
  padding: clamp(30px, 4vw, 48px);
  background: rgba(255, 253, 248, .88);
  border: 1px solid rgba(255, 253, 248, .55);
  box-shadow: 0 24px 72px rgba(22, 17, 13, .24);
  backdrop-filter: blur(16px);
}

.hero-ticket h1 {
  margin: 18px 0 18px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(32px, 3.4vw, 48px);
  line-height: 1.22;
  font-weight: 400;
  letter-spacing: -1.3px;
}

.hero-ticket p,
.ledger-item p,
.route-card p,
.shipping-copy p,
.shipping-cards p,
.faq-title-card p,
.faq-item p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
  letter-spacing: .36px;
}

.ticket-row {
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 18px;
  align-items: baseline;
  padding: 15px 0;
  border-bottom: 1px solid rgba(188, 172, 145, .42);
}

.ticket-row:first-of-type {
  margin-top: 24px;
  border-top: 1px solid rgba(188, 172, 145, .42);
}

.ticket-row span,
.ledger-item span,
.route-card small,
.shipping-cards span,
.faq-item button span {
  color: var(--accent);
  font-size: 10px;
  letter-spacing: 2.3px;
  text-transform: uppercase;
}

.ticket-row strong {
  font-size: 16px;
  font-weight: 500;
}

.hero-store-note {
  position: absolute;
  right: clamp(26px, 6vw, 92px);
  bottom: clamp(38px, 5vw, 72px);
  z-index: 1;
  display: flex;
  gap: 22px;
  color: rgba(255, 253, 248, .78);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.store-ledger {
  padding: clamp(76px, 9vw, 126px) clamp(26px, 6vw, 92px);
  display: grid;
  grid-template-columns: minmax(300px, .34fr) minmax(0, 1fr);
  gap: clamp(38px, 7vw, 98px);
  border-bottom: 1px solid var(--line);
}

.ledger-heading h2,
.route-heading h2,
.shipping-copy h2,
.faq-title-card h2 {
  margin: 14px 0 0;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(30px, 3.4vw, 30px);
  line-height: 1.28;
  font-weight: 400;
  letter-spacing: -.7px;
}

.ledger-list {
  display: grid;
  border-top: 1px solid var(--line);
}

.ledger-item {
  display: grid;
  grid-template-columns: 120px 220px minmax(0, 1fr);
  gap: 24px;
  align-items: baseline;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}

.ledger-item strong {
  font-size: 20px;
  font-weight: 500;
}

.visit-guide-section {
  position: relative;
  padding: clamp(76px, 9vw, 132px) clamp(26px, 6vw, 92px);
  display: grid;
  grid-template-columns: minmax(310px, .34fr) minmax(0, 1fr);
  gap: clamp(38px, 7vw, 98px);
  border-bottom: 1px solid var(--line);
  background:
    radial-gradient(circle at 82% 18%, rgba(154, 103, 73, .08), transparent 25%),
    linear-gradient(180deg, rgba(255, 253, 248, .2), rgba(250, 244, 234, .46));
}

.visit-guide-section::before {
  content: "GUIDE";
  position: absolute;
  right: clamp(26px, 6vw, 92px);
  top: 34px;
  color: rgba(83, 107, 83, .055);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(92px, 12vw, 180px);
  line-height: 1;
  letter-spacing: -.08em;
}

.guide-receipt {
  position: relative;
  z-index: 1;
  align-self: start;
  padding: clamp(28px, 4vw, 42px);
  background: rgba(255, 253, 248, .78);
  border: 1px solid rgba(188, 172, 145, .5);
  box-shadow: 0 20px 56px rgba(48, 42, 36, .06);
}

.guide-receipt::after {
  content: "";
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: -7px;
  height: 14px;
  background: repeating-linear-gradient(90deg, transparent 0 10px, rgba(188, 172, 145, .38) 10px 18px);
  opacity: .55;
}

.guide-receipt h2 {
  margin: 14px 0 18px;
  font-family: Georgia, 'Times New Roman', 'Microsoft JhengHei', serif;
  font-size: clamp(23px, 2vw, 30px);
  line-height: 1.36;
  font-weight: 400;
  letter-spacing: -.55px;
}

.guide-receipt p,
.guide-step-card p,
.guide-keep-card p,
.faq-title-card p,
.faq-item p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
  letter-spacing: .36px;
}

.receipt-highlight {
  display: grid;
  gap: 7px;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px dashed rgba(154, 103, 73, .36);
}

.receipt-highlight span,
.guide-step-card span,
.guide-keep-card span,
.faq-item button span {
  color: var(--accent);
  font-size: 10px;
  letter-spacing: 2.3px;
  text-transform: uppercase;
}

.receipt-highlight strong {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 26px;
  font-weight: 500;
}

.receipt-highlight small {
  color: var(--green);
  font-size: 12px;
  letter-spacing: 1.4px;
}

.guide-board {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(22px, 2.2vw, 34px);
}

.guide-step-card,
.guide-keep-card {
  position: relative;
  min-height: 230px;
  display: grid;
  gap: 10px;
  padding: clamp(22px, 3vw, 32px);
  background: rgba(255, 253, 248, .68);
  border: 1px solid rgba(188, 172, 145, .48);
  overflow: hidden;
}

.guide-step-card {
  align-content: center;
}

.guide-keep-card {
  align-content: end;
}

.guide-step-card {
  grid-column: span 2;
  min-height: 210px;
}

.guide-step-card:nth-child(2) {
  background: rgba(250, 244, 234, .82);
}

.guide-step-card:nth-child(3) {
  margin-top: 0;
}

.guide-keep-card {
  grid-column: span 3;
  min-height: 210px;
  margin-top: 10px;
  background: rgba(83, 107, 83, .08);
}

.guide-keep-card.is-soft {
  background: rgba(154, 103, 73, .08);
}

.guide-step-card::before,
.guide-keep-card::before {
  content: "";
  position: absolute;
  left: 24px;
  top: 26px;
  width: 42px;
  height: 1px;
  background: rgba(154, 103, 73, .5);
}

.guide-step-card h3,
.guide-keep-card h3 {
  margin: 0;
  font-size: 23px;
  line-height: 1.42;
  font-weight: 500;
}

.faq-section {
  padding: clamp(76px, 9vw, 126px) clamp(26px, 6vw, 92px);
  display: grid;
  grid-template-columns: minmax(300px, .32fr) minmax(0, 1fr);
  gap: clamp(38px, 7vw, 98px);
}

.faq-title-card {
  position: sticky;
  top: 96px;
  align-self: start;
  padding: 30px;
  background: rgba(255, 253, 248, .7);
  border: 1px solid rgba(188, 172, 145, .46);
}

.faq-title-card p:last-child {
  margin-top: 18px;
}

.faq-board {
  columns: 2 320px;
  column-gap: 16px;
}

.faq-item {
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  background: rgba(255, 253, 248, .62);
  border: 1px solid rgba(188, 172, 145, .46);
  break-inside: avoid;
}

.faq-item button {
  width: 100%;
  display: grid;
  grid-template-columns: 82px minmax(0, 1fr) 24px;
  gap: 18px;
  align-items: center;
  padding: 22px 24px;
  border: 0;
  background: transparent;
  color: var(--ink);
  text-align: left;
  cursor: pointer;
}

.faq-item button strong {
  font-size: 18px;
  font-weight: 500;
}

.faq-item button i {
  font-style: normal;
  color: var(--green);
  font-size: 22px;
  text-align: right;
}

.faq-item p {
  padding: 0 24px 24px 124px;
}

.faq-collapse-enter-active,
.faq-collapse-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.faq-collapse-enter-from,
.faq-collapse-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}


@media (max-width: 1080px) {
  .store-ledger,
  .visit-guide-section,
  .faq-section {
    grid-template-columns: 1fr;
  }

  .ledger-item {
    grid-template-columns: 110px minmax(180px, .34fr) minmax(0, 1fr);
  }

  .guide-board {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .guide-step-card,
  .guide-keep-card {
    grid-column: span 1;
    transform: none !important;
  }

  .faq-title-card {
    position: static;
  }
}

@media (max-width: 680px) {
  .store-hero {
    padding-top: 112px;
  }

  .hero-ticket h1 {
    font-size: 30px;
    line-height: 1.28;
  }

  .guide-receipt h2 {
    font-size: 26px;
    line-height: 1.38;
  }

  .hero-store-note {
    display: none;
  }

  .ticket-row,
  .ledger-item,
  .faq-item button {
    grid-template-columns: 1fr;
  }

  .guide-board {
    grid-template-columns: 1fr;
  }

  .guide-step-card,
  .guide-keep-card {
    min-height: 190px;
  }

  .faq-item p {
    padding: 0 24px 24px;
  }
}


/* Store Hero 中小尺寸修正：票券不要太下面 */
@media (max-width: 980px) {
  .store-hero {
    min-height: 100svh;
    align-items: start;
    padding-top: clamp(118px, 15vw, 150px);
    padding-bottom: 44px;
  }

  .hero-ticket {
    width: min(620px, 100%);
    padding: clamp(26px, 4vw, 38px);
  }

  .hero-store-note {
    bottom: 26px;
  }
}

@media (max-width: 680px) {
  .store-hero {
    min-height: auto;
    padding-top: 104px;
    padding-bottom: 34px;
  }

  .hero-ticket {
    padding: 24px;
  }
}


/* Store Hero 962px 以下：改成中尺寸置中票券版型 */
@media (max-width: 962px) {
  .store-hero {
    min-height: auto;
    align-items: start;
    justify-items: center;
    padding: clamp(30px, 5vw, 54px) clamp(22px, 5vw, 40px) clamp(54px, 7vw, 76px);
    background-position: center top;
  }

  .hero-ticket {
    width: min(760px, 100%);
    padding: clamp(28px, 4.8vw, 42px);
  }

  .hero-ticket h1 {
    max-width: 100%;
    font-size: clamp(30px, 4.2vw, 40px);
    line-height: 1.28;
    letter-spacing: -.8px;
  }

  .hero-ticket p {
    max-width: 100%;
  }

  .ticket-row {
    grid-template-columns: 88px minmax(0, 1fr);
  }

  .hero-store-note {
    display: none;
  }
}

@media (max-width: 680px) {
  .store-hero {
    padding: 32px clamp(16px, 4vw, 24px) 48px;
  }

  .hero-ticket h1 {
    font-size: 30px;
    line-height: 1.32;
  }
}


/* Store Hero 962px 以下修正：避免票券壓到 Header 與邊界 */
@media (max-width: 962px) {
  .store-hero {
    box-sizing: border-box;
    min-height: calc(100svh - 80px);
    padding-top: clamp(44px, 7vw, 72px);
    padding-right: clamp(28px, 6vw, 54px);
    padding-left: clamp(28px, 6vw, 54px);
    padding-bottom: clamp(52px, 7vw, 82px);
  }

  .hero-ticket {
    width: min(700px, calc(100vw - clamp(56px, 12vw, 108px)));
    max-width: 100%;
  }
}

@media (max-width: 720px) {
  .store-hero {
    min-height: calc(100svh - 70px);
    padding-top: 38px;
    padding-right: 28px;
    padding-left: 28px;
  }

  .hero-ticket {
    width: 100%;
  }
}


/* Store Hero 中尺寸：票券稍微往下，保留目前版型 */
@media (max-width: 962px) and (min-width: 681px) {
  .hero-ticket {
    margin-top: clamp(18px, 3vw, 34px);
  }
}


/* Store Hero 中尺寸最終位置：票券在背景圖中垂直置中，不隨裝置變小往上飄 */
@media (max-width: 962px) and (min-width: 681px) {
  .store-hero {
    min-height: calc(100svh - 80px);
    align-items: center;
    justify-items: center;
    padding-top: clamp(48px, 6vw, 72px);
    padding-bottom: clamp(48px, 6vw, 72px);
  }

  .hero-ticket {
    margin-top: 0;
  }
}

@media (max-width: 760px) and (min-width: 681px) {
  .store-hero {
    min-height: calc(100svh - 70px);
    padding-top: 44px;
    padding-bottom: 44px;
  }
}


/* Store Hero 中小尺寸固定置中：覆蓋前面所有 680px / 962px 分段造成的位置飄移 */
@media (max-width: 962px) {
  .store-hero {
    box-sizing: border-box;
    min-height: calc(100svh - 76px);
    display: grid;
    place-items: center;
    padding: clamp(36px, 6vw, 64px) clamp(24px, 5vw, 48px) clamp(42px, 6vw, 68px);
    background-position: center center;
  }

  .hero-ticket {
    width: min(700px, 100%);
    max-width: 100%;
    margin: 0;
  }

  .hero-store-note {
    display: none;
  }
}

@media (max-width: 520px) {
  .store-hero {
    min-height: calc(100svh - 68px);
    padding: 28px 18px 34px;
  }

  .hero-ticket {
    padding: 22px;
  }
}


/* Store Hero 中小尺寸最終修正：縮短 overlay 高度，但票券維持置中且不被遮住 */
@media (max-width: 962px) {
  .store-hero {
    /* 控制整個 hero/overlay 高度，不再吃滿整個視窗 */
    min-height: max(620px, 76svh);
    display: grid;
    place-items: center;
    padding: clamp(34px, 5vw, 52px) clamp(24px, 5vw, 48px);
    overflow: visible;
    background-position: center center;
  }

  .hero-overlay {
    /* overlay 跟著較短的 hero，不會一路壓到下方內容 */
    inset: 0;
  }

  .hero-ticket {
    width: min(700px, 100%);
    max-width: 100%;
    margin: 0;
  }
}

@media (max-width: 720px) {
  .store-hero {
    min-height: max(600px, 74svh);
    padding: 32px 24px;
  }
}

@media (max-width: 520px) {
  .store-hero {
    min-height: max(560px, 72svh);
    padding: 28px 18px;
  }

  .hero-ticket {
    padding: 22px;
  }
}


@media (max-width: 680px) {
  .store-hero {
    min-height: 720px;
    display: grid;
    place-items: center;
    padding: 40px 18px 54px;
    background-position: center center;
  }

  .hero-ticket {
    width: min(100%, 390px);
    margin: 0 auto;
  }
}

@media (max-width: 420px) {
  .store-hero {
    min-height: 700px;
    padding: 38px 16px 52px;
  }

  .hero-ticket {
    width: min(100%, 354px);
  }
}

@media (max-width: 380px) {
  .store-hero {
    min-height: 690px;
    padding: 36px 14px 50px;
  }

  .hero-ticket {
    width: min(100%, 340px);
  }
}


/* Store Hero 小尺寸：票券稍微往下，但維持在 hero 舞台內置中 */
@media (max-width: 680px) {
  .store-hero {
    place-items: center;
    padding-top: 64px;
    padding-bottom: 44px;
  }

  .hero-ticket {
    transform: translateY(26px);
  }
}

@media (max-width: 420px) {
  .store-hero {
    padding-top: 58px;
    padding-bottom: 40px;
  }

  .hero-ticket {
    transform: translateY(22px);
  }
}

@media (max-width: 380px) {
  .hero-ticket {
    transform: translateY(18px);
  }
}


/* Store guide keep card：提醒卡 TAG 加大，提升辨識度 */
.guide-keep-card > span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.6px;
}

@media (max-width: 680px) {
  .guide-keep-card > span {
    font-size: 11px;
    letter-spacing: 2.2px;
  }
}


/* Store visit guide：讓背景 GUIDE 字更明顯，但不干擾前景內容 */
.visit-guide-section::before {
  color: rgba(83, 107, 83, .11);
  text-shadow: 0 1px 0 rgba(255, 253, 248, .5);
}

@media (max-width: 680px) {
  .visit-guide-section::before {
     color: rgba(83, 107, 83, .2);
  }
}


/* Store FAQ：大尺寸小標題說明不換行 */
@media (min-width: 1081px) {
  .faq-title-card p:last-child {
    white-space: nowrap;
  }
}

@media (max-width: 1080px) {
  .faq-title-card p:last-child {
    white-space: normal;
  }
}
</style>
