<template>
  <DesktopExperience />
</template>

<script setup lang="ts">
import DesktopExperience from './features/desktop/ui/DesktopExperience.vue'
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
