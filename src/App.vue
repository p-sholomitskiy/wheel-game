<template>
  <MobileExperience v-if="isMobile" />
  <DesktopExperience v-else />
</template>

<script setup lang="ts">
import DesktopExperience from "./features/desktop/ui/DesktopExperience.vue"
import MobileExperience from "./features/mobile/ui/MobileExperience.vue"
import { useIsMobileLayout } from "./composables/useIsMobileLayout"

const { isMobile } = useIsMobileLayout()
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow: hidden;
}
</style>
