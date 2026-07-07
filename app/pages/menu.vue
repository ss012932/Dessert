<template>
  <main class="menu-page">
    <section class="menu-hero" aria-label="KASANE 菓商品總覽">
      <div class="hero-kana taste-reveal delay-1" aria-hidden="true">菓子<br />と茶</div>

      <div class="hero-copy taste-reveal">
        <p class="eyebrow">KASANE MENU</p>
        <h1>在甜點櫃前<br />挑一份剛好的心情</h1>
        <p>KASANE 菓販售季節和菓子、茶席組、茶飲與外帶禮盒</p>

        <div class="hero-quick-notes taste-reveal delay-1" aria-label="商品重點">
          <span>每日少量</span>
          <span>茶飲搭配</span>
          <span>禮盒預留</span>
        </div>
      </div>

      <div class="hero-showcase taste-reveal delay-2" aria-label="本日商品展示櫃">
        <Transition name="hero-main-fade" mode="out-in">
          <figure v-if="activeHeroIndex === 0" key="daifuku" class="showcase-main" :style="backgroundImageStyle(menuProductDaifukuImage)">
            <figcaption>
              <span>today's pick</span>
              <strong>草莓白餡大福</strong>
              <small>糯米皮、白餡、季節草莓</small>
            </figcaption>
          </figure>
          <figure v-else-if="activeHeroIndex === 1" key="monaka" class="showcase-main" :style="backgroundImageStyle(menuProductMonakaImage)">
            <figcaption>
              <span>tea aroma</span>
              <strong>抹茶柚子最中</strong>
              <small>薄脆最中、抹茶、柚子香氣</small>
            </figcaption>
          </figure>
          <figure v-else-if="activeHeroIndex === 2" key="pudding" class="showcase-main" :style="backgroundImageStyle(menuProductPuddingImage)">
            <figcaption>
              <span>roasted tea</span>
              <strong>焙茶布丁</strong>
              <small>焙茶香、淺焦糖、滑順口感</small>
            </figcaption>
          </figure>
          <figure v-else key="gift" class="showcase-main" :style="backgroundImageStyle(menuProductGiftImage)">
            <figcaption>
              <span>gift box</span>
              <strong>季節禮盒</strong>
              <small>四入、六入，可預留</small>
            </figcaption>
          </figure>
        </Transition>

        <div class="showcase-shelf" aria-label="其他代表品項">
          <button
            v-if="activeHeroIndex !== 0"
            type="button"
            aria-label="切換主圖為 草莓白餡大福"
            @click="selectHeroItem(0)"
          >
            <div class="shelf-image" :style="backgroundImageStyle(menuProductDaifukuImage)"></div>
            <small>today's pick</small>
            <strong>草莓白餡大福</strong>
          </button>
          <button
            v-if="activeHeroIndex !== 1"
            type="button"
            aria-label="切換主圖為 抹茶柚子最中"
            @click="selectHeroItem(1)"
          >
            <div class="shelf-image" :style="backgroundImageStyle(menuProductMonakaImage)"></div>
            <small>tea aroma</small>
            <strong>抹茶柚子最中</strong>
          </button>
          <button
            v-if="activeHeroIndex !== 2"
            type="button"
            aria-label="切換主圖為 焙茶布丁"
            @click="selectHeroItem(2)"
          >
            <div class="shelf-image" :style="backgroundImageStyle(menuProductPuddingImage)"></div>
            <small>roasted tea</small>
            <strong>焙茶布丁</strong>
          </button>
          <button
            v-if="activeHeroIndex !== 3"
            type="button"
            aria-label="切換主圖為 季節禮盒"
            @click="selectHeroItem(3)"
          >
            <div class="shelf-image" :style="backgroundImageStyle(menuProductGiftImage)"></div>
            <small>gift box</small>
            <strong>季節禮盒</strong>
          </button>
        </div>
      </div>
    </section>

    <nav class="menu-category-row" aria-label="商品分類快速導覽">
      <a href="#wagashi">
        <span>01</span>
        <strong>季節菓子</strong>
        <small>水果、白餡、茶香與小豆</small>
      </a>
      <a href="#set">
        <span>02</span>
        <strong>茶席組</strong>
        <small>小菓與茶的組合</small>
      </a>
      <a href="#tea">
        <span>03</span>
        <strong>茶飲</strong>
        <small>抹茶、焙茶、煎茶</small>
      </a>
      <a href="#gift">
        <span>04</span>
        <strong>禮盒</strong>
        <small>四入、六入，可預留</small>
      </a>
    </nav>

    <section class="signature-section" aria-label="主打商品">
      <div class="signature-shell">
        <aside class="signature-side-label taste-reveal">
          <span>signature</span>
          <small>first visit</small>
        </aside>

        <div class="signature-editorial">
          <article class="signature-feature-card taste-reveal">
            <div class="signature-feature-image" :style="backgroundImageStyle(menuProductMonakaImage)"></div>
            <div class="signature-feature-copy">
              <span>茶香人氣款</span>
              <h3>抹茶柚子最中</h3>
              <p>薄脆外殼、抹茶茶苦與柚子香氣，適合想從清爽茶香開始的人。</p>
              <div>
                <strong>NT$ 110</strong>
                <small>少量供應</small>
              </div>
            </div>
          </article>

          <div class="signature-picks taste-reveal delay-1">
            <article class="signature-pick-card">
              <div class="signature-pick-image" :style="backgroundImageStyle(menuProductDaifukuImage)"></div>
              <div class="signature-pick-copy">
                <span>本店人氣排行</span>
                <h3>草莓白餡大福</h3>
                <p>酸甜草莓、乾淨白餡與柔軟糯米皮。</p>
                <strong>NT$ 120</strong>
              </div>
            </article>
            <article class="signature-pick-card">
              <div class="signature-pick-image" :style="backgroundImageStyle(menuProductPuddingImage)"></div>
              <div class="signature-pick-copy">
                <span>溫厚口感推薦</span>
                <h3>焙茶布丁</h3>
                <p>溫厚焙茶香與淺焦糖，甜度收得安靜。</p>
                <strong>NT$ 95</strong>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="full-menu-section" aria-label="完整商品展示">
      <aside class="menu-board-intro taste-reveal">
        <p class="eyebrow">FULL MENU</p>
        <h2>店內販售品項</h2>
        <p>商品不是排成制式卡片，而像甜點櫃一樣錯落陳列。客人可以先看照片，再掃過價格、狀態與口味標籤。</p>

        <div class="category-tabs taste-reveal delay-1" role="tablist" aria-label="商品分類切換">
          <button
            v-for="tab in categoryTabs"
            :key="tab.category"
            type="button"
            :class="['category-tab', { 'is-active': selectedCategory === tab.category }]"
            :aria-selected="selectedCategory === tab.category"
            role="tab"
            @click="selectedCategory = tab.category"
          >
            <span>{{ tab.label }}</span>
            <small>{{ tab.count }}</small>
          </button>
        </div>
      </aside>

      <div class="product-board">
        <div class="product-board-top">
          <span>{{ getSelectedCategoryCount() }} items</span>
          <p>每日少量製作，實際供應依現場狀態調整。</p>
        </div>

        <article v-if="featuredProduct" class="product-lead-card taste-reveal">
          <button
            type="button"
            class="product-lead-photo"
            :style="backgroundImageStyle(featuredProduct.imageSrc)"
            :aria-label="'查看 ' + featuredProduct.name + ' 商品大圖'"
            @click="openProductImage(featuredProduct)"
          >
            <span>{{ featuredProduct.categoryLabel }}</span>
          </button>

          <div class="product-lead-info">
            
            <h3>{{ featuredProduct.name }}</h3>
            <p>{{ featuredProduct.description }}</p>
            <div class="product-lead-bottom">
              <strong>{{ featuredProduct.price }}</strong>
              <em :class="featuredProduct.statusClass">{{ featuredProduct.status }}</em>
            </div>
            <div class="product-tags">
              <span v-for="tag in featuredProduct.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>

        <div v-if="productListItems.length > 0" class="product-list-grid">
          <article
            v-for="product in productListItems"
            :key="product.id"
            class="product-list-card taste-reveal delay-1"
          >
            <button
              type="button"
              class="product-list-photo"
              :style="backgroundImageStyle(product.imageSrc)"
              :aria-label="'查看 ' + product.name + ' 商品大圖'"
              @click="openProductImage(product)"
            >
              <span>{{ product.categoryLabel }}</span>
            </button>

            <div class="product-info">
              <div class="product-title-row">
                <small>{{ product.id }}</small>
                <h3>{{ product.name }}</h3>
              </div>
              <p>{{ product.description }}</p>

              <div class="product-meta">
                <strong>{{ product.price }}</strong>
                <em :class="product.statusClass">{{ product.status }}</em>
              </div>

              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* 樣式維持於全域樣式表中，如需獨立樣式可於此區塊補充 */
