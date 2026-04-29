<template>
  <main class="desktop-screen">
    <BuildVersionBadge />
    <LanguageSwitcher />

    <div class="desktop-content-column">
      <div class="desktop-hero-top">
        <BrandRow />
        <HeroHeadline />
        <HeroActionButton />
        <div id="bonus-reward-anchor" class="desktop-bonus-anchor"></div>
      </div>

      <WheelSection />
    </div>

    <MascotImage />
  </main>
</template>

<script setup lang="ts">
import HeroActionButton from "@/features/shared/ui/HeroActionButton.vue";
import BrandRow from "@/features/shared/ui/BrandRow.vue";
import BuildVersionBadge from "@/features/shared/ui/BuildVersionBadge.vue";
import HeroHeadline from "@/features/shared/ui/HeroHeadline.vue";
import LanguageSwitcher from "@/features/shared/ui/LanguageSwitcher.vue";
import MascotImage from "@/features/shared/ui/MascotImage.vue";
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
  --desktop-content-gap: 20px;
}

.desktop-hero-top {
  order: 1;
  position: relative;
  display: grid;
  grid-template-rows: minmax(48px, auto) minmax(0, 1fr) minmax(35px, auto);
  align-items: stretch;
  row-gap: clamp(16px, 2.5vh, 30px);
  width: 100%;
  container-type: inline-size;
  box-sizing: border-box;
}

.desktop-hero-top :deep(.brand-row) {
  align-self: center;
  min-height: 48px;
}

.desktop-hero-top :deep(.hero-headline:not(.hero-headline--mobile)) {
  align-self: stretch;
  display: grid;
  place-items: center;
  min-height: 0;
}

@supports (font-size: 1cqi) {
  .desktop-hero-top :deep(.hero-headline:not(.hero-headline--mobile)) {
    font-size: clamp(20px, 5.5cqi, 36px);
  }
}

.desktop-hero-top :deep(.hero-action-button) {
  align-self: center;
  justify-self: center;
  max-width: 100%;
}

.desktop-content-column > :deep(.wheel-section .wheel-spin-button) {
  --wheel-spin-button-width: calc(62% * 1.15 * 1.1);
}

.desktop-content-column > :deep(.wheel-section) {
  order: 2;
}

.desktop-bonus-anchor {
  position: absolute;
  left: 50%;
  top: calc(100% + 25px);
  transform: translateX(-50%);
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

/*
 * Бонус-бар телепортируется сюда из WheelSection.
 * Нужно, чтобы нижний край колеса совпадал с серединой BonusRewardBar:
 * поднимаем блок на половину высоты бара + колоночный gap (20px у .desktop-content-column).
 * min-height бара в BonusRewardBar.vue = 100px.
 */
.desktop-bonus-anchor :deep(.bonus-message) {
  margin-top: 0;
  pointer-events: auto;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar) {
  width: 410px;
  min-width: 410px;
  max-width: 410px;
  height: 100px;
  min-height: 100px;
  max-height: 100px;
  flex: 0 0 410px;
  padding: 20px 24px 20px 84px;
  gap: 16px;
  border-radius: 16px;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar__gift) {
  scale: 1.1;
  left: -40px;
  width: 110px;
  height: 110px;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar__body) {
  gap: 16px;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar__text-group) {
  width: auto;
  min-width: 0;
  max-width: none;
  height: auto;
  min-height: 0;
  max-height: none;
  flex: 1 1 auto;
  align-items: center;
  gap: 4px;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar__text-line) {
  width: 100%;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  font-size: 20px;
  text-align: center;
}

.desktop-bonus-anchor :deep(.bonus-reward-bar__body .bonus-reward-cta) {
  width: 118px;
  min-height: 38px;
  height: 38px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.875rem;
}

</style>
