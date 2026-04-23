<template>
  <button
    class="hero-action-button"
    :class="{ 'hero-action-button--mobile': props.layout === 'mobile' }"
    type="button"
  >
    {{ buttonLabel }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";
import { useWheelSpinStorage } from "../composables/useWheelSpinStorage";

const { texts } = useDesktopTexts();
const { completedSpins, maxSpins } = useWheelSpinStorage();

const props = withDefaults(
  defineProps<{
    text?: string;
    layout?: "desktop" | "mobile";
  }>(),
  { layout: "desktop" },
);

const buttonLabel = computed(() => {
  const baseText = props.text ?? texts.value.heroActionButton;
  const remainingAttempts = Math.max(0, maxSpins - completedSpins.value);
  return `${baseText} - ${remainingAttempts}`;
});
</script>

<style scoped>
.hero-action-button {
  box-sizing: border-box;
  width: 70%;
  min-height: 35px;
  height: auto;
  opacity: 1;
  border: 0;
  border-radius: 50px;
  padding: 10px 30px;
  background: linear-gradient(177.67deg, #ff1c00 8.34%, #be1500 51.74%, #580a00 267.47%);
  color: #ffffff;
  cursor: pointer;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 22px;
}

.hero-action-button--mobile {
  width: 90%;
  min-height: 35px;
  height: 35px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 22px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: unset;
  text-box-edge: unset;
}

@media (max-width: 900px) {
  .hero-action-button:not(.hero-action-button--mobile) {
    font-size: clamp(14px, 2.2vmin, 18px);
  }
}

@media (max-width: 399px) {
  .hero-action-button--mobile {
    font-size: 19px;
  }
}
</style>
