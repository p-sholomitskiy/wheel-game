<template>
  <div v-if="isVisible" class="build-version-badge">v{{ displayVersion }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    enabled?: boolean;
  }>(),
  { enabled: true },
);

const envVersion = import.meta.env.VITE_BUILD_VERSION as string | undefined;
const envEnabled = (import.meta.env.VITE_SHOW_BUILD_VERSION as string | undefined) !== "false";
const displayVersion = computed(() => envVersion?.trim() || "dev");
const isVisible = computed(() => props.enabled && envEnabled);
</script>

<style scoped>
.build-version-badge {
  position: fixed;
  top: max(8px, env(safe-area-inset-top, 0px));
  left: max(8px, env(safe-area-inset-left, 0px));
  z-index: 1000;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.45);
  color: #ffffff;
  font-family: Montserrat, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  pointer-events: none;
  user-select: none;
}
</style>
