<template>
  <div class="language-switcher-panel">
    <slot />
  </div>
</template>

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
</style>
