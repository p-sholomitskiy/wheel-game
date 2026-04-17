import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const SPIN_DURATION_MS = 4200
const FULL_SPINS = 5
const TARGET_150_FS_ANGLE = 324
const IDLE_MOVE_MIN_MS = 1200
const IDLE_MOVE_MAX_MS = 2300
const IDLE_ROTATION_MIN = 14
const IDLE_ROTATION_MAX = 34
const IDLE_TRANSITION_MIN_S = 1.4
const IDLE_TRANSITION_MAX_S = 2.4
const DEFAULT_IDLE_TRANSITION = 'transform 2.2s ease-in-out'
const SPIN_TRANSITION = 'transform 4.2s cubic-bezier(0.2, 0.8, 0.2, 1)'

export function useWheelMotion() {
  const wheelRotation = ref(0)
  const isSpinning = ref(false)
  const hasSpinCompleted = ref(false)
  const wheelTransition = ref(DEFAULT_IDLE_TRANSITION)

  let idleTimer: number | undefined

  const wheelStyle = computed(() => ({
    transform: `rotate(${wheelRotation.value}deg)`,
    transition: wheelTransition.value,
  }))

  function normalizeAngle(angle: number) {
    return ((angle % 360) + 360) % 360
  }

  function getRandomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function clearIdleTimer() {
    window.clearTimeout(idleTimer)
  }

  function scheduleIdleMotion() {
    clearIdleTimer()

    if (isSpinning.value) return

    const delay = getRandomInRange(IDLE_MOVE_MIN_MS, IDLE_MOVE_MAX_MS)

    idleTimer = window.setTimeout(() => {
      if (isSpinning.value) return

      const direction = Math.random() > 0.5 ? 1 : -1
      const drift = getRandomInRange(IDLE_ROTATION_MIN, IDLE_ROTATION_MAX) * direction
      const duration = getRandomInRange(IDLE_TRANSITION_MIN_S, IDLE_TRANSITION_MAX_S)

      wheelTransition.value = `transform ${duration}s ease-in-out`
      wheelRotation.value += drift

      scheduleIdleMotion()
    }, delay)
  }

  function spinWheel() {
    if (isSpinning.value) return

    clearIdleTimer()
    isSpinning.value = true
    hasSpinCompleted.value = false
    wheelTransition.value = SPIN_TRANSITION

    const currentAngle = normalizeAngle(wheelRotation.value)
    const targetDelta = (TARGET_150_FS_ANGLE - currentAngle + 360) % 360
    const landingDelta = targetDelta === 0 ? 360 : targetDelta

    wheelRotation.value += FULL_SPINS * 360 + landingDelta

    window.setTimeout(() => {
      isSpinning.value = false
      hasSpinCompleted.value = true
      wheelTransition.value = DEFAULT_IDLE_TRANSITION
      scheduleIdleMotion()
    }, SPIN_DURATION_MS)
  }

  onMounted(() => {
    scheduleIdleMotion()
  })

  onBeforeUnmount(() => {
    clearIdleTimer()
  })

  return {
    hasSpinCompleted,
    isSpinning,
    spinWheel,
    wheelStyle,
  }
}