</style>

<script>
import Swal from 'sweetalert2';
import matchaYuzuMonakaImage from '~/assets/image/matcha-yuzu-monaka.webp';
import strawberryDaifukuImage from '~/assets/image/strawberry-daifuku.webp';
import hojichaPuddingImage from '~/assets/image/hojicha-pudding.webp';
import chestnutImage from '~/assets/image/chestnut.webp';
import redbeanImage from '~/assets/image/redbean.webp';
import fourboxImage from '~/assets/image/fourbox.webp';
import matchaTeaImage from '~/assets/image/matchatea.webp';
import hojichaTeaImage from '~/assets/image/hojicha.webp';
import senchaImage from '~/assets/image/sencha.webp';
import seasonalGiftBoxImage from '~/assets/image/seasonal-gift-box.webp';

// 商品資料來源：setup() 產生結構化資料 (JSON-LD) 與 data() 初始化狀態共用同一份，避免重複維護
const menuProductsSeed = [
  {
    id: '01',
    category: 'wagashi',
    categoryLabel: '季節菓子',
    name: '草莓白餡大福',
    description: '柔軟糯米皮包住酸甜草莓與白餡，入口清亮，是午後第一口很適合的選擇。',
    price: 'NT$ 120',
    status: '本日供應',
    statusClass: 'available',
    tags: ['草莓', '白餡', '清爽'],
    imageSrc: strawberryDaifukuImage,
  },
  {
    id: '02',
    category: 'wagashi',
    categoryLabel: '季節菓子',
    name: '抹茶柚子最中',
    description: '外殼酥脆，抹茶餡帶著輕微茶苦，最後以柚子香氣收尾。',
    price: 'NT$ 110',
    status: '少量',
    statusClass: 'limited',
    tags: ['抹茶', '柚子', '酥脆'],
    imageSrc: matchaYuzuMonakaImage,
  },
  {
    id: '03',
    category: 'wagashi',
    categoryLabel: '季節菓子',
    name: '焙茶布丁',
    description: '焙茶香氣溫厚，焦糖不搶味，適合想吃一點甜、但不想太濃的人。',
    price: 'NT$ 95',
    status: '本日供應',
    statusClass: 'available',
    tags: ['焙茶', '焦糖', '滑順'],
    imageSrc: hojichaPuddingImage,
  },
  {
    id: '04',
    category: 'wagashi',
    categoryLabel: '季節菓子',
    name: '栗香浮島',
    description: '細緻蒸菓子帶栗子香氣，口感輕柔，適合搭配煎茶慢慢吃。',
    price: 'NT$ 105',
    status: '季節限定',
    statusClass: 'limited',
    tags: ['栗子', '蒸菓子', '溫厚'],
    imageSrc: chestnutImage,
  },
  {
    id: '05',
    category: 'wagashi',
    categoryLabel: '季節菓子',
    name: '小豆寒天',
    description: '寒天清透，小豆香氣乾淨，甜度收得很輕，適合夏日或飯後。',
    price: 'NT$ 90',
    status: '少量',
    statusClass: 'limited',
    tags: ['小豆', '寒天', '輕甜'],
    imageSrc: redbeanImage,
  },
  {
    id: '06',
    category: 'set',
    categoryLabel: '茶席組',
    name: '茶席小菓組',
    description: '四款當日小菓搭配一杯茶，讓味道有脆、有軟、有茶香，慢慢留在午後。',
    price: 'NT$ 180',
    status: '推薦',
    statusClass: 'available',
    tags: ['小菓', '茶', '午後'],
    imageSrc: fourboxImage,
  },
  {
    id: '07',
    category: 'tea',
    categoryLabel: '茶飲',
    name: '抹茶',
    description: '茶香清楚，尾韻帶一點苦，適合搭配白餡、水果與最中。',
    price: 'NT$ 130',
    status: '本日供應',
    statusClass: 'available',
    tags: ['茶香', '清爽', '苦韻'],
    imageSrc: matchaTeaImage,
  },
  {
    id: '08',
    category: 'tea',
    categoryLabel: '茶飲',
    name: '焙茶',
    description: '香氣溫厚，適合搭配布丁、栗子與焦糖系甜點。',
    price: 'NT$ 120',
    status: '本日供應',
    statusClass: 'available',
    tags: ['焙香', '溫厚', '焦糖'],
    imageSrc: hojichaTeaImage,
  },
  {
    id: '09',
    category: 'tea',
    categoryLabel: '茶飲',
    name: '煎茶',
    description: '乾淨帶鮮味，能讓甜點收得更俐落，適合搭配糯米皮與寒天。',
    price: 'NT$ 110',
    status: '本日供應',
    statusClass: 'available',
    tags: ['鮮味', '乾淨', '輕盈'],
    imageSrc: senchaImage,
  },
  {
    id: '10',
    category: 'gift',
    categoryLabel: '禮盒',
    name: '六入茶菓禮盒',
    description: '適合正式送禮或多人分享，內容包含茶香、果香與溫厚系甜點。',
    price: 'NT$ 620',
    status: '需預留',
    statusClass: 'preorder',
    tags: ['六入', '分享', '禮盒'],
    imageSrc: seasonalGiftBoxImage,
  },
];

