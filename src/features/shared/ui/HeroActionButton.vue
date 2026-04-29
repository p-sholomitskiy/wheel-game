<template>
  <button
    ref="rootRef"
    class="hero-action-button"
    :class="{ 'hero-action-button--mobile': props.layout === 'mobile' }"
    type="button"
    :style="fitFontSizePx != null ? { fontSize: `${fitFontSizePx}px` } : undefined"
  >
    {{ buttonLabel }}
  </button>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";
import { useWheelSpinStorage } from "../composables/useWheelSpinStorage";

const { texts } = useDesktopTexts();
const { completedSpins, maxSpins } = useWheelSpinStorage();

const props = withDefaults(
  defineProps<{
    text?: string;
    layout?: "desktop" | "mobile";
  }>(),
  { layout: "desktop" },
);

const buttonLabel = computed(() => {
  const baseText = props.text ?? texts.value.heroActionButton;
  const remainingAttempts = Math.max(0, maxSpins - completedSpins.value);
  return `${baseText} - ${remainingAttempts}`;
});

const rootRef = ref<HTMLElement | null>(null);
const fitFontSizePx = ref<number | null>(null);

const MIN_FONT_PX = 10;
const MAX_FONT_PX = 512;
const FIT_SLACK_PX = 1;

function largestFontSizeThatFits(container: HTMLElement, textEl: HTMLElement): number {
  const w = container.clientWidth;
  const h = container.clientHeight;
  if (w < 1 || h < 1) {
    return MIN_FONT_PX;
  }

  const trySize = (px: number): boolean => {
    container.style.fontSize = `${px}px`;
    void textEl.offsetWidth;
    return textEl.scrollWidth <= w + FIT_SLACK_PX && textEl.scrollHeight <= h + FIT_SLACK_PX;
  };

  const previousInline = container.style.fontSize;

  if (trySize(MAX_FONT_PX)) {
    container.style.fontSize = previousInline;
    return MAX_FONT_PX;
  }

  if (!trySize(MIN_FONT_PX)) {
    container.style.fontSize = previousInline;
    return MIN_FONT_PX;
  }

  let lo = MIN_FONT_PX;
  let hi = MAX_FONT_PX;
  while (hi - lo > 0.35) {
    const mid = (lo + hi) / 2;
    if (trySize(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  container.style.fontSize = previousInline;
  return Math.max(MIN_FONT_PX, Math.floor(lo));
}

let ro: ResizeObserver | null = null;
let raf = 0;

async function scheduleFit() {
  cancelAnimationFrame(raf);
  if (typeof document !== "undefined" && document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      /* ignore */
    }
  }
  await nextTick();
  await new Promise<void>((resolve) => {
    raf = requestAnimationFrame(() => {
      raf = 0;
      resolve();
    });
  });

  const root = rootRef.value;
  if (!root) {
    return;
  }
  fitFontSizePx.value = largestFontSizeThatFits(root, root);
}

onMounted(() => {
  const root = rootRef.value;
  if (!root || typeof ResizeObserver === "undefined") {
    void scheduleFit();
    return;
  }
  ro = new ResizeObserver(() => {
    void scheduleFit();
  });
  ro.observe(root);
  void scheduleFit();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  ro?.disconnect();
  ro = null;
});

watch(
  () => [buttonLabel.value, props.layout] as const,
  () => {
    void scheduleFit();
  },
);
</script>

<style scoped>
.hero-action-button {
  box-sizing: border-box;
  width: 70%;
  min-width: 0;
  min-height: 35px;
  height: auto;
  opacity: 1;
  border: 0;
  border-radius: 50px;
  padding: 10px 30px;
  background: linear-gradient(177.67deg, #ff1c00 8.34%, #be1500 51.74%, #580a00 267.47%);
  color: #ffffff;
  cursor: pointer;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 22px;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.hero-action-button--mobile {
  width: 90%;
  min-height: 35px;
  height: auto;
  margin: 0 auto;
  padding: 0 20px;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: clamp(12px, 4.2vw, 22px);
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-box-trim: unset;
  text-box-edge: unset;
  white-space: normal;
  overflow-wrap: anywhere;
}

@media (max-width: 900px) {
  .hero-action-button:not(.hero-action-button--mobile) {
    font-size: clamp(14px, 2.2vmin, 18px);
  }
}

@media (max-width: 399px) {
  .hero-action-button--mobile {
    font-size: 19px;
  }
}
</style>
