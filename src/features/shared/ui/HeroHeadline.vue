<template>
  <div class="hero-headline" :class="{ 'hero-headline--mobile': layout === 'mobile' }">
    <span class="hero-headline__outline" aria-hidden="true">{{ displayText }}</span>
    <span class="hero-headline__fill">{{ displayText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";

const { texts } = useDesktopTexts();

const props = withDefaults(
  defineProps<{
    text?: string;
    layout?: "desktop" | "mobile";
  }>(),
  { layout: "desktop" },
);

const displayText = computed(() => props.text ?? texts.value.heroHeadline);
</script>

<style scoped>
.hero-headline {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  box-sizing: border-box;
  font-family: Montserrat, system-ui, sans-serif;
  font-size: clamp(24px, 5.59vmin, 36px);
  font-weight: 700;
  font-style: italic;
  line-height: 1.15;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

.hero-headline:not(.hero-headline--mobile) {
  flex: 1 1 auto;
}

.hero-headline__outline,
.hero-headline__fill {
  grid-area: 1 / 1;
  max-width: 100%;
  white-space: pre-line;
  overflow-wrap: anywhere;
  text-align: inherit;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
}

.hero-headline__outline {
  z-index: 0;
  color: transparent;
  -webkit-text-stroke: clamp(1.5px, 0.1em, 3px) #e10000;
  text-shadow:
    0 0 0.02em #e10000,
    0 0.04em 0.06em rgba(0, 0, 0, 0.45);
  pointer-events: none;
}

.hero-headline__fill {
  z-index: 1;
  background: linear-gradient(
    185.77deg,
    #fffe00 4.36%,
    #ffb900 34.5%,
    #fffe00 63.77%,
    #ff9f00 83.42%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-headline--mobile {
  flex: 0 0 auto;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 20px;
  min-height: 2.4em;
  leading-trim: CAP_HEIGHT;
  line-height: 1.2;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  text-box-trim: unset;
  text-box-edge: unset;
}

@media (min-height: 701px) {
  .hero-headline--mobile {
    font-size: 28px;
  }
}

@media (max-width: 900px) {
  .hero-headline:not(.hero-headline--mobile) {
    font-size: clamp(20px, 4vmin, 36px);
  }
}

@media (max-width: 399px) {
  .hero-headline--mobile {
    font-size: 22px;
    min-height: 0;
    overflow: hidden;
  }

  .hero-headline--mobile .hero-headline__outline {
    -webkit-text-stroke: clamp(1px, 0.08em, 2px) #e10000;
  }
}
</style>
