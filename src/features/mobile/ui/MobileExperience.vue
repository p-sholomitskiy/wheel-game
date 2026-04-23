<template>
  <main class="mobile-screen">
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
      </section>

      <WheelSection class="mobile-wheel" />
    </div>

    <div id="bonus-reward-anchor" class="mobile-bonus-anchor" />

    <img
      class="mobile-mascot"
      src="/ui/mascot-mobile.svg"
      alt=""
      width="256"
      height="275"
      decoding="async"
      draggable="false"
      aria-hidden="true"
    />
  </main>
</template>

<script setup lang="ts">
import BrandRow from "@/features/shared/ui/BrandRow.vue";
import HeroActionButton from "@/features/shared/ui/HeroActionButton.vue";
import HeroHeadline from "@/features/shared/ui/HeroHeadline.vue";
import LanguageSwitcher from "@/features/shared/ui/LanguageSwitcher.vue";
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 30px);
  /* Выше колонки (z-index:1), маскота и выпадающего языка (до ~250). */
  z-index: 400;
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

.mobile-bonus-anchor :deep(.bonus-message) {
  margin-top: 0;
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
  /* Без внутреннего скролла: при overflow-y:auto первая прокрутка уводит CTA за край на кадр (инерция). */
  overflow: hidden;
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

/* Декор: всегда у левого нижнего края вьюпорта (не скроллится с контентом). */
.mobile-mascot {
  position: fixed;
  left: env(safe-area-inset-left, 0);
  bottom: env(safe-area-inset-bottom, 0);
  z-index: 2;
  box-sizing: border-box;
  height: 40dvh;
  width: auto;
  aspect-ratio: 256 / 275;
  object-fit: contain;
  object-position: left bottom;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
