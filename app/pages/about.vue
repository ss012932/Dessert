<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero-copy taste-reveal">
        <p class="about-kicker">ABOUT KASANE</p>
        <h1>把甜，慢慢留下</h1>
        <p class="about-lead">
          KASANE 菓想留下的，不是很張揚的甜味，而是客人坐下來喝茶時，心裡慢慢安靜下來的那一刻。
        </p>
        <div class="about-tags" aria-label="品牌關鍵字">
          <span>seasonal wagashi</span>
          <span>tea pairing</span>
          <span>small batch</span>
        </div>
      </div>

      <div class="about-hero-photo taste-reveal delay-1" :style="backgroundImageStyle(aboutHeroStoreImage)" aria-label="KASANE 菓店內空間"></div>
    </section>

    <section class="about-origin">
      <div class="origin-heading taste-reveal">
        <p class="about-kicker">BEGINNING</p>
        <h2>甜點<br />是從家裡開始的</h2>
      </div>

      <div class="origin-body taste-reveal delay-1">
        <p>
          店主記憶裡的甜點，總是和午後有關。熱茶剛泡好，桌上有一小盤剛做好的點心，
          大人們說話很輕，孩子在旁邊等著第一口。
        </p>
        <p>
          後來開始學著做餡、揉皮、試茶，才發現好吃不是把味道堆滿，而是留下剛好的空白。
          有些甜味適合安慰人，有些茶香適合陪人慢慢坐著。KASANE 菓就是從這樣的心情開始的。
        </p>
      </div>
    </section>

    <section class="about-craft">
      <div class="craft-photo-main taste-reveal" :style="backgroundImageStyle(aboutCraftMainImage)"></div>

      <div class="craft-note taste-reveal delay-1">
        <p class="about-kicker">OUR HANDS</p>
        <h2>每天重複的小事<br />決定甜點最後的溫度</h2>
        <p>
          我們會先試茶，再調整餡料的甜度。水果如果酸一點，白餡就收得更乾淨；
          焙茶如果香氣厚一點，焦糖就放得更輕。這些細節不一定會被馬上說出來，
          但希望你吃到的時候，會覺得它是被好好照顧過的。
        </p>
      </div>

      <div class="craft-photo-small taste-reveal delay-2" :style="backgroundImageStyle(aboutCraftTeaImage)"></div>
    </section>

    <section class="about-care">
      <div class="care-visual taste-reveal">
        <p class="about-kicker">WE CARE</p>
        <h2>那些很小的地方<br />會被吃進心裡</h2>
      </div>

      <div class="care-notes taste-reveal delay-1">
        <article>
          <span>01</span>
          <div>
            <h3>甜度剛好</h3>
            <p>不是越濃越好，而是讓茶香、果酸和餡料都有說話的空間。</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>少量手作</h3>
            <p>每天做剛好的量，讓點心在最好的狀態被端上桌或放進盒裡。</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>好好包起來</h3>
            <p>帶走的不只是甜點，也是一份想讓對方慢下來的心意。</p>
          </div>
        </article>
      </div>
    </section>

    <section class="about-closing">
      <div class="closing-note taste-reveal">
        <p class="about-kicker">A LITTLE WISH</p>
        <h2>願你帶走的，不只是甜點</h2>
        <p>
          如果某個忙碌的日子，你想起 KASANE 菓，希望那不是因為我們做得多華麗，
          而是那一口剛好的甜，曾經讓你覺得今天可以慢慢來
        </p>
        <span>KASANE 菓</span>
      </div>

      <div class="closing-photo-wrap taste-reveal delay-1">
        <div class="closing-photo" :style="backgroundImageStyle(aboutClosingGiftImage)"></div>
        <small>seasonal gift / quiet afternoon</small>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import aboutHeroStoreImage from '~/assets/image/about1.webp';
import aboutCraftMainImage from '~/assets/image/about2.webp';
import aboutCraftTeaImage from '~/assets/image/about3.webp';
import aboutCareDaifukuImage from '~/assets/image/about4.webp';
import aboutClosingGiftImage from '~/assets/image/about5.webp';

useTasteReveal();

function backgroundImageStyle(imageUrl: string) {
  return { backgroundImage: `url(${imageUrl})` };
}

