<template>
  <main class="desktop-screen">
    <LanguageSwitcher />
    <FallingChips />

    <div class="desktop-hero-top">
      <BrandRow />
      <HeroHeadline />
      <HeroActionButton />
    </div>

    <WheelSection />
  </main>
</template>

<script setup lang="ts">
import HeroActionButton from './HeroActionButton.vue'
import BrandRow from './BrandRow.vue'
import FallingChips from './FallingChips.vue'
import HeroHeadline from './HeroHeadline.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import WheelSection from './WheelSection.vue'
</script>

<style scoped>
.desktop-screen {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px 40px;
  background: url('/desktop/bg-desktop.svg') center / cover no-repeat;
  overflow: hidden;
}

.desktop-hero-top {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  width: min(100%, 760px);
  box-sizing: border-box;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

@media (max-width: 900px) {
  .desktop-hero-top {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    z-index: auto;
    width: 100%;
    padding: 0;
    gap: 30px;
  }
}
</style>
