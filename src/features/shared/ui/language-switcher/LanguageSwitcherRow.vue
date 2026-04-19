<template>
  <button
    type="button"
    class="language-switcher-row"
    :class="{
      'language-switcher-row--trigger': isTrigger,
      'language-switcher-row--trigger-open': isTrigger && listOpen,
    }"
    :role="optionRole ?? undefined"
    :aria-selected="ariaSelected"
    :aria-expanded="isTrigger ? listOpen : undefined"
    @click="$emit('click')"
  >
    <img class="language-switcher-row__flag" :src="flagSrc(locale)" width="16" height="16" alt="" />
    <span class="language-switcher-row__code">{{ locale.label }}</span>
    <span v-if="isTrigger" class="language-switcher-row__chevron" aria-hidden="true">
      <svg class="language-switcher-row__chevron-svg" :class="{ 'language-switcher-row__chevron-svg--open': listOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span v-else class="language-switcher-row__chevron-spacer" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import type { Locale } from "./locales";
import { flagSrc } from "./locales";

defineProps<{
  locale: Locale;
  isTrigger: boolean;
  listOpen?: boolean;
  optionRole?: "option";
  ariaSelected?: boolean;
}>();

defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.language-switcher-row { box-sizing: border-box; display: flex; align-items: center; gap: 10px; width: 75px; height: 37px; padding: 9px 8px; border: 0; border-radius: 10px; background: #262b3b; backdrop-filter: blur(13.6px); -webkit-backdrop-filter: blur(13.6px); color: #fff; cursor: pointer; font: inherit; }
.language-switcher-row--trigger { display: grid; grid-template-columns: 16px minmax(0, 1fr) 10px; align-items: center; column-gap: 10px; width: 80px; height: 37px; padding: 9px 8px; gap: 0; }
.language-switcher-row--trigger-open { background: #25f56c; backdrop-filter: blur(13.6px); -webkit-backdrop-filter: blur(13.6px); color: #171925; }
.language-switcher-row:not(.language-switcher-row--trigger):hover,
.language-switcher-row:not(.language-switcher-row--trigger):focus-visible { background: #424557; backdrop-filter: blur(13.6px); -webkit-backdrop-filter: blur(13.6px); }
.language-switcher-row__flag { flex-shrink: 0; display: block; border-radius: 50%; }
.language-switcher-row__code { flex: 1; min-width: 0; font-family: "Inter", system-ui, sans-serif; font-size: 14px; font-weight: 500; line-height: 18px; letter-spacing: 0; text-align: center; text-transform: uppercase; }
.language-switcher-row--trigger .language-switcher-row__code { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.language-switcher-row__chevron { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 10px; height: 10px; color: rgba(255, 255, 255, 0.85); }
.language-switcher-row--trigger-open .language-switcher-row__chevron { color: #171925; }
.language-switcher-row__chevron-spacer { flex-shrink: 0; width: 10px; height: 10px; }
.language-switcher-row__chevron-svg { display: block; transition: transform 0.2s ease; }
.language-switcher-row__chevron-svg--open { transform: rotate(180deg); }
</style>
