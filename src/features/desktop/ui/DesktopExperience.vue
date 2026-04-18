<template>
  <main class="desktop-screen">
    <LanguageSwitcher />
    <FallingChips />

    <div class="desktop-content-column">
      <div id="desktop-bonus-anchor" class="desktop-bonus-anchor"></div>

      <div class="desktop-hero-top">
        <BrandRow />
        <HeroHeadline />
        <HeroActionButton />
      </div>

      <WheelSection />
    </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #0c0e18;
  background-image: url('/desktop/bg-desktop.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.desktop-content-column {
  position: relative;
  z-index: 1;
  width: 610px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.desktop-hero-top {
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
}

.desktop-content-column > :deep(.wheel-section) {
  order: 2;
}

.desktop-bonus-anchor {
  order: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desktop-bonus-anchor:empty {
  display: none;
}
</style>
