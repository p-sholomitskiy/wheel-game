<template>
  <div
    class="brand-row"
    :class="{ 'brand-row--mobile': layout === 'mobile' }"
    aria-label="Partner logos"
  >
    <template v-if="layout === 'mobile'">
      <div class="brand-row__cell">
        <img
          class="brand-row__logo brand-row__logo--slot"
          src="/ui/logo-slot.svg"
          width="95"
          height="50"
          alt="Slot Logo"
        />
      </div>
      <div class="brand-row__cell">
        <img
          class="brand-row__logo brand-row__logo--casino"
          src="/ui/logo-casino.svg"
          width="100"
          height="15"
          alt="Casino Logo"
        />
      </div>
      <div class="brand-row__cell brand-row__cell--trailing">
        <slot name="trailing" />
      </div>
    </template>
    <template v-else>
      <img
        class="brand-row__logo brand-row__logo--casino"
        src="/ui/logo-casino.svg"
        alt="Casino Logo"
      />
      <img class="brand-row__logo brand-row__logo--slot" src="/ui/logo-slot.svg" alt="Slot Logo" />
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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 5%;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-items: center;
}

.brand-row__cell {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.brand-row--mobile .brand-row__logo--slot,
.brand-row--mobile .brand-row__logo--casino {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.brand-row--mobile .brand-row__logo--slot {
  aspect-ratio: 95 / 50;
}

.brand-row--mobile .brand-row__logo--casino {
  aspect-ratio: 100 / 15;
}

.brand-row__cell--trailing :deep(.language-switcher) {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
