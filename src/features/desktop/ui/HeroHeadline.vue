<template>
  <div class="hero-headline">
    {{ text ?? texts.heroHeadline }}
  </div>
</template>

<script setup lang="ts">
import { useDesktopTexts } from '../composables/useDesktopTexts'

const { texts } = useDesktopTexts()

defineProps<{
  text?: string
}>()
</script>

<style scoped>
.hero-headline {
  position: relative;
  height: 69px;
  padding: 0 12px;
  background: linear-gradient(185.77deg, #fffe00 4.36%, #ffb900 34.5%, #fffe00 63.77%, #ff9f00 83.42%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 36px;
  font-weight: 700;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 900px) {
  .hero-headline {
    font-size: clamp(20px, 4vw, 36px);
  }
}
</style>
