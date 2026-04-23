<template>
  <div class="lightning-layer" aria-hidden="true">
    <svg
      v-for="bolt in bolts"
      :key="bolt.id"
      class="lightning-bolt"
      :style="{
        left: bolt.left,
        top: bolt.top,
        width: `${bolt.w}px`,
        height: `${bolt.h}px`,
        animationDuration: bolt.dur,
        animationDelay: bolt.delay,
      }"
      viewBox="0 0 120 520"
      preserveAspectRatio="none"
    >
      <!-- Широкий белый ореол -->
      <path
        class="lightning-bolt__glow"
        fill="none"
        stroke="#ffffff"
        stroke-width="20"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.22"
        d="M60 8 L16 92 L104 102 L10 188 L110 200 L12 288 L108 302 L18 382 L102 396 L28 472 L92 488 L48 512"
      />
      <path
        class="lightning-bolt__path"
        fill="none"
        stroke="#ffffff"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M60 8 L16 92 L104 102 L10 188 L110 200 L12 288 L108 302 L18 382 L102 396 L28 472 L92 488 L48 512"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
type Bolt = {
  id: string;
  left: string;
  top: string;
  w: number;
  h: number;
  dur: string;
  delay: string;
};

const bolts: Bolt[] = [
  { id: "a", left: "2%", top: "-14%", w: 96, h: 520, dur: "9.5s", delay: "0s" },
  { id: "b", left: "16%", top: "-8%", w: 108, h: 480, dur: "11s", delay: "-2.4s" },
  { id: "c", left: "40%", top: "-16%", w: 88, h: 560, dur: "10.2s", delay: "-4.1s" },
  { id: "d", left: "64%", top: "-10%", w: 100, h: 500, dur: "9.8s", delay: "-1.2s" },
  { id: "e", left: "80%", top: "-6%", w: 92, h: 460, dur: "10.6s", delay: "-5.5s" },
  { id: "f", left: "48%", top: "0%", w: 104, h: 440, dur: "9.2s", delay: "-3.3s" },
];
</script>

<style scoped>
.lightning-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.lightning-bolt {
  position: absolute;
  opacity: 0;
  transform-origin: center top;
  animation-name: lightning-bolt-flash;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.55))
    drop-shadow(0 0 64px rgba(255, 255, 255, 0.25));
}

/* Длинный цикл: нарастание → яркая фаза → плавное «затухание» (молния ещё чуть видна). */
@keyframes lightning-bolt-flash {
  0%,
  62%,
  100% {
    opacity: 0;
    transform: scaleY(1);
  }
  65% {
    opacity: 0.2;
  }
  68%,
  76% {
    opacity: 1;
    transform: scaleY(1.01);
  }
  79% {
    opacity: 0.55;
  }
  82%,
  88% {
    opacity: 0.18;
  }
  91% {
    opacity: 0;
    transform: scaleY(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .lightning-layer {
    display: none;
  }
}
</style>
