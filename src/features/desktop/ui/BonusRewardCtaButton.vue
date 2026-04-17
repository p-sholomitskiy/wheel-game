<template>
  <button class="bonus-reward-cta" type="button">
    <slot />
  </button>
</template>

<style scoped>
.bonus-reward-cta {
  box-sizing: border-box;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 130px;
  height: 36px;
  padding: 0 40px;
  border: 0;
  border-radius: 8px;
  background: #ff0000;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 520px) {
  .bonus-reward-cta {
    align-self: flex-end;
  }
}
</style>
