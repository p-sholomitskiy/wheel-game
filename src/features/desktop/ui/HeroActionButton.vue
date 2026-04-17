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
  width: fit-content;
  max-width: 100%;
  height: 35px;
  padding: 10px 30px;
  border: 0;
  border-radius: 50px;
  background: linear-gradient(177.67deg, #ff1c00 8.34%, #be1500 51.74%, #580a00 267.47%);
  color: #ffffff;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 22px;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .hero-action-button {
    font-size: clamp(16px, 3vw, 22px);
  }
}
</style>
