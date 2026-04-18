<template>
  <div class="wheel-section">
    <div class="wheel-visual">
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
              <img class="wheel-label__logo" src="/desktop/logo-wowbet.svg" alt="Wowbet" />
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
      <img class="rim" src="/desktop/wheel-rim.svg" alt="" />
      <button class="spin-button" type="button" :aria-label="texts.spinButton" :disabled="isSpinning" @click="spinWheel">
        {{ texts.spinButton }}
      </button>
    </div>

    <Teleport v-if="bonusTeleportEnabled" defer to="#desktop-bonus-anchor">
      <div v-if="hasSpinCompleted" class="bonus-message">
        <BonusRewardBar />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import BonusRewardBar from './BonusRewardBar.vue'
import { useDesktopTexts } from '../composables/useDesktopTexts'
import { useWheelMotion } from '../composables/useWheelMotion'

const bonusTeleportEnabled = ref(false)

onMounted(() => {
  void nextTick(() => {
    bonusTeleportEnabled.value = true
  })
})

const { hasSpinCompleted, isSpinning, spinWheel, wheelStyle } = useWheelMotion()
const { texts } = useDesktopTexts()

const wheelLabels = computed<string[]>(() => texts.value.wheel.labels)

const sectorAngleDeg = computed<number>(() => 360 / (wheelLabels.value.length || 1))

function getWheelLabelStyle(index: number) {
  const angle = index * sectorAngleDeg.value
  return { '--wheel-label-angle': `${angle}deg` }
}

function isHighlightedLabel(label: string) {
  return texts.value.wheel.highlightedLabels.includes(label)
}
</script>

<style scoped>
.wheel-section {
  width: 100%;
}

.wheel-visual {
  position: relative;
  width: 100%;
  max-width: 100%;
  display: block;
  line-height: 0;
  pointer-events: none;
  --wheel-art: 464;
}

.wheel-layer {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
  container-type: inline-size;
}

.wheel {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
  width: calc(96 / var(--wheel-art) * 100cqi);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(var(--wheel-label-angle, 0deg))
    translateY(calc(-210 / var(--wheel-art) * 100cqi + 30px));
}

.wheel-label__text {
  display: block;
  width: 100%;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: calc(12 / var(--wheel-art) * 100cqi);
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-line;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
}

.wheel-label__text--highlight {
  color: #ffdc3a;
  font-size: calc(14.86 / var(--wheel-art) * 100cqi);
}

.wheel-label__logo {
  display: block;
  max-width: 100%;
  height: calc(22 / var(--wheel-art) * 100cqi);
  object-fit: contain;
}

.rim {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  z-index: 3;
}

.spin-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 62%;
  aspect-ratio: 320 / 110;
  z-index: 4;
  border: 0;
  padding: 0;
  background: url('/desktop/wheel_button_desktop/button-default.svg') center / 100% 100% no-repeat;
  pointer-events: auto;
}

.bonus-message {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
</style>