export default {
  name: 'MenuPage',

  setup() {
    // Nuxt composables 需在 setup 內呼叫，其餘邏輯維持 Options API 撰寫
    useTasteReveal();

    useSeoMeta({
      title: '甜點菜單｜日式甜點、和菓子、茶品與禮盒',
      description: '瀏覽 KASANE 菓甜點菜單，包含抹茶柚子最中、草莓白餡大福、焙茶布丁、日本茶品與季節禮盒。',
      ogTitle: '甜點菜單｜KASANE 菓',
      ogDescription: '查看日式甜點、茶品、套組與禮盒，依照和菓子、茶品、禮盒分類快速找到適合品項。',
      ogType: 'website',
  ogUrl: 'https://dessert.christylove.com.tw/menu',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    });

    useHead({
      meta: [
        {
          name: 'keywords',
          content: '甜點菜單,日式甜點菜單,和菓子,抹茶柚子最中,草莓白餡大福,焙茶布丁,日本茶,季節禮盒,KASANE 菓',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          textContent: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'KASANE 菓甜點菜單',
            description: '日式甜點、茶品、套組與季節禮盒品項。',
            itemListElement: menuProductsSeed.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Product',
                name: product.name,
                category: product.categoryLabel,
                description: product.description,
              },
            })),
          }),
        },
      ],
    });
  },

  data() {
    return {
      selectedCategory: 'all',
      activeHeroIndex: 0,
      heroItemCount: 4,
      heroTimer: null,

      menuProductMonakaImage: matchaYuzuMonakaImage,
      menuProductDaifukuImage: strawberryDaifukuImage,
      menuProductPuddingImage: hojichaPuddingImage,
      menuProductChestnutImage: chestnutImage,
      menuProductRedbeanImage: redbeanImage,
      menuProductFourboxImage: fourboxImage,
      menuProductMatchaTeaImage: matchaTeaImage,
      menuProductHojichaTeaImage: hojichaTeaImage,
      menuProductSenchaImage: senchaImage,
      menuProductGiftImage: seasonalGiftBoxImage,

      menuProducts: menuProductsSeed,
    };
  },

  computed: {
    categoryTabs() {
      return [
        { category: 'all', label: '全部', count: this.menuProducts.length },
        { category: 'wagashi', label: '季節菓子', count: this.menuProducts.filter((p) => p.category === 'wagashi').length },
        { category: 'set', label: '茶席組', count: this.menuProducts.filter((p) => p.category === 'set').length },
        { category: 'tea', label: '茶飲', count: this.menuProducts.filter((p) => p.category === 'tea').length },
        { category: 'gift', label: '禮盒', count: this.menuProducts.filter((p) => p.category === 'gift').length },
      ];
    },

    visibleProducts() {
      if (this.selectedCategory === 'all') {
        return this.menuProducts;
      }
      return this.menuProducts.filter((product) => product.category === this.selectedCategory);
    },

    featuredProduct() {
      return this.visibleProducts[0];
    },

    productListItems() {
      return this.visibleProducts.slice(1);
    },
  },

  mounted() {
    this.restartHeroAutoplay();
  },

  beforeUnmount() {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
    }
  },

  methods: {
    selectHeroItem(index) {
      if (index === this.activeHeroIndex) {
        return;
      }
      this.activeHeroIndex = index;
      this.restartHeroAutoplay();
    },

    showNextHeroItem() {
      this.activeHeroIndex = (this.activeHeroIndex + 1) % this.heroItemCount;
    },

    restartHeroAutoplay() {
      if (this.heroTimer) {
        clearInterval(this.heroTimer);
      }
      this.heroTimer = setInterval(this.showNextHeroItem, 4200);
    },

    getSelectedCategoryCount() {
      return this.visibleProducts.length;
    },

    backgroundImageStyle(imageUrl) {
      return { backgroundImage: `url(${imageUrl})` };
    },

    openProductImage(product) {
      const imageUrl = product.imageSrc;

      Swal.fire({
        title: '',
        html: `
          <article class="kasane-product-preview">
            <img src="${imageUrl}" alt="${product.name}" />
            <div class="kasane-product-preview-info">
              <span>${product.categoryLabel}</span>
              <h2>${product.name}</h2>
              <p>${product.description}</p>
              <div class="kasane-product-preview-meta">
                <strong>${product.price}</strong>
                <em>${product.status}</em>
              </div>
              <div class="kasane-product-preview-tags">
                ${product.tags.map((tag) => `<small>${tag}</small>`).join('')}
              </div>
            </div>
          </article>
        `,
        confirmButtonText: '關閉',
        customClass: {
          popup: 'kasane-image-popup',
          htmlContainer: 'kasane-image-popup-text',
          confirmButton: 'kasane-image-popup-button',
        },
      });
    },
  },
};
</script>

