import { computed, ref } from "vue";

const STORAGE_KEY = "wheel-game:completed-spins";
const MAX_SPINS = 2;

function loadCount(): number {
  if (typeof localStorage === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw == null) return 0;
    const n = Number.parseInt(raw, 10);
    if (!Number.isFinite(n) || n < 0) return 0;
    return Math.min(n, MAX_SPINS);
  } catch {
    return 0;
  }
}

const completedSpins = ref(loadCount());
const canSpin = computed(() => completedSpins.value < MAX_SPINS);

export function useWheelSpinStorage() {
  function recordSpinComplete() {
    if (completedSpins.value >= MAX_SPINS) return;
    completedSpins.value += 1;
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, String(completedSpins.value));
      }
    } catch {
      // ignore private mode / quota
    }
  }

  return { completedSpins, canSpin, recordSpinComplete, maxSpins: MAX_SPINS };
}
