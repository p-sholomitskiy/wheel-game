<template>
  <button class="hero-action-button" type="button">
    {{ text ?? texts.heroActionButton }}
  </button>
</template>

<script setup lang="ts">
import { useDesktopTexts } from '../composables/useDesktopTexts'

const { texts } = useDesktopTexts()

defineProps<{
  text?: string
}>()
</script>

<style scoped>
.hero-action-button {
  box-sizing: border-box;
  width: 332px;
  max-width: 100%;
  min-height: 35px;
  height: auto;
  opacity: 1;
  border: 0;
  border-radius: 50px;
  padding: 10px 30px;
  background: linear-gradient(177.67deg, #ff1c00 8.34%, #be1500 51.74%, #580a00 267.47%);
  color: #ffffff;
  cursor: pointer;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: clamp(14px, 2.5vmin, 18px);
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

@media (max-width: 900px) {
  .hero-action-button {
    font-size: clamp(14px, 2.2vmin, 18px);
  }
}
</style>
