<template>
  <Teleport to="body" :disabled="embedded">
    <div ref="rootEl" class="language-switcher" :class="{ 'language-switcher--embedded': embedded }" :style="containerStyle">
      <LanguageSwitcherRow :locale="currentLocale" is-trigger :list-open="isOpen" aria-haspopup="listbox" :aria-controls="listboxId" @click="toggleOpen" />
      <LanguageSwitcherPanel v-if="isOpen" :overlay="embedded" class="language-switcher__dropdown">
        <div :id="listboxId" class="language-switcher__list" role="listbox" tabindex="-1" @keydown="onKeydown" @click.stop>
          <LanguageSwitcherRow v-for="loc in otherLocales" :key="loc.code" :locale="loc" :is-trigger="false" option-role="option" :aria-selected="false" @click="selectLocale(loc)" />
        </div>
      </LanguageSwitcherPanel>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import LanguageSwitcherPanel from "./language-switcher/LanguageSwitcherPanel.vue";
import LanguageSwitcherRow from "./language-switcher/LanguageSwitcherRow.vue";
import { LOCALE_ORDER, type Locale } from "./language-switcher/locales";
import { useDesktopTexts } from "../composables/useDesktopTexts";
import { useLocaleStore } from "../composables/useLocaleStore";

const props = withDefaults(
  defineProps<{ position?: "desktop" | "mobile"; embedded?: boolean }>(),
  { position: "desktop", embedded: false },
);

const floatingPosition = computed(() =>
  props.position === "mobile" ? { top: "16px", right: "16px", left: "auto" as const } : { top: "40px", right: "120px", left: "auto" as const },
);

const containerStyle = computed(() => (props.embedded ? {} : { position: "fixed" as const, ...floatingPosition.value, zIndex: 60 }));
const listboxId = "language-switcher-listbox";
const rootEl = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const localeStore = useLocaleStore();
const { texts } = useDesktopTexts();
const locales = computed<Locale[]>(() => LOCALE_ORDER.map((code) => ({ code, label: texts.value.languageSwitcher.localeLabels[code] })));
const currentLocale = computed<Locale>(() => locales.value.find((l) => l.code === localeStore.current) ?? locales.value[0]!);
const otherLocales = computed(() => locales.value.filter((l) => l.code !== currentLocale.value.code).sort((a, b) => LOCALE_ORDER.indexOf(a.code) - LOCALE_ORDER.indexOf(b.code)));

function toggleOpen() { isOpen.value = !isOpen.value; }
function selectLocale(loc: Locale) { localeStore.setLocale(loc.code); isOpen.value = false; }
function onDocPointerDown(e: PointerEvent) { const el = rootEl.value; if (!el || !isOpen.value) return; if (!el.contains(e.target as Node)) isOpen.value = false; }
function onKeydown(e: KeyboardEvent) { if (e.key === "Escape") isOpen.value = false; }

onMounted(() => { document.addEventListener("pointerdown", onDocPointerDown, true); document.addEventListener("keydown", onKeydown); });
onUnmounted(() => { document.removeEventListener("pointerdown", onDocPointerDown, true); document.removeEventListener("keydown", onKeydown); });
</script>

<style scoped>
.language-switcher { box-sizing: border-box; width: 100px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.language-switcher--embedded { position: relative; z-index: 120; width: auto; flex-shrink: 0; align-self: center; }
.language-switcher__dropdown { flex-shrink: 0; }
.language-switcher__list { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; margin: 0; padding: 0; }
</style>