<style scoped>
.menu-page {
  --ink: #302a24;
  --muted: #746d64;
  --line: rgba(188, 172, 145, .5);
  --green: #536b53;
  --accent: #9a6749;
  --paper: #fffdf8;
  --soft: #fbf5eb;
  min-height: 100vh;
  color: var(--ink);
  background:
    radial-gradient(circle at 86% 10%, rgba(208, 177, 132, .12), transparent 30%),
    linear-gradient(180deg, #fffaf2 0%, #fbf6ed 48%, #fffdf8 100%);
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

.menu-hero {
  position: relative;
  min-height: 92vh;
  padding: clamp(112px, 12vw, 150px) clamp(26px, 5vw, 82px) clamp(60px, 7vw, 104px);
  display: grid;
  grid-template-columns: 88px minmax(360px, .72fr) minmax(520px, .96fr);
  gap: clamp(28px, 5vw, 74px);
  align-items: center;
}

.menu-hero::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: clamp(42px, 6vw, 86px);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(188, 172, 145, .72), transparent);
}

.hero-kana {
  justify-self: start;
  color: rgba(83, 107, 83, .5);
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: 18px;
  line-height: 1.85;
  letter-spacing: .28em;
  writing-mode: vertical-rl;
}

.hero-copy {
  max-width: 620px;
}

.hero-copy h1 {
  margin: 18px 0 22px;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(40px, 4.8vw, 68px);
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -1.6px;
}

.hero-copy p,
.menu-category-row small,
.signature-main-copy p,
.menu-board-head p,
.product-info p,
.taste-guide-list p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.92;
  letter-spacing: .36px;
}

.hero-copy > p {
  max-width: 560px;
  font-size: 16px;
}

.hero-quick-notes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 30px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.hero-quick-notes span {
  color: #675f55;
  font-size: 12px;
  letter-spacing: 2px;
}

.hero-showcase {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 156px;
  grid-template-rows: minmax(360px, 54vh) auto;
  gap: 16px;
  align-items: stretch;
}

.hero-showcase::before {
  content: "";
  position: absolute;
  inset: 30px 46px 58px -26px;
  border: 1px solid rgba(188, 172, 145, .42);
  background: rgba(255, 253, 248, .38);
}

.showcase-main {
  position: relative;
  z-index: 1;
  grid-column: 1;
  grid-row: 1 / 3;
  margin: 0;
  background-size: cover;
  background-position: center;
  border: 12px solid rgba(255, 253, 248, .96);
  box-shadow: 0 0 0 1px rgba(48, 42, 36, .05), 0 22px 62px rgba(48, 42, 36, .09);
  overflow: hidden;
}

.hero-main-fade-enter-active,
.hero-main-fade-leave-active {
  transition: opacity 560ms cubic-bezier(.16, 1, .3, 1), transform 560ms cubic-bezier(.16, 1, .3, 1), filter 560ms cubic-bezier(.16, 1, .3, 1);
}

.hero-main-fade-enter-from,
.hero-main-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(.985);
  filter: blur(8px);
}

.showcase-main::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 54%, rgba(37, 30, 24, .5));
}

.showcase-main figcaption {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 1;
  display: grid;
  gap: 6px;
  color: #fffdf8;
}

.showcase-main span,
.showcase-shelf span,
.signature-main-copy span,
.signature-list span,
.product-tags span {
  font-size: 10px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
}

.showcase-main strong {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: .6px;
}

.showcase-main small {
  color: rgba(255, 253, 248, .82);
  font-size: 13px;
  letter-spacing: .7px;
}

.showcase-shelf {
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 1 / 3;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 12px;
  align-self: center;
}

.showcase-shelf button {
  display: grid;
  align-content: end;
  min-height: 132px;
  padding: 10px;
  background: rgba(255, 253, 248, .66);
  border: 1px solid rgba(188, 172, 145, .48);
  box-shadow: 0 12px 36px rgba(48, 42, 36, .05);
}

.shelf-image {
  min-height: 74px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
}

.showcase-shelf span {
  color: var(--accent);
}

.showcase-shelf strong {
  display: block;
  margin-top: 4px;
  color: var(--ink);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 500;
}

