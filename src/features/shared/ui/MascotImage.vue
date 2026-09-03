<template>
  <img
    class="mascot-image"
    :class="{
      'mascot-image--mobile': layout === 'mobile',
      'mascot-image--loaded': isLoaded,
    }"
    :src="`${assetBaseUrl}mascot.webp`"
    alt=""
    width="539"
    height="929"
    decoding="async"
    fetchpriority="low"
    draggable="false"
    aria-hidden="true"
    @load="isLoaded = true"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const assetBaseUrl = `${import.meta.env.BASE_URL}ui/webp/`;
const isLoaded = ref(false);

withDefaults(
  defineProps<{
    layout?: "desktop" | "mobile";
  }>(),
  { layout: "desktop" },
);
</script>

<style scoped>
.mascot-image {
  position: fixed;
  right: calc(20vw - 269.5px);
  top: 50%;
  transform: translateY(-50%);
  width: 539px;
  height: 929px;
  max-width: none;
  aspect-ratio: 539 / 929;
  object-fit: contain;
  object-position: right bottom;
  display: block;
  opacity: 0;
  transition: opacity 600ms ease;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  z-index: 0;
}

.mascot-image--loaded {
  opacity: 1;
}

.mascot-image--mobile {
  margin-top: 0;
  width: 411px;
  height: 671px;
  max-width: none;
  position: fixed;
  right: -170px;
  bottom: 40px;
  z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
  .mascot-image {
    transition: none;
  }
}
</style>
