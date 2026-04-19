import { computed, onBeforeUnmount, ref } from "vue";

const FULL_SPINS = 5;
const TARGET_150_FS_ANGLE = 324;
const SPIN_DURATION_MS = 4200;

export function useWheelMotion() {
  const wheelRotation = ref(0);
  const isSpinning = ref(false);
  const hasSpinCompleted = ref(false);
  const spinTransition = ref("none");

  let spinDoneTimer: number | undefined;

  const wheelStyle = computed(() => ({
    transform: `rotate(${wheelRotation.value}deg)`,
    transition: spinTransition.value,
  }));

  function normalizeAngle(angle: number) {
    return ((angle % 360) + 360) % 360;
  }

  function clearSpinTimer() {
    if (spinDoneTimer !== undefined) {
      window.clearTimeout(spinDoneTimer);
      spinDoneTimer = undefined;
    }
  }

  function spinWheel() {
    if (isSpinning.value) return;

    clearSpinTimer();
    isSpinning.value = true;
    hasSpinCompleted.value = false;

    spinTransition.value = `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const currentAngle = normalizeAngle(wheelRotation.value);
        const targetDelta = (TARGET_150_FS_ANGLE - currentAngle + 360) % 360;
        const landingDelta = targetDelta === 0 ? 360 : targetDelta;

        wheelRotation.value += FULL_SPINS * 360 + landingDelta;
      });
    });

    spinDoneTimer = window.setTimeout(() => {
      spinDoneTimer = undefined;
      isSpinning.value = false;
      hasSpinCompleted.value = true;
      spinTransition.value = "none";
    }, SPIN_DURATION_MS);
  }

  onBeforeUnmount(() => {
    clearSpinTimer();
  });

  return {
    hasSpinCompleted,
    isSpinning,
    spinWheel,
    wheelStyle,
  };
}
