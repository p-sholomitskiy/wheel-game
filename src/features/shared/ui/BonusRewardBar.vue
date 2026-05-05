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
  --bar-width: 410px;
  --bar-height: 100px;
  --bar-gap: 20px;
  --bar-radius: 16px;
  --bar-padding: 20px 30px 20px 120px;
  --gift-size: 110px;
  --gift-left: 0px;
  --gift-scale: 1.1;
  --text-gap: 4px;
  --text-align: center;
  --text-size: 16px;
  position: relative;
  z-index: 1;
  isolation: isolate;
  box-sizing: border-box;
  width: var(--bar-width);
  min-width: var(--bar-width);
  max-width: var(--bar-width);
  height: var(--bar-height);
  min-height: var(--bar-height);
  max-height: var(--bar-height);
  margin: 0 auto;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--bar-gap);
  border-radius: var(--bar-radius);
  padding: var(--bar-padding);
  background: linear-gradient(180deg, #f7df00 0%, #ffbf00 100%);
  box-shadow: 0 4px 21.7px 0 #2f02009e;
}
.bonus-reward-bar__gift {
  position: absolute;
  scale: var(--gift-scale);
  left: var(--gift-left);
  top: 50%;
  transform: translateY(-50%);
  width: var(--gift-size);
  height: var(--gift-size);
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
  gap: var(--bar-gap);
}
.bonus-reward-bar__text-group {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--text-gap);
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
  font-size: var(--text-size);
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: var(--text-align);
  text-transform: uppercase;
  color: #e10000;
}

@media (max-width: 768px) {
  .bonus-reward-bar {
    --bar-width: 332px;
    --bar-height: 68px;
    --bar-gap: 10px;
    --bar-radius: 12px;
    --bar-padding: 8px 10px 8px 74px;
    --gift-size: 68px;
    --gift-left: 4px;
    --gift-scale: 1;
    --text-gap: 2px;
    --text-align: left;
    --text-size: 16px;
  }

  .bonus-reward-bar__body :deep(.bonus-reward-cta) {
    width: 96px;
    min-height: 30px;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
  }
}

</style>
