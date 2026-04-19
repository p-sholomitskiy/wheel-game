<template>
  <main class="mobile-screen">
    <FallingChips />

    <div class="mobile-content-column">
      <div id="bonus-reward-anchor" class="mobile-bonus-anchor" />

      <section class="mobile-hero">
        <div class="mobile-brand-bar">
          <BrandRow layout="mobile" />
          <LanguageSwitcher position="mobile" embedded />
        </div>
        <HeroHeadline layout="mobile" />
        <HeroActionButton layout="mobile" />
      </section>

      <WheelSection class="mobile-wheel" />
    </div>
  </main>
</template>

<script setup lang="ts">
import BrandRow from "@/features/shared/ui/BrandRow.vue"
import FallingChips from "@/features/shared/ui/FallingChips.vue"
import HeroActionButton from "@/features/shared/ui/HeroActionButton.vue"
import HeroHeadline from "@/features/shared/ui/HeroHeadline.vue"
import LanguageSwitcher from "@/features/shared/ui/LanguageSwitcher.vue"
import WheelSection from "@/features/shared/ui/WheelSection.vue"
</script>

<style scoped>
.mobile-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  padding: clamp(12px, 3vh, 24px) 0 clamp(16px, 4vh, 32px);
  box-sizing: border-box;
  background-color: #0c0e18;
  background-image: url("/ui/bg-desktop.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mobile-content-column {
  position: relative;
  z-index: 1;
  width: min(100%, 420px);
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 3vw, 20px);
}

.mobile-bonus-anchor {
  order: 3;
  position: relative;
  z-index: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

/* Бар бонуса на 25% меньше (телепорт из WheelSection рендерится сюда). */
.mobile-bonus-anchor :deep(.bonus-reward-bar) {
  zoom: 0.75;
}

/*
 * Центр BonusRewardBar по вертикали на линии нижней границы колеса:
 * верх бара = низ_колеса + gap − margin = низ_колеса − h/2  →  margin = gap + h/2
 * h/2 берём по визуальной высоте бара с zoom ~0.75 (подстройка при смене макета).
 */
.mobile-content-column > .mobile-bonus-anchor :deep(.bonus-message) {
  margin-top: calc(
    -1 * (clamp(12px, 3vw, 20px) + clamp(36px, 11vw, 46px))
  );
}

.mobile-hero {
  order: 1;
  position: relative;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(16px, 4vw, 24px);
  width: 100%;
  box-sizing: border-box;
}

.mobile-brand-bar {
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 3.5vw, 20px);
  width: 100%;
  box-sizing: border-box;
}

.mobile-brand-bar :deep(.brand-row) {
  flex: 0 1 auto;
  min-width: 0;
  flex-wrap: nowrap;
  justify-content: center;
  gap: clamp(8px, 2.5vw, 14px);
}

.mobile-content-column > :deep(.mobile-wheel) {
  order: 2;
  width: 100%;
  max-width: min(100vw - 32px, 360px);
}

.mobile-content-column > :deep(.wheel-section.mobile-wheel .wheel-spin-button) {
  width: 120px;
  height: 122px;
  aspect-ratio: unset;
}
</style>
