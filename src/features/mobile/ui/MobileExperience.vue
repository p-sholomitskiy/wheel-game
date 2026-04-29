<template>
  <main class="mobile-screen">
    <BuildVersionBadge />
    <div class="mobile-content-column">
      <section class="mobile-hero">
        <div class="mobile-brand-bar">
          <BrandRow layout="mobile">
            <template #trailing>
              <LanguageSwitcher position="mobile" embedded />
            </template>
          </BrandRow>
        </div>
        <HeroHeadline layout="mobile" />
        <HeroActionButton layout="mobile" />
        <div id="bonus-reward-anchor" class="mobile-bonus-anchor" />
      </section>

      <WheelSection class="mobile-wheel" />
    </div>

    <MascotImage layout="mobile" />
  </main>
</template>

<script setup lang="ts">
import BrandRow from "@/features/shared/ui/BrandRow.vue";
import BuildVersionBadge from "@/features/shared/ui/BuildVersionBadge.vue";
import HeroActionButton from "@/features/shared/ui/HeroActionButton.vue";
import HeroHeadline from "@/features/shared/ui/HeroHeadline.vue";
import LanguageSwitcher from "@/features/shared/ui/LanguageSwitcher.vue";
import MascotImage from "@/features/shared/ui/MascotImage.vue";
import WheelSection from "@/features/shared/ui/WheelSection.vue";
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
  /* Верхний отступ экрана задаётся у .mobile-hero (10vh + safe-area). */
  padding: 0 0 clamp(16px, 4vh, 32px);
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

.mobile-bonus-anchor :deep(.bonus-message) {
  margin-top: 0;
  pointer-events: auto;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar) {
  width: 332px;
  min-width: 332px;
  height: 68px;
  min-height: 68px;
  padding: 8px 10px 8px 74px;
  gap: 10px;
  border-radius: 12px;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar__gift) {
  scale: 1;
  left: 4px;
  width: 68px;
  height: 68px;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar__body) {
  gap: 10px;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar__text-group) {
  align-items: center;
  gap: 2px;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar__text-line) {
  text-align: center;
}

.mobile-bonus-anchor :deep(.bonus-reward-bar__body .bonus-reward-cta) {
  width: 96px;
  min-height: 30px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
}

.mobile-hero {
  order: 1;
  position: relative;
  z-index: 8;
  display: grid;
  grid-template-rows: minmax(40px, auto) minmax(0, 1fr) 35px;
  align-items: stretch;
  row-gap: clamp(8px, 2vh, 18px);
  width: 100%;
  container-type: inline-size;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 30vh;
  max-height: 30vh;
  min-height: 0;
  /* Якорь бонуса расположен ниже hero-блока, поэтому обрезку отключаем. */
  overflow: visible;
  margin-top: 5%;
  margin-bottom: 5%;
}

@supports (height: 1svh) {
  .mobile-hero {
    height: 25svh;
    max-height: 25svh;
  }
}

@media (max-height: 699px) {
  .mobile-hero {
    height: 25vh;
    max-height: 25vh;
  }
}

@supports (height: 1svh) {
  @media (max-height: 699px) {
    .mobile-hero {
      height: 25svh;
      max-height: 25svh;
    }
  }
}

.mobile-brand-bar {
  position: relative;
  z-index: 9;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
}

.mobile-hero :deep(.hero-headline--mobile) {
  align-self: stretch;
  display: grid;
  place-items: center;
  min-height: 0;
}

@supports (font-size: 1cqi) {
  .mobile-hero :deep(.hero-headline--mobile) {
    font-size: clamp(16px, 7cqi, 28px);
  }
}

/* Узкий вьюпорт: меньший шрифт и обрезка, иначе clamp(7cqi) перебивает scoped-стили и заголовок наезжает на CTA. */
@media (max-width: 399px) {
  .mobile-hero :deep(.hero-headline--mobile) {
    font-size: 22px;
    line-height: 1.15;
    min-height: 0;
    overflow: hidden;
  }

  .mobile-hero :deep(.hero-headline--mobile .hero-headline__outline) {
    -webkit-text-stroke: clamp(1px, 0.08em, 2px) #e10000;
  }

  .mobile-hero :deep(.hero-action-button--mobile) {
    position: relative;
    z-index: 2;
  }
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
