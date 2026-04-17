<template>
  <div class="wheel-stack">
    <div class="wheel-layer" :style="wheelStyle">
      <img class="wheel" src="/desktop/wheel.svg" alt="Wheel" />
      <div class="wheel-labels" aria-hidden="true">
        <div
          v-for="(label, index) in wheelLabels"
          :key="`${index}-${label}`"
          class="wheel-label"
          :style="getWheelLabelStyle(index)"
        >
          <template v-if="label === 'WOWBET'">
            <img
              class="wheel-label__logo"
              src="/desktop/logo-wowbet.svg"
              alt="Wowbet"
            />
          </template>
          <template v-else>
            <span
              class="wheel-label__text"
              :class="{ 'wheel-label__text--highlight': isHighlightedLabel(label) }"
            >
              {{ label }}
            </span>
          </template>
        </div>
      </div>
    </div>
    <img class="rim" src="/desktop/wheel-rim.svg" alt="Wheel rim" />

    <Teleport to="body">
      <div v-if="hasSpinCompleted" class="bonus-message">
        <BonusRewardBar />
      </div>
    </Teleport>

    <button class="spin-button" type="button" :aria-label="texts.spinButton" :disabled="isSpinning" @click="spinWheel">
      <span class="spin-button__label">{{ texts.spinButton }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BonusRewardBar from './BonusRewardBar.vue'
import { useDesktopTexts } from '../composables/useDesktopTexts'
import { useWheelMotion } from '../composables/useWheelMotion'

const { hasSpinCompleted, isSpinning, spinWheel, wheelStyle } = useWheelMotion()
const { texts } = useDesktopTexts()

const wheelLabels = computed<string[]>(() => texts.value.wheel.labels)

const SECTOR_ANGLE = computed<number>(() => 360 / (wheelLabels.value.length || 1))
const LABEL_RADIUS_PX = 210

function getWheelLabelStyle(index: number) {
  const angle = index * SECTOR_ANGLE.value

  return {
    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${LABEL_RADIUS_PX}px)`,
  }
}

function isHighlightedLabel(label: string) {
  return texts.value.wheel.highlightedLabels.includes(label)
}
</script>

<style scoped>
.wheel-stack {
  position: fixed;
  top: 324px;
  bottom: 112px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vh - 436px);
  height: calc(100vh - 436px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.wheel-layer,
.wheel,
.rim {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.wheel-layer {
  z-index: 1;
  will-change: transform;
}

.wheel {
  position: absolute;
  inset: 0;
}

.rim {
  z-index: 2;
}

.wheel-labels {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.wheel-label {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform-origin: center;
}

.wheel-label__text {
  display: block;
  width: 100%;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  white-space: pre-line;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
}

.wheel-label__text--highlight {
  color: #ffdc3a;
  font-size: 14.86px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
}

.wheel-label__logo {
  display: block;
  max-width: 100%;
  height: 22px;
  object-fit: contain;
}

.bonus-message {
  position: fixed;
  left: 50%;
  bottom: 40px;
  z-index: 50;
  transform: translateX(-50%);
  animation: bonus-message-enter 280ms ease-out;
}

.spin-button {
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  width: fit-content;
  max-width: min(58%, 800px);
  min-width: 500px;
  aspect-ratio: 320 / 110;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(16px, 4.5vw, 40px);
  border: 0;
  background: url('/desktop/wheel_button_desktop/button-default.svg') center / 100% 100% no-repeat;
  color: white;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.spin-button:hover {
  background-image: url('/desktop/wheel_button_desktop/button-hover.svg');
  transform: translateY(-2px);
}

.spin-button:active {
  background-image: url('/desktop/wheel_button_desktop/button-press.svg');
  transform: translateY(1px);
}

.spin-button:disabled {
  cursor: default;
}

.spin-button:disabled:hover {
  background-image: url('/desktop/wheel_button_desktop/button-default.svg');
  transform: none;
}

.spin-button__label {
  font-family: 'Montserrat', system-ui, sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: clamp(12px, 1.8vw, 14px);
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

@keyframes bonus-message-enter {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 900px) {
  .wheel-stack {
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    transform: none;
    width: min(100%, 440px);
    height: auto;
    aspect-ratio: 1;
  }

  .bonus-message {
    bottom: 40px;
  }

  .spin-button {
    width: fit-content;
    max-width: min(92%, 280px);
    padding: 0 clamp(14px, 5vw, 32px);
  }
}
</style>
