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
    <img
      class="language-switcher-row__flag"
      :src="flagSrc(locale)"
      width="16"
      height="16"
      alt=""
    />
    <span class="language-switcher-row__code">{{ locale.label }}</span>
    <span v-if="isTrigger" class="language-switcher-row__chevron" aria-hidden="true">
      <svg
        class="language-switcher-row__chevron-svg"
        :class="{ 'language-switcher-row__chevron-svg--open': listOpen }"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.25L5 4.75L9 1.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-else class="language-switcher-row__chevron-spacer" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import type { Locale } from './locales'
import { flagSrc } from './locales'

defineProps<{
  locale: Locale
  isTrigger: boolean
  listOpen?: boolean
  optionRole?: 'option'
  ariaSelected?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.language-switcher-row {
  border: 0;
  background: #262b3b;
  color: #fff;
  font: inherit;
}

.language-switcher-row--trigger-open {
  background: #25f56c;
  color: #171925;
}

.language-switcher-row:not(.language-switcher-row--trigger):hover,
.language-switcher-row:not(.language-switcher-row--trigger):focus-visible {
  background: #424557;
}

.language-switcher-row__code {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
}

.language-switcher-row__chevron {
  color: rgba(255, 255, 255, 0.85);
}

.language-switcher-row--trigger-open .language-switcher-row__chevron {
  color: #171925;
}
</style>
