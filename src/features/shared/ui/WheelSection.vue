<template>
  <div class="wheel-section">
    <div class="wheel-visual">
      <div class="wheel-layer" :style="wheelStyle">
        <img class="wheel" src="/ui/wheel.svg" alt="Wheel" />
        <div class="wheel-labels" aria-hidden="true">
          <div v-for="(label, index) in wheelLabels" :key="`${index}-${label}`" class="wheel-label" :style="getWheelLabelStyle(index)">
            <template v-if="label === 'WOWBET'"><img class="wheel-label__logo" src="/ui/logo-wowbet.svg" alt="Wowbet" /></template>
            <template v-else><span class="wheel-label__text" :class="{ 'wheel-label__text--highlight': isHighlightedLabel(label) }">{{ label }}</span></template>
          </div>
        </div>
      </div>
      <img class="rim" src="/ui/wheel-rim.svg" alt="" />
      <WheelSpinButton :label="texts.spinButton" :disabled="isSpinning" @click="spinWheel" />
    </div>
    <Teleport v-if="bonusTeleportEnabled" defer to="#bonus-reward-anchor">
      <div v-if="hasSpinCompleted" class="bonus-message" :class="{ 'bonus-message--open': bonusRevealOpen }">
        <div class="bonus-message__inner"><BonusRewardBar /></div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import BonusRewardBar from "./BonusRewardBar.vue";
import WheelSpinButton from "./WheelSpinButton.vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";
import { useWheelMotion } from "../composables/useWheelMotion";
const bonusTeleportEnabled = ref(false);
onMounted(() => { void nextTick(() => { bonusTeleportEnabled.value = true; }); });
const { hasSpinCompleted, isSpinning, spinWheel, wheelStyle } = useWheelMotion();
const { texts } = useDesktopTexts();
const bonusRevealOpen = ref(false);
function prefersReducedMotion() { if (typeof window === "undefined") return false; return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true; }
watch(hasSpinCompleted, async (done) => {
  if (!done) { bonusRevealOpen.value = false; return; }
  if (prefersReducedMotion()) { bonusRevealOpen.value = true; return; }
  bonusRevealOpen.value = false;
  await nextTick();
  requestAnimationFrame(() => { requestAnimationFrame(() => { bonusRevealOpen.value = true; }); });
}, { flush: "post" });
const wheelLabels = computed<string[]>(() => texts.value.wheel.labels);
const sectorAngleDeg = computed<number>(() => 360 / (wheelLabels.value.length || 1));
function getWheelLabelStyle(index: number) { const angle = index * sectorAngleDeg.value; return { "--wheel-label-angle": `${angle}deg` }; }
function isHighlightedLabel(label: string) { return texts.value.wheel.highlightedLabels.includes(label); }
</script>

<style scoped>
.wheel-section { position: relative; z-index: 1; width: 100%; }
.wheel-visual { position: relative; width: 100%; max-width: 100%; display: block; line-height: 0; pointer-events: none; --wheel-art: 464; }
.wheel-layer { position: relative; width: 100%; max-width: 100%; aspect-ratio: 1; margin: 0 auto; container-type: inline-size; }
.wheel { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; display: block; }
.wheel-labels { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
.wheel-label { position: absolute; left: 50%; top: 50%; width: calc(96 / var(--wheel-art) * 100cqi); display: flex; justify-content: center; align-items: flex-start; transform-origin: center; transform: translate(-50%, -50%) rotate(var(--wheel-label-angle, 0deg)) translateY(calc(-210 / var(--wheel-art) * 100cqi + 30px)); }
.wheel-label__text { display: block; width: 100%; font-family: "Montserrat", system-ui, sans-serif; font-size: calc(12 / var(--wheel-art) * 100cqi); font-weight: 500; line-height: 1; text-align: center; text-transform: uppercase; white-space: pre-line; color: #ffffff; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55); }
.wheel-label__text--highlight { color: #ffdc3a; font-size: calc(14.86 / var(--wheel-art) * 100cqi); }
.wheel-label__logo { display: block; max-width: 100%; height: calc(22 / var(--wheel-art) * 100cqi); object-fit: contain; }
.rim { position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; z-index: 3; }
.bonus-message { --bonus-slide-ease: cubic-bezier(0.22, 1, 0.36, 1); --bonus-overlap-half: clamp(56px, 18vw, 76px); box-sizing: border-box; position: relative; z-index: 4; width: 100%; display: flex; justify-content: center; margin-top: calc(-1 * (20px + var(--bonus-overlap-half))); pointer-events: auto; }
.bonus-message__inner { width: 100%; display: flex; justify-content: center; overflow: visible; transform: translateY(calc(100% + 18px)); opacity: 0; transition: transform 0.58s var(--bonus-slide-ease), opacity 0.42s ease 0.06s; will-change: transform, opacity; }
.bonus-message--open .bonus-message__inner { transform: translateY(0); opacity: 1; }
@media (prefers-reduced-motion: reduce) { .bonus-message__inner { transition: none; transform: translateY(0); opacity: 1; } }
</style>
