<template>
  <img
    class="mascot-image"
    :class="{ 'mascot-image--mobile': layout === 'mobile' }"
    src="/ui/mascot.gif"
    alt=""
    width="539"
    height="929"
    decoding="async"
    draggable="false"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
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
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  z-index: 0;
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
</style>
