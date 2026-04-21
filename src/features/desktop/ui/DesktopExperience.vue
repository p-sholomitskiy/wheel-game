<template>
  <main class="desktop-screen">
    <LanguageSwitcher />
    <FallingChips />

    <div class="desktop-content-column">
      <div id="bonus-reward-anchor" class="desktop-bonus-anchor"></div>

      <div class="desktop-hero-top">
        <BrandRow />
        <HeroHeadline />
        <HeroActionButton />
      </div>

      <WheelSection />
    </div>

    <picture>
      <source media="(max-width: 1799px)" srcset="/ui/mascot-mobile.svg" />
      <img
        class="desktop-mascot"
        src="/ui/mascot-desktop.svg"
        alt=""
        width="720"
        height="589"
        decoding="async"
        draggable="false"
        aria-hidden="true"
      />
    </picture>
  </main>
</template>

<script setup lang="ts">
import HeroActionButton from "@/features/shared/ui/HeroActionButton.vue";
import BrandRow from "@/features/shared/ui/BrandRow.vue";
import FallingChips from "@/features/shared/ui/FallingChips.vue";
import HeroHeadline from "@/features/shared/ui/HeroHeadline.vue";
import LanguageSwitcher from "@/features/shared/ui/LanguageSwitcher.vue";
import WheelSection from "@/features/shared/ui/WheelSection.vue";
</script>

<style scoped>
.desktop-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  padding: clamp(20px, 4vh, 56px) 0 40px;
  box-sizing: border-box;
  background-color: #0c0e18;
  background-image: url("/ui/bg-desktop.svg");
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
  position: relative;
  z-index: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

/* Декор: по умолчанию правый нижний угол; при ширине < 1800px — левый нижний + mascot-mobile.svg через <picture>. */
.desktop-mascot {
  height: 60vh;
  position: fixed;
  right: env(safe-area-inset-right, 0);
  left: auto;
  bottom: env(safe-area-inset-bottom, 0);
  z-index: 50;
  box-sizing: border-box;
  width: auto;
  max-width: calc(100vw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px));
  aspect-ratio: 720 / 589;
  object-fit: contain;
  object-position: right bottom;
  display: block;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

@media (max-width: 1799px) {
  .desktop-mascot {
    height: 50vh;
    right: auto;
    left: env(safe-area-inset-left, 0);
    aspect-ratio: 256 / 275;
    object-position: left bottom;
  }
}
</style>
