<!-- ============================================================
  前台預設 Layout
  控制前台導覽列、主要內容區與頁尾
============================================================ -->
<template>
  <div class="site-wrapper">
    <!-- 前台導覽列區域 -->
    <AppHeader />

    <!-- 前台主要內容區域 -->
    <main class="site-main">
      <slot />
    </main>

    <!-- 前台頁尾區域 -->
    <AppFooter />
  </div>
</template>

<script setup>
// Nuxt 會自動引入 components 內的 AppHeader 與 AppFooter
</script>
