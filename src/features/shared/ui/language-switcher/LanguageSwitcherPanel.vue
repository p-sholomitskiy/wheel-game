<template>
  <div class="language-switcher-panel" :class="{ 'language-switcher-panel--overlay': overlay }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    overlay?: boolean;
  }>(),
  { overlay: false },
);
</script>

<style scoped>
.language-switcher-panel {
  box-sizing: border-box;
  width: 100px;
  padding: 12px 12.5px;
  background: #171925;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.language-switcher-panel--overlay {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  left: auto;
  margin: 0;
  z-index: 250;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}
</style>
