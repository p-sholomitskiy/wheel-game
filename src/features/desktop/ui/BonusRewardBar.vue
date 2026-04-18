<template>
  <div class="bonus-reward-bar" role="status" aria-live="polite">
    <img class="bonus-reward-bar__gift" src="/desktop/gift.svg" width="110" height="110" alt="" />

    <div class="bonus-reward-bar__body">
      <div class="bonus-reward-bar__text">
        <div class="bonus-reward-bar__amount">
          <img
            class="bonus-reward-bar__amount-img"
            src="/desktop/150FS.svg"
            width="96"
            height="48"
            :alt="amountText ?? texts.bonusReward.amountText"
          />
        </div>
        <div class="bonus-reward-bar__subtitle">{{ subtitleText ?? texts.bonusReward.subtitleText }}</div>
      </div>

      <BonusRewardCtaButton>{{ buttonText ?? texts.bonusReward.buttonText }}</BonusRewardCtaButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BonusRewardCtaButton from './BonusRewardCtaButton.vue'
import { useDesktopTexts } from '../composables/useDesktopTexts'

const { texts } = useDesktopTexts()

defineProps<{
  amountText?: string
  subtitleText?: string
  buttonText?: string
}>()
</script>

<style scoped>
@keyframes bonus-reward-bar-enter {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.bonus-reward-bar {
  position: relative;
  box-sizing: border-box;
  width: 410px;
  max-width: 100%;
  min-height: 100px;
  height: auto;
  margin: 20px auto 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
  padding: 20px 30px 20px 120px;
  background: linear-gradient(180deg, #f7df00 0%, #ffbf00 100%);
  box-shadow: 0 4px 21.7px 0 #2f02009e;
  animation: bonus-reward-bar-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .bonus-reward-bar {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

.bonus-reward-bar__gift {
  position: absolute;
  left: 20px;
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
  font-size: 0.75rem;
  font-weight: 800;
  color: #a90004;
  text-transform: uppercase;
  text-align: center;
}
</style>
