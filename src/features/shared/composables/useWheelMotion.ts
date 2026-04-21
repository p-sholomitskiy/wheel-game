import { computed, onBeforeUnmount, ref } from "vue";

const FULL_SPINS = 5;
const SPIN_DURATION_MS = 4200;

export type UseWheelMotionOptions = {
  getTargetNormalizedAngleDeg: () => number | null;
  onSpinAnimationComplete?: () => void;
};

/** Normalized clockwise wheel rotation (deg) so sector `index` sits under the top pointer. */
export function sectorIndexToNormalizedWheelAngle(index: number, sectorCount: number): number {
  if (sectorCount <= 0) return 360;
  const sectorAngle = 360 / sectorCount;
  let angle = (360 - index * sectorAngle) % 360;
  if (angle === 0) angle = 360;
  return angle;
}

export function useWheelMotion(options: UseWheelMotionOptions) {
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

    const targetAngle = options.getTargetNormalizedAngleDeg();
    if (targetAngle === null) return;

    clearSpinTimer();
    isSpinning.value = true;
    hasSpinCompleted.value = false;

    spinTransition.value = `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const currentAngle = normalizeAngle(wheelRotation.value);
        const targetDelta = (targetAngle - currentAngle + 360) % 360;
        const landingDelta = targetDelta === 0 ? 360 : targetDelta;

        wheelRotation.value += FULL_SPINS * 360 + landingDelta;
      });
    });

    spinDoneTimer = window.setTimeout(() => {
      spinDoneTimer = undefined;
      isSpinning.value = false;
      hasSpinCompleted.value = true;
      spinTransition.value = "none";
      options.onSpinAnimationComplete?.();
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
