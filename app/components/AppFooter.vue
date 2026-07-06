<template>
  <!-- Footer：品牌收尾區，放大 Logo 並用簡潔裝飾提升記憶點 -->
  <footer class="site-footer simple-footer">
    <div class="simple-footer-inner">
      <div class="simple-footer-brand">
        <div class="simple-footer-mark" aria-hidden="true">
          <img class="simple-footer-mark-image" :src="footerLogoImage" alt="" loading="lazy" />
        </div>

        <div class="simple-footer-brand-copy">
          <span class="simple-footer-kicker">KASANE SWEETS & TEA</span>
          <div class="simple-footer-logo">KASANE 菓</div>

          <div class="simple-footer-tags" aria-label="品牌特色">
            <span>WAGASHI</span>
            <span>TEA</span>
            <span>GIFT</span>
          </div>
        </div>
      </div>

      <div class="simple-footer-side">
        <div class="simple-footer-contact">
          <span>CONTACT</span>
          <a href="mailto:lovechristy1115@gmail.com">lovechristy1115@gmail.com</a>
        </div>

        <div class="simple-footer-social" aria-label="社群連結">
          <a href="https://www.instagram.com/___christylove___?igsh=anJ6OGQ4eWV1Z2Ru" aria-label="Instagram">IG</a>
          <a href="https://www.facebook.com/christylove1115" aria-label="Facebook">FB</a>
          <a href="https://lin.ee/Sg0PjMC" aria-label="LINE">LINE</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerLogoImage from '~/assets/image/logo.webp';
</script>