.menu-category-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0 clamp(26px, 6vw, 92px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.menu-category-row a {
  display: grid;
  gap: 8px;
  min-height: 132px;
  padding: 24px clamp(18px, 3vw, 34px);
  border-right: 1px solid rgba(188, 172, 145, .42);
  color: var(--ink);
  text-decoration: none;
  transition: background 220ms cubic-bezier(.25, 1, .5, 1), transform 220ms cubic-bezier(.25, 1, .5, 1);
}

.menu-category-row a:last-child {
  border-right: 0;
}

.menu-category-row a:hover {
  transform: translateY(-2px);
  background: rgba(255, 253, 248, .6);
}

.menu-category-row a:active {
  transform: scale(.96);
}

.menu-category-row span {
  color: var(--green);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
}

.menu-category-row strong {
  font-size: 19px;
  font-weight: 500;
  letter-spacing: .9px;
}

.signature-section {
  padding: clamp(76px, 9vw, 132px) clamp(26px, 6vw, 92px);
}

.signature-shell {
  position: relative;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: clamp(22px, 4vw, 54px);
}

.signature-side-label {
  display: grid;
  align-content: start;
  justify-items: center;
  gap: 18px;
  padding-top: 8px;
  color: rgba(83, 107, 83, .58);
  border-right: 1px solid rgba(188, 172, 145, .46);
}

.signature-side-label span {
  writing-mode: vertical-rl;
  font-size: 10px;
  letter-spacing: .58em;
  text-transform: uppercase;
}

.signature-side-label small {
  writing-mode: vertical-rl;
  color: rgba(154, 103, 73, .72);
  font-size: 10px;
  letter-spacing: .32em;
  text-transform: uppercase;
}

.signature-heading-block {
  display: grid;
  grid-template-columns: minmax(340px, .58fr) minmax(320px, .42fr);
  gap: clamp(30px, 6vw, 86px);
  align-items: end;
  margin-bottom: 34px;
}

.signature-heading-block h2 {
  margin: 14px 0 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(30px, 3.4vw, 46px);
  line-height: 1.28;
  font-weight: 400;
  letter-spacing: -.7px;
}

.signature-heading-block p:last-child,
.signature-feature-copy p,
.signature-pick-copy p,
.menu-board-head p,
.product-info p,
.taste-guide-list p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.92;
  letter-spacing: .36px;
}

.signature-editorial {
  display: grid;
  grid-template-columns: minmax(0, .98fr) minmax(330px, .42fr);
  gap: clamp(22px, 4vw, 56px);
  align-items: stretch;
}

.signature-feature-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(320px, .65fr) minmax(280px, .35fr);
  min-height: 430px;
  background: rgba(255, 253, 248, .62);
  border: 1px solid rgba(188, 172, 145, .5);
  overflow: hidden;
}

.signature-feature-card::before {
  display: none;
}

.signature-feature-image,
.signature-pick-image,
.product-photo {
  background-size: cover;
  background-position: center;
}

.signature-feature-image {
  min-height: 430px;
}

.signature-feature-copy {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  gap: 13px;
  padding: clamp(30px, 4vw, 54px);
}

.signature-feature-copy span,
.signature-pick-copy span,
.product-tags span {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(154, 103, 73, .08);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: none;
}

.signature-feature-copy h3 {
  margin: 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.2;
  font-weight: 400;
}

.signature-feature-copy div {
  display: flex;
  gap: 16px;
  align-items: baseline;
  margin-top: 6px;
}

.signature-feature-copy strong,
.signature-pick-copy strong,
.product-meta strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
}

.signature-feature-copy small {
  color: var(--green);
  font-size: 12px;
  letter-spacing: 1.6px;
}

.signature-picks {
  display: grid;
  gap: 18px;
}

.signature-pick-card {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  min-height: 190px;
  padding: 14px 0 18px;
  border-top: 1px solid var(--line);
}

.signature-pick-card:last-child {
  border-bottom: 1px solid var(--line);
}

.signature-pick-image {
  min-height: 128px;
  box-shadow: 0 14px 34px rgba(48, 42, 36, .06);
}

.signature-pick-copy {
  display: grid;
  gap: 7px;
}

.signature-pick-copy h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .4px;
}

.signature-pick-copy p {
  font-size: 13px;
  line-height: 1.75;
}

.section-intro,
.menu-board-head {
  display: grid;
  grid-template-columns: minmax(320px, .5fr) minmax(320px, .45fr);
  gap: clamp(34px, 7vw, 96px);
  align-items: end;
  margin-bottom: 34px;
}

.section-intro h2,
.menu-board-head h2,
.taste-guide h2 {
  margin: 14px 0 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(30px, 3.4vw, 46px);
  line-height: 1.28;
  font-weight: 400;
  letter-spacing: -.7px;
}

.full-menu-section {
  display: grid;
  grid-template-columns: minmax(260px, 22vw) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 62px);
  padding: clamp(76px, 9vw, 132px) clamp(20px, 4vw, 72px);
  border-top: 1px solid var(--line);
}

.menu-board-intro {
  position: sticky;
  top: 96px;
  align-self: start;
  min-height: 420px;
  padding-right: clamp(20px, 3vw, 42px);
  border-right: 1px solid rgba(188, 172, 145, .48);
}

.menu-board-intro h2 {
  margin: 14px 0 18px;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(30px, 3.3vw, 44px);
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: -.7px;
}

.menu-board-intro p,
.product-board-top p,
.product-info p,
.taste-guide-list p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.92;
  letter-spacing: .36px;
}

.category-tabs {
  display: grid;
  gap: 0;
  margin-top: 34px;
  border-top: 1px solid rgba(188, 172, 145, .5);
}

.category-tab {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  border: 0;
  border-bottom: 1px solid rgba(188, 172, 145, .5);
  background: transparent;
  color: #615950;
  cursor: pointer;
  transition: color 220ms cubic-bezier(.25, 1, .5, 1), transform 220ms cubic-bezier(.25, 1, .5, 1), padding-left 220ms cubic-bezier(.25, 1, .5, 1);
}

.category-tab:hover {
  color: var(--green);
  padding-left: 8px;
}

.category-tab:active {
  transform: scale(.96);
}

