<template>
  <div class="chips-layer" aria-hidden="true">
    <img
      v-for="chip in chips"
      :key="chip.id"
      class="chip"
      :class="chip.className"
      :src="chip.src"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { chips } from '../constants/chips'
</script>

<style scoped>
.chips-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.chip {
  opacity: 0.95;
}
</style>
