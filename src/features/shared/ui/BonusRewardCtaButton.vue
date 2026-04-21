<template>
  <button class="bonus-reward-cta" type="button" @click="redirectToRegistrationPage">
    <slot />
  </button>
</template>

<script setup lang="ts">
function redirectToRegistrationPage() {
  window.open("https://google.com", "_blank");
}
</script>

<style scoped>
.bonus-reward-cta {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 130px;
  max-width: 100%;
  min-height: 36px;
  height: auto;
  opacity: 1;
  border: 0;
  border-radius: 8px;
  padding: 14px 40px;
  background: #ff0000;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
