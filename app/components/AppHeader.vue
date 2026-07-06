<template>
  <!-- Header：桌機使用水平導覽；小尺寸使用側邊漢堡選單 -->
  <header class="site-header refined-header">
    <div class="header-inner refined-header-inner">
      <NuxtLink class="header-brand refined-header-brand" to="/" aria-label="回到首頁" @click="closeMenu">
        <span>KASANE</span>
        <strong>菓</strong>
      </NuxtLink>

      <nav class="refined-header-nav" :class="{ 'is-open': isMenuOpen }" aria-label="主要導覽">
        <div class="refined-mobile-menu-head">
          <span>MENU</span>
          <button type="button" aria-label="關閉選單" @click="closeMenu">×</button>
        </div>

        <NuxtLink to="/" @click="closeMenu">首頁</NuxtLink>
        <NuxtLink to="/menu" @click="closeMenu">甜點菜單</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">品牌故事</NuxtLink>
        <NuxtLink to="/school" @click="closeMenu">小學堂</NuxtLink>
        <NuxtLink to="/store" @click="closeMenu">門市資訊</NuxtLink>

        <div class="refined-mobile-menu-note">季節の菓子とお茶</div>
      </nav>

      <div class="refined-header-note">季節の菓子とお茶</div>

<button
  class="refined-menu-button"
  type="button"
  :aria-expanded="isMenuOpen"
  aria-label="開啟選單"
  @click="toggleMenu"
>
  ☰
</button>
    </div>

    <button
      v-if="isMenuOpen"
      class="refined-menu-backdrop"
      type="button"
      aria-label="關閉選單背景"
      @click="closeMenu"
    ></button>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 控制小尺寸側邊漢堡選單開關。
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