useSeoMeta({
  title: '品牌故事｜KASANE 菓日式甜點與茶香手作',
  description: '認識 KASANE 菓的品牌故事，從日式甜點、茶香、餡料甜度與少量手作細節，做出剛好的甜點溫度。',
  ogTitle: '品牌故事｜KASANE 菓',
  ogDescription: 'KASANE 菓相信甜點不只是甜，而是茶香、餡料、季節與手作細節的剛好重疊。',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
});

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'KASANE 菓品牌故事,日式甜點品牌,和菓子手作,茶香甜點,少量手作甜點',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: '品牌故事｜KASANE 菓',
        description: 'KASANE 菓的品牌故事與日式甜點手作理念。',
        inLanguage: 'zh-Hant-TW',
        mainEntity: {
          '@type': 'Organization',
          name: 'KASANE 菓',
          description: '以日式甜點、和菓子與茶香搭配為核心的甜點品牌。',
        },
      }),
    },
  ],
});
</script>

<style scoped>
.about-page {
  --gutter: clamp(22px, 5vw, 72px);
  --max: 1220px;
  --ink: #302b25;
  --muted: #746d63;
  --green: #4f6f52;
  --line: #d8cebd;
  --paper: #fffdf8;
  min-height: 100vh;
  background: #f8f4ec;
  color: var(--ink);
  overflow: hidden;
}