.category-tab.is-active {
  color: var(--green);
}

.category-tab span {
  font-size: 13px;
  letter-spacing: 1.6px;
}

.category-tab small {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 13px;
}

.category-tab:focus-visible {
  outline: 2px solid rgba(83, 107, 83, .45);
  outline-offset: 3px;
}

.product-board {
  min-width: 0;
}

.product-board-top {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 22px;
}

.product-board-top span {
  color: var(--green);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: nowrap;
}

.product-board-top p {
  max-width: 420px;
  text-align: right;
}

.product-lead-card {
  display: grid;
  grid-template-columns: minmax(360px, .58fr) minmax(320px, .42fr);
  min-height: 390px;
  margin-bottom: clamp(18px, 2vw, 28px);
  background: rgba(255, 253, 248, .72);
  border: 1px solid rgba(188, 172, 145, .48);
  overflow: hidden;
  box-shadow: 0 16px 46px rgba(48, 42, 36, .05);
}

.product-lead-photo,
.product-list-photo,
.product-photo {
  position: relative;
  background-size: cover;
  background-position: center;
}

.product-lead-photo span,
.product-list-photo span,
.product-photo span {
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 7px 10px;
  background: rgba(255, 253, 248, .92);
  color: #51493f;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.7px;
}

.product-lead-info {
  position: relative;
  display: grid;
  align-content: center;
  gap: 13px;
  padding: clamp(28px, 4vw, 52px);
}

.product-lead-info::before {
  content: "menu";
  position: absolute;
  right: clamp(18px, 3vw, 40px);
  top: 18px;
  color: rgba(83, 107, 83, .08);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(54px, 7vw, 96px);
  line-height: 1;
  text-transform: uppercase;
}

.product-lead-info small {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(154, 103, 73, .08);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: none;
}

.product-lead-info h3 {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-size: clamp(30px, 3.2vw, 44px);
  line-height: 1.18;
  font-weight: 400;
}

.product-lead-info p,
.product-info p,
.taste-guide-list p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.88;
  letter-spacing: .36px;
}

.product-lead-bottom {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 16px;
  align-items: baseline;
  margin-top: 4px;
}

.product-lead-bottom strong,
.product-meta strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
}

.product-lead-bottom em,
.product-meta em {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 4px 10px;
  border: 1px solid rgba(188, 172, 145, .58);
  border-radius: 999px;
  background: rgba(255, 253, 248, .72);
  color: #63594f;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1.4px;
  white-space: nowrap;
}

.product-lead-bottom em.limited,
.product-meta em.limited {
  border-color: rgba(145, 100, 57, .34);
  background: rgba(145, 100, 57, .08);
  color: #7b552f;
}

.product-lead-bottom em.preorder,
.product-meta em.preorder {
  border-color: rgba(83, 107, 83, .34);
  background: rgba(83, 107, 83, .09);
  color: var(--green);
}

.product-list-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(14px, 1.45vw, 22px);
}

.product-list-card {
  display: grid;
  grid-template-columns: 142px minmax(0, 1fr);
  min-height: 196px;
  background: rgba(255, 253, 248, .64);
  border: 1px solid rgba(188, 172, 145, .42);
  overflow: hidden;
  transition: transform 220ms cubic-bezier(.25, 1, .5, 1), background 220ms cubic-bezier(.25, 1, .5, 1), box-shadow 220ms cubic-bezier(.25, 1, .5, 1);
}

.product-list-card:nth-child(4n + 2),
.product-list-card:nth-child(4n + 3) {
  background: rgba(250, 244, 234, .68);
}

.product-list-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 253, 248, .96);
  box-shadow: 0 0 0 1px rgba(48, 42, 36, .035), 0 14px 38px rgba(48, 42, 36, .06);
}

.product-list-card:active {
  transform: scale(.98);
}

.product-info {
  display: grid;
  align-content: start;
  gap: 9px;
  padding: 18px;
}

.product-title-row {
  display: flex;
  gap: 11px;
  align-items: baseline;
}

.product-title-row small {
  color: var(--green);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 15px;
}

.product-title-row h3 {
  margin: 0;
  font-size: 19px;
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: .4px;
}

.product-info p {
  font-size: 13px;
  line-height: 1.72;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px 14px;
  align-items: center;
  margin-top: 4px;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-tags span {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(154, 103, 73, .08);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: none;
}

.taste-guide {
  padding: clamp(72px, 9vw, 128px) clamp(26px, 6vw, 92px);
  display: grid;
  grid-template-columns: minmax(300px, .42fr) minmax(0, 1fr);
  gap: clamp(36px, 7vw, 96px);
  align-items: start;
  border-top: 1px solid var(--line);
}

.taste-guide-list {
  display: grid;
  border-top: 1px solid var(--line);
}

.taste-guide-list p {
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}

.taste-guide-list span {
  display: inline-block;
  min-width: 72px;
  color: var(--green);
  letter-spacing: 2px;
}


@media (max-width: 1180px) {
  .menu-hero {
    grid-template-columns: 52px 1fr;
  }

  .hero-showcase {
    grid-column: 2;
  }

  .section-intro,
  .menu-board-head,
  .signature-heading-block,
  .signature-editorial,
  .full-menu-section,
  .taste-guide {
    grid-template-columns: 1fr;
  }

  .menu-board-intro {
    position: static;
    min-height: auto;
    padding-right: 0;
    border-right: 0;
  }

  .category-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    border-top: 0;
  }

  .category-tab {
    width: auto;
    gap: 12px;
    padding: 10px 15px;
    border: 1px solid rgba(188, 172, 145, .58);
    border-radius: 999px;
    background: rgba(255, 253, 248, .46);
  }

  .product-lead-card {
    grid-template-columns: minmax(300px, .55fr) minmax(280px, .45fr);
  }

  .product-list-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 880px) {
  .menu-category-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .menu-category-row a:nth-child(2n) {
    border-right: 0;
  }

  .menu-category-row a:nth-child(-n + 2) {
    border-bottom: 1px solid rgba(188, 172, 145, .42);
  }

  .signature-feature-card {
    grid-template-columns: 1fr;
  }

  .signature-feature-image {
    min-height: 320px;
  }

  .product-lead-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .product-lead-photo {
    min-height: 300px;
  }

  .product-list-card {
    grid-template-columns: 132px minmax(0, 1fr);
  }
}

