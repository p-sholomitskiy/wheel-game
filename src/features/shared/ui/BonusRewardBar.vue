<template>
  <div class="bonus-reward-bar" role="status" aria-live="polite">
    <img class="bonus-reward-bar__gift" src="/ui/gift.svg" width="110" height="110" alt="" />
    <div class="bonus-reward-bar__body">
      <div class="bonus-reward-bar__text">
        <div class="bonus-reward-bar__amount">
          <img
            class="bonus-reward-bar__amount-img"
            src="/ui/150FS.svg"
            width="96"
            height="48"
            :alt="amountText ?? texts.bonusReward.amountText"
          />
        </div>
        <div ref="subtitleEl" class="bonus-reward-bar__subtitle">{{ subtitleDisplay }}</div>
      </div>
      <BonusRewardCtaButton>{{ buttonText ?? texts.bonusReward.buttonText }}</BonusRewardCtaButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import BonusRewardCtaButton from "./BonusRewardCtaButton.vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";
const props = defineProps<{ amountText?: string; subtitleText?: string; buttonText?: string }>();
const { texts } = useDesktopTexts();
const subtitleEl = ref<HTMLElement | null>(null);
const subtitleDisplay = computed(() => props.subtitleText ?? texts.value.bonusReward.subtitleText);
const SUBTITLE_FONT_MAX_PX = 12;
const SUBTITLE_FONT_MIN_PX = 7;
const SUBTITLE_FONT_STEP_PX = 0.5;
function fitSubtitleFontSize() {
  const el = subtitleEl.value;
  if (!el) return;
  el.style.fontSize = `${SUBTITLE_FONT_MAX_PX}px`;
  void el.offsetWidth;
  let size = SUBTITLE_FONT_MAX_PX;
  while (size > SUBTITLE_FONT_MIN_PX && el.scrollWidth > el.clientWidth) {
    size -= SUBTITLE_FONT_STEP_PX;
    el.style.fontSize = `${size}px`;
  }
}
async function scheduleFitSubtitle() {
  await nextTick();
  fitSubtitleFontSize();
}
let resizeObserver: ResizeObserver | null = null;
onMounted(() => {
  void scheduleFitSubtitle();
  resizeObserver = new ResizeObserver((entries) => {
    const el = subtitleEl.value;
    if (!el || !entries.some((entry) => entry.target === el)) return;
    fitSubtitleFontSize();
  });
  if (subtitleEl.value) resizeObserver.observe(subtitleEl.value);
});
onUnmounted(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
});
watch(subtitleDisplay, () => {
  void scheduleFitSubtitle();
});
</script>

<style scoped>
.bonus-reward-bar {
  position: relative;
  z-index: 1;
  isolation: isolate;
  box-sizing: border-box;
  width: 410px;
  max-width: 100%;
  min-height: 100px;
  height: auto;
  margin: 0 auto;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
  padding: 20px 30px 20px 120px;
  background: linear-gradient(180deg, #f7df00 0%, #ffbf00 100%);
  box-shadow: 0 4px 21.7px 0 #2f02009e;
}
.bonus-reward-bar__gift {
  position: absolute;
  scale: 1.1;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 110px;
  height: 110px;
  object-fit: contain;
  pointer-events: none;
}
.bonus-reward-bar__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.bonus-reward-bar__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.bonus-reward-bar__body :deep(.bonus-reward-cta) {
  flex-shrink: 0;
}
.bonus-reward-bar__amount-img {
  display: block;
  max-width: 100%;
  height: auto;
}
.bonus-reward-bar__subtitle {
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Montserrat;
  font-weight: 800;
  font-style: Italic;
  font-size: 12px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  color: #a90004;
}
</style>