.about-kicker {
  margin: 0;
  color: var(--green);
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.about-hero,
.about-origin,
.about-craft,
.about-care,
.about-closing {
  width: min(var(--max), calc(100% - var(--gutter) * 2));
  margin: auto;
}

.about-hero {
  padding: clamp(128px, 14vw, 176px) 0 clamp(72px, 9vw, 118px);
  display: grid;
  grid-template-columns: minmax(0, .74fr) minmax(520px, .9fr);
  gap: clamp(56px, 8vw, 118px);
  align-items: center;
}

.about-hero-copy {
  max-width: 540px;
}

.about-hero h1 {
  margin: 20px 0 22px;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(42px, 4.8vw, 64px);
  line-height: 1.15;
  font-weight: 400;
  letter-spacing: -1.2px;
}

.about-lead {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 2.05;
  letter-spacing: .4px;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  margin-top: 34px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.about-tags span {
  color: #6f665c;
  font-size: 10px;
  letter-spacing: 3px;
}

.about-hero-photo {
  min-height: clamp(460px, 43vw, 620px);
  background-size: cover;
  background-position: center;
  border: 14px solid var(--paper);
  box-shadow: 0 28px 86px rgba(47, 42, 36, .1);
}

.about-origin {
  width: min(1040px, calc(100% - var(--gutter) * 2));
  padding: clamp(58px, 8vw, 96px) 0;
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: clamp(42px, 7vw, 96px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.origin-heading h2,
.craft-note h2,
.care-visual h2,
.closing-note h2 {
  margin: 16px 0 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-weight: 400;
  letter-spacing: -.5px;
}

.origin-heading h2 {
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.36;
}

.origin-body {
  display: grid;
  gap: 24px;
  max-width: 650px;
}

.origin-body p,
.craft-note p,
.care-notes p,
.closing-note p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 2.02;
  letter-spacing: .42px;
}

.about-craft {
  padding: clamp(78px, 10vw, 136px) 0;
  display: grid;
  grid-template-columns: minmax(520px, .96fr) minmax(340px, .72fr);
  grid-template-rows: auto auto;
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.craft-photo-main,
.craft-photo-small,
.care-photo,
.closing-photo {
  background-size: cover;
  background-position: center;
}

.craft-photo-main {
  grid-row: 1 / 3;
  min-height: clamp(500px, 47vw, 660px);
  box-shadow: 0 24px 76px rgba(47, 42, 36, .1);
}

.craft-note {
  margin-top: clamp(34px, 5vw, 72px);
  padding: clamp(30px, 4vw, 48px);
  background: rgba(255, 253, 248, .82);
  border: 1px solid var(--line);
}

.craft-note h2 {
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.3;
  margin-bottom: 18px;
}

.craft-photo-small {
  width: 76%;
  min-height: 240px;
  justify-self: end;
  box-shadow: 0 20px 58px rgba(47, 42, 36, .09);
  transform: rotate(-1deg);
}

.about-care {
  width: min(1060px, calc(100% - var(--gutter) * 2));
  padding: clamp(72px, 9vw, 122px) 0;
  display: grid;
  grid-template-columns: minmax(320px, .78fr) minmax(420px, 1fr);
  gap: clamp(44px, 7vw, 88px);
  align-items: center;
}

.care-visual {
  position: relative;
  padding-top: 8px;
}

.care-visual h2 {
  max-width: 420px;
  margin-bottom: 28px;
  font-size: clamp(30px, 3.2vw, 44px);
  line-height: 1.32;
}

.care-photo {
  width: min(380px, 100%);
  min-height: 260px;
  border: 12px solid var(--paper);
  box-shadow: 0 24px 70px rgba(47, 42, 36, .1);
}

.care-caption {
  margin: 16px 0 0;
  color: #8a8176;
  font-size: 11px;
  letter-spacing: 2.6px;
}

.care-notes {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.care-notes article {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(216, 206, 189, .78);
}

.care-notes article:last-child {
  border-bottom: 0;
}

.care-notes span {
  color: var(--green);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
}

.care-notes h3 {
  margin: 0 0 10px;
  font-size: 22px;
  font-weight: 500;
}

.about-closing {
  position: relative;
  width: min(1120px, calc(100% - var(--gutter) * 2));
  padding: clamp(70px, 9vw, 120px) 0 clamp(90px, 12vw, 150px);
  display: grid;
  grid-template-columns: minmax(0, .88fr) minmax(310px, .5fr);
  gap: clamp(42px, 6vw, 92px);
  align-items: end;
}

.about-closing::before {
  content: "";
  position: absolute;
  left: 0;
  right: 18%;
  top: clamp(38px, 5vw, 70px);
  bottom: clamp(52px, 7vw, 94px);
  border: 1px solid rgba(216, 206, 189, .72);
  background: rgba(255, 253, 248, .42);
}

.closing-note {
  position: relative;
  z-index: 1;
  max-width: 650px;
  padding: clamp(34px, 5vw, 60px) 0 clamp(34px, 5vw, 60px) clamp(28px, 5vw, 66px);
}

.closing-note h2 {
  font-size: clamp(30px, 3.4vw, 42px);
  line-height: 1.35;
  margin-bottom: 20px;
}

.closing-note span {
  display: block;
  margin-top: 26px;
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 4px;
}

.closing-photo-wrap {
  position: relative;
  z-index: 1;
  justify-self: end;
  width: min(380px, 100%);
  padding: 12px 12px 18px;
  background: var(--paper);
  border: 1px solid rgba(216, 206, 189, .86);
  box-shadow: 0 22px 64px rgba(47, 42, 36, .1);
  transform: rotate(1deg);
}

.closing-photo {
  min-height: clamp(260px, 28vw, 360px);
}

.closing-photo-wrap small {
  display: block;
  margin-top: 14px;
  color: #8a8176;
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 2.4px;
}


@media (max-width: 920px) {
  .about-hero,
  .about-origin,
  .about-craft,
  .about-care,
  .about-closing {
    grid-template-columns: 1fr;
  }

  .about-hero {
    gap: 34px;
  }

  .about-hero-photo {
    min-height: 360px;
  }

  .about-origin {
    gap: 28px;
  }

  .craft-photo-main {
    grid-row: auto;
    min-height: 420px;
  }

  .craft-note {
    margin-top: 0;
  }

  .craft-photo-small {
    width: 100%;
    transform: none;
  }

  .about-care {
    width: min(var(--max), calc(100% - var(--gutter) * 2));
    gap: 30px;
  }

  .care-visual h2 {
    max-width: 620px;
  }

  .care-photo {
    width: min(360px, 100%);
  }

  .about-closing::before {
    right: 0;
  }

  .closing-note {
    padding-right: clamp(24px, 5vw, 48px);
  }

  .closing-photo-wrap {
    justify-self: start;
    width: min(360px, 88%);
    margin-left: clamp(24px, 6vw, 54px);
    transform: rotate(-.8deg);
  }
}

@media (max-width: 560px) {
  .about-hero {
    padding-top: 112px;
  }

  .about-hero h1 {
    font-size: 34px;
    line-height: 1.28;
  }

  .about-hero-photo,
  .craft-photo-main {
    min-height: 280px;
  }

  .about-tags {
    gap: 10px 14px;
  }

  .origin-heading h2,
  .craft-note h2,
  .care-visual h2,
  .closing-note h2 {
    font-size: 28px;
  }

  .origin-body p,
  .craft-note p,
  .care-notes p,
  .closing-note p {
    font-size: 15px;
    line-height: 1.95;
  }

  .craft-note {
    padding: 24px 22px;
  }

  .care-notes article {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    padding: 22px 0;
  }

  .care-photo {
    min-height: 230px;
  }

  .closing-note {
    padding: 34px 24px 18px;
  }

  .closing-photo-wrap {
    width: calc(100% - 48px);
    margin-left: 24px;
  }

  .closing-photo {
    min-height: 240px;
  }
}

/* A LITTLE WISH：收尾區加一層更淺的紙感底色，讓區塊更有分隔 */
.about-closing::before{
  background: linear-gradient(135deg, rgba(255,253,248,.72), rgba(250,246,238,.86));
  box-shadow: 0 24px 80px rgba(47,42,36,.045);
}

</style>
