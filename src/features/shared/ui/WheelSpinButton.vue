<template>
  <div
    role="button"
    class="wheel-spin-button"
    :tabindex="disabled ? -1 : 0"
    :aria-disabled="disabled ? true : undefined"
    @click="onClick"
    @keydown="onKeydown"
  >
    <span class="wheel-spin-button__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; disabled?: boolean }>();
const emit = defineEmits<{ click: [] }>();

function onClick() {
  if (props.disabled) return;
  emit("click");
}
function onKeydown(e: KeyboardEvent) {
  if (props.disabled) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    emit("click");
  }
}
</script>

<style scoped>
/* Только transform: смена background-image в keyframes даёт мигание в Safari при скролле/таче. */
@keyframes wheel-spin-button-idle-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
}
.wheel-spin-button {
  --wheel-spin-button-width: 62%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: var(--wheel-spin-button-width);
  aspect-ratio: 1;
  z-index: 4;
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: url("/ui/webp/button-default.webp") center / 100% 100% no-repeat;
  pointer-events: auto;
  line-height: 0;
}
.wheel-spin-button::before,
.wheel-spin-button::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0;
  pointer-events: none;
}
.wheel-spin-button::before {
  background-image: url("/ui/webp/button-hover.webp");
}
.wheel-spin-button::after {
  background-image: url("/ui/webp/button-press.webp");
}
.wheel-spin-button__label {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Montserrat", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(0.62rem, 1.9vw, 0.82rem);
  line-height: 1.05;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
  pointer-events: none;
}

/* Сенсорные экраны: не требуем :not(:hover) — после тапа iOS может «держать» hover и глушить пульс. */
@media (hover: none) {
  .wheel-spin-button:not([aria-disabled="true"]) {
    animation: wheel-spin-button-idle-pulse 1.8s ease-in-out infinite both;
    will-change: transform;
  }
}

/* Устройства с настоящим hover: пульс только когда курсор не на кнопке. */
@media (hover: hover) {
  .wheel-spin-button:not([aria-disabled="true"]):not(:hover) {
    animation: wheel-spin-button-idle-pulse 1.8s ease-in-out infinite both;
    will-change: transform;
  }

  .wheel-spin-button:hover:not([aria-disabled="true"]) {
    animation: none;
    will-change: auto;
  }

  .wheel-spin-button:hover:not([aria-disabled="true"])::before {
    opacity: 1;
  }
}

.wheel-spin-button:active:not([aria-disabled="true"]) {
  animation: none;
  will-change: auto;
}
.wheel-spin-button:active:not([aria-disabled="true"])::before {
  opacity: 0;
}
.wheel-spin-button:active:not([aria-disabled="true"])::after {
  opacity: 1;
}
.wheel-spin-button:focus {
  outline: none;
}
.wheel-spin-button:focus-visible {
  outline: 2px solid #ffdc3a;
  outline-offset: 3px;
}
.wheel-spin-button[aria-disabled="true"] {
  animation: none;
  will-change: auto;
  cursor: not-allowed;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  @media (hover: none) {
    .wheel-spin-button:not([aria-disabled="true"]) {
      animation: none;
      will-change: auto;
    }
  }
  @media (hover: hover) {
    .wheel-spin-button:not([aria-disabled="true"]):not(:hover) {
      animation: none;
      will-change: auto;
    }
  }
}
</style>
