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
.bonus-reward-bar {
  box-sizing: border-box;
  width: 410px;
  max-width: calc(100vw - 32px);
  height: 100px;
  padding: 20px 30px 20px 120px;
  border-radius: 16px;
  background: linear-gradient(180deg, #f7df00 0%, #ffbf00 100%);
  box-shadow: 0 4px 21.7px 0 #2f02009e;
  position: relative;
  display: flex;
  align-items: center;
}

.bonus-reward-bar__gift {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 110px;
  height: 110px;
  pointer-events: none;
  user-select: none;
}

.bonus-reward-bar__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  min-width: 0;
}

.bonus-reward-bar__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  flex: 1;
}

.bonus-reward-bar__amount {
  min-width: 0;
}

.bonus-reward-bar__amount-img {
  flex-shrink: 0;
  display: block;
  height: 40px;
  width: auto;
}

.bonus-reward-bar__subtitle {
  margin-top: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  color: #a90004;
  text-transform: uppercase;
  text-align: center;
}

@media (max-width: 520px) {
  .bonus-reward-bar {
    width: min(410px, 100%);
    height: auto;
    min-height: 100px;
    padding: 16px 16px 16px 108px;
  }

  .bonus-reward-bar__body {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

}
</style>
