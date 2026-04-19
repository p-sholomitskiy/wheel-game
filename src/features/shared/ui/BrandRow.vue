<template>
  <div class="brand-row" :class="{ 'brand-row--mobile': layout === 'mobile' }" aria-label="Partner logos">
    <template v-if="layout === 'mobile'">
      <img class="brand-row__logo brand-row__logo--volcano" src="/ui/logo-coin-volcano.svg" width="95" height="50" alt="Coin Volcano" />
      <img class="brand-row__logo brand-row__logo--wowbet" src="/ui/logo-wowbet.svg" width="100" height="15" alt="Wowbet" />
    </template>
    <template v-else>
      <img class="brand-row__logo brand-row__logo--wowbet" src="/ui/logo-wowbet.svg" alt="Wowbet" />
      <img class="brand-row__logo brand-row__logo--volcano" src="/ui/logo-coin-volcano.svg" alt="Coin Volcano" />
    </template>
  </div>
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
.brand-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.brand-row--mobile {
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: auto;
  min-width: 0;
}

.brand-row--mobile .brand-row__logo--volcano {
  display: block;
  width: 95px;
  height: 50px;
  max-width: 95px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-row--mobile .brand-row__logo--wowbet {
  display: block;
  width: 100px;
  height: 15px;
  max-width: 100px;
  object-fit: contain;
  flex-shrink: 0;
}
</style>
