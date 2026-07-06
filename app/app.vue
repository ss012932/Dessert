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
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
});
</script>