@media (max-width: 620px) {
  .menu-hero {
    grid-template-columns: 1fr;
    padding-top: 108px;
  }

  .hero-kana {
    display: none;
  }

  .hero-copy h1 {
    font-size: 34px;
    line-height: 1.24;
  }

  .hero-copy p,
  .menu-category-row small,
  .signature-main-copy p,
  .menu-board-head p,
  .product-info p,
  .taste-guide-list p {
    font-size: 14px;
    line-height: 1.82;
  }

  .hero-showcase {
    grid-column: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .showcase-main {
    grid-column: auto;
    grid-row: auto;
    min-height: 330px;
    border-width: 10px;
  }

  .showcase-shelf {
    grid-column: auto;
    grid-row: auto;
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .menu-category-row,
  .product-list-grid {
    grid-template-columns: 1fr;
  }

  .menu-category-row a,
  .menu-category-row a:nth-child(2n),
  .menu-category-row a:nth-child(-n + 2) {
    border-right: 0;
    border-bottom: 1px solid rgba(188, 172, 145, .42);
  }

  .menu-category-row a:last-child {
    border-bottom: 0;
  }

  .signature-shell {
    grid-template-columns: 1fr;
  }

  .signature-side-label {
    display: none;
  }

  .signature-pick-card {
    grid-template-columns: 96px minmax(0, 1fr);
  }

  .signature-pick-image {
    min-height: 96px;
  }

  .product-board-top {
    display: grid;
  }

  .product-board-top p {
    text-align: left;
  }

  .product-lead-photo {
    min-height: 260px;
  }

  .product-list-card {
    grid-template-columns: 1fr;
  }

  .product-list-photo {
    min-height: 210px;
  }
}
.taste-guide{position:relative;background:linear-gradient(180deg,rgba(255,253,248,.25),rgba(250,244,234,.42))}.taste-guide-heading{padding-right:34px;border-right:1px solid rgba(188,172,145,.46)}.taste-guide-heading p:last-child{color:var(--muted);line-height:1.9}.taste-route-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.showcase-shelf small{color:var(--accent);font-size:10px;letter-spacing:2.2px;text-transform:uppercase}.showcase-shelf span{display:none}.signature-feature-copy span,.signature-pick-copy span{width:max-content;justify-self:start;max-width:100%;border-radius:4px;padding:4px 9px;background:rgba(154,103,73,.09)}
.signature-picks {
  gap: 26px;
}

.signature-pick-card {
  grid-template-columns: 170px minmax(0, 1fr);
  min-height: 230px;
  padding: 24px 0 26px;
}

.signature-pick-image {
  min-height: 170px;
}

.signature-pick-copy {
  gap: 10px;
}

.signature-pick-copy h3 {
  font-size: 23px;
}

.signature-pick-copy p {
  font-size: 14px;
  line-height: 1.82;
}

.signature-pick-copy span {
  width: max-content;
  justify-self: start;
}

@media (max-width: 620px) {
  .signature-pick-card {
    grid-template-columns: 112px minmax(0, 1fr);
    min-height: auto;
  }

  .signature-pick-image {
    min-height: 112px;
  }
}

.hero-copy h1 span {
  display: block;
}

@media (min-width: 1181px) {
  .hero-copy h1 {
    font-size: clamp(42px, 3.6vw, 56px);
    line-height: 1.18;
    letter-spacing: -1.2px;
  }
}

@media (max-width: 1180px) and (min-width: 621px) {
  .hero-copy h1 {
    max-width: 720px;
    font-size: clamp(36px, 4.1vw, 48px);
    line-height: 1.24;
    letter-spacing: -1px;
  }
}

@media (max-width: 620px) {
  .hero-copy h1 {
    max-width: 340px;
    font-size: 31px;
    line-height: 1.34;
    letter-spacing: -.6px;
  }

  .hero-copy h1 span:first-child::after {
    content: "";
  }

  .hero-copy h1 span:last-child {
    max-width: 9.6em;
  }
}

/* 修正 MENU 首屏標題：取消強制分段，改用尺寸控制自然換行 */
.hero-copy h1 {
  text-wrap: balance;
}

@media (min-width: 1181px) {
  .hero-copy {
    max-width: 640px;
  }

  .hero-copy h1 {
    max-width: 640px;
    font-size: clamp(40px, 3.15vw, 52px);
    line-height: 1.18;
    letter-spacing: -1.1px;
  }
}

@media (max-width: 1180px) and (min-width: 621px) {
  .hero-copy {
    max-width: 680px;
  }

  .hero-copy h1 {
    max-width: 680px;
    font-size: clamp(34px, 3.9vw, 44px);
    line-height: 1.28;
    letter-spacing: -.8px;
  }
}

@media (max-width: 620px) {
  .hero-copy h1 {
    max-width: 100%;
    font-size: 28px;
    line-height: 1.48;
    letter-spacing: -.45px;
    text-wrap: pretty;
  }

  .hero-showcase {
    gap: 14px;
  }

  .showcase-main {
    min-height: 300px;
  }

  .showcase-main figcaption {
    left: 18px;
    right: 18px;
    bottom: 18px;
  }

  .showcase-shelf {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    align-self: stretch;
  }

  .showcase-shelf button {
    min-height: auto;
    padding: 8px;
    align-content: start;
  }

  .shelf-image {
    min-height: 0;
    aspect-ratio: 1 / .72;
    margin-bottom: 8px;
  }

  .showcase-shelf small {
    font-size: 8px;
    letter-spacing: 1.6px;
    line-height: 1.3;
  }

  .showcase-shelf strong {
    margin-top: 3px;
    font-size: 12px;
    line-height: 1.35;
  }
}

@media (max-width: 420px) {
  .hero-copy h1 {
    font-size: 26px;
    line-height: 1.5;
  }

  .showcase-shelf {
    gap: 8px;
  }

  .showcase-shelf button {
    padding: 7px;
  }
}

.product-lead-photo,
.product-list-photo {
  border: 0;
  padding: 0;
  text-align: left;
  cursor: zoom-in;
}

.product-lead-photo:focus-visible,
.product-list-photo:focus-visible {
  outline: 2px solid rgba(83, 107, 83, .5);
  outline-offset: -4px;
}

.product-list-photo::after,
.product-lead-photo::after {
  content: "查看大圖";
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px 8px;
  background: rgba(255, 253, 248, .88);
  color: #51493f;
  font-size: 11px;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 180ms ease, transform 180ms ease;
}

.product-list-photo:hover::after,
.product-lead-photo:hover::after {
  opacity: 1;
  transform: translateY(0);
}

:global(.kasane-image-popup) {
  width: min(920px, calc(100vw - 32px));
  padding: 20px 20px 26px;
  border-radius: 0;
  background: #fffdf8;
  border: 1px solid rgba(188, 172, 145, .58);
  color: #302a24;
}

:global(.kasane-image-popup .swal2-image) {
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  margin: 0 auto 18px;
}

:global(.kasane-image-popup-title) {
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  font-weight: 400;
  font-size: 28px;
}

:global(.kasane-image-popup-text) {
  color: #746d64;
  line-height: 1.8;
}

:global(.kasane-image-popup-button) {
  border-radius: 999px;
  background: #536b53;
  padding: 10px 24px;
}

@media (max-width: 1180px) and (min-width: 881px) {
  .product-list-card {
    grid-template-columns: 180px minmax(0, 1fr);
  }

  .product-list-photo {
    min-height: 180px;
    background-size: cover;
    background-position: center;
  }
}

@media (max-width: 880px) and (min-width: 621px) {
  .product-list-card {
    grid-template-columns: 170px minmax(0, 1fr);
    min-height: 190px;
  }

  .product-list-photo {
    min-height: 190px;
    background-size: cover;
    background-position: center;
  }
}

@media (max-width: 620px) {
  .product-list-photo::after,
  .product-lead-photo::after {
    opacity: 1;
    transform: none;
    font-size: 10px;
  }
}

:global(.kasane-image-popup) {
  width: min(980px, calc(100vw - 32px));
}

:global(.kasane-product-preview) {
  display: grid;
  grid-template-columns: minmax(320px, .58fr) minmax(280px, .42fr);
  gap: 0;
  text-align: left;
}

:global(.kasane-product-preview img) {
  width: 100%;
  height: min(62vh, 560px);
  object-fit: cover;
  display: block;
}

:global(.kasane-product-preview-info) {
  display: grid;
  align-content: center;
  gap: 13px;
  padding: clamp(24px, 4vw, 44px);
  background: #fffdf8;
}

:global(.kasane-product-preview-info > span) {
  width: max-content;
  padding: 5px 10px;
  background: rgba(154, 103, 73, .09);
  color: #9a6749;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.4px;
}

:global(.kasane-product-preview-info h2) {
  margin: 0;
  font-family: Georgia, "Times New Roman", "Microsoft JhengHei", serif;
  color: #302a24;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.2;
  font-weight: 400;
}

:global(.kasane-product-preview-info p) {
  margin: 0;
  color: #746d64;
  font-size: 15px;
  line-height: 1.9;
  letter-spacing: .36px;
}

:global(.kasane-product-preview-meta) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

:global(.kasane-product-preview-meta strong) {
  font-family: Georgia, "Times New Roman", serif;
  color: #302a24;
  font-size: 20px;
}

:global(.kasane-product-preview-meta em) {
  padding: 5px 11px;
  border: 1px solid rgba(188, 172, 145, .58);
  border-radius: 999px;
  color: #63594f;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1.2px;
}

:global(.kasane-product-preview-tags) {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

:global(.kasane-product-preview-tags small) {
  padding: 4px 9px;
  border: 1px solid rgba(154, 103, 73, .24);
  background: rgba(154, 103, 73, .07);
  color: #7d4f36;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.1px;
}

@media (max-width: 720px) {
  :global(.kasane-product-preview) {
    grid-template-columns: 1fr;
  }

  :global(.kasane-product-preview img) {
    height: auto;
    max-height: 52vh;
    object-fit: contain;
    background: #f7f0e6;
  }
}

/* 修正 MENU 首屏中尺寸輪播：避免主圖變成直式裁切 */
@media (max-width: 1180px) and (min-width: 621px) {
  .hero-showcase {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    max-width: 760px;
  }

  .hero-showcase::before {
    inset: 22px 18px 92px -18px;
  }

  .showcase-main {
    grid-column: auto;
    grid-row: auto;
    min-height: 0;
    aspect-ratio: 16 / 10;
    background-size: cover;
    background-position: center;
  }

  .showcase-shelf {
    grid-column: auto;
    grid-row: auto;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: none;
    align-self: stretch;
  }

  .showcase-shelf button {
    min-height: auto;
    padding: 10px;
    align-content: start;
  }

  .shelf-image {
    min-height: 0;
    aspect-ratio: 1.45 / 1;
    margin-bottom: 8px;
  }
}

@media (max-width: 820px) and (min-width: 621px) {
  .hero-showcase {
    max-width: 100%;
  }

  .showcase-main {
    aspect-ratio: 4 / 3;
  }
}
</style>
