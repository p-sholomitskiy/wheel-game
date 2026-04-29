<template>
  <div class="bonus-reward-bar" role="status" aria-live="polite">
    <img class="bonus-reward-bar__gift" src="/ui/gift.svg" width="110" height="110" alt="" />
    <div class="bonus-reward-bar__body">
      <div class="bonus-reward-bar__text-group">
        <div class="bonus-reward-bar__text-line">
          {{ subtitleDisplay }}
        </div>
        <div class="bonus-reward-bar__text-line">
          {{ amountDisplay }}
        </div>
      </div>
      <BonusRewardCtaButton>{{ buttonText ?? texts.bonusReward.buttonText }}</BonusRewardCtaButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BonusRewardCtaButton from "./BonusRewardCtaButton.vue";
import { useDesktopTexts } from "../composables/useDesktopTexts";
const props = defineProps<{ amountText?: string; subtitleText?: string; buttonText?: string }>();
const { texts } = useDesktopTexts();
const amountDisplay = computed(() => props.amountText ?? texts.value.bonusReward.amountText);
const subtitleDisplay = computed(() => props.subtitleText ?? texts.value.bonusReward.subtitleText);
</script>

<style scoped>
.bonus-reward-bar {
  position: relative;
  z-index: 1;
  isolation: isolate;
  box-sizing: border-box;
  width: 410px;
  max-width: none;
  min-width: 410px;
  min-height: 100px;
  height: 100px;
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
.bonus-reward-bar__text-group {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.bonus-reward-bar__body :deep(.bonus-reward-cta) {
  flex-shrink: 0;
}

.bonus-reward-bar__text-line {
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-family: Montserrat;
  font-weight: 900;
  font-style: Italic;
  font-size: 16px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  color: #e10000;
}

</style>
