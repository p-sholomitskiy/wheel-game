<template>
  <div class="hero-headline" :class="{ 'hero-headline--mobile': layout === 'mobile' }">
    {{ text ?? texts.heroHeadline }}
  </div>
</template>

<script setup lang="ts">
import { useDesktopTexts } from "../composables/useDesktopTexts";

const { texts } = useDesktopTexts();

withDefaults(
  defineProps<{
    text?: string;
    layout?: "desktop" | "mobile";
  }>(),
  { layout: "desktop" },
);
</script>

<style scoped>
.hero-headline {
  background: linear-gradient(185.77deg, #fffe00 4.36%, #ffb900 34.5%, #fffe00 63.77%, #ff9f00 83.42%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: Montserrat, system-ui, sans-serif;
  font-size: clamp(24px, 5.59vmin, 36px);
  font-weight: 700;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

.hero-headline--mobile {
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 18px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  text-box-trim: unset;
  text-box-edge: unset;
}

@media (max-width: 900px) {
  .hero-headline:not(.hero-headline--mobile) {
    font-size: clamp(20px, 4vmin, 36px);
  }
}
</style>
