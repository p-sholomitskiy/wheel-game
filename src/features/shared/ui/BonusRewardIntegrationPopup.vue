<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="bonus-reward-integration-popup__layer"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <div class="bonus-reward-integration-popup" :class="{ 'bonus-reward-integration-popup--mobile': isMobile }">
        <button class="bonus-reward-integration-popup__close" type="button" aria-label="Close popup" @click="close">
          x
        </button>

        <h2 class="bonus-reward-integration-popup__title">Integration Placeholder</h2>
        <p class="bonus-reward-integration-popup__subtitle">
          This modal is a fake integration point and can be replaced later.
        </p>

        <form class="bonus-reward-integration-popup__form" @submit.prevent="onSubmit">
          <label class="bonus-reward-integration-popup__label">
            Email
            <input
              v-model.trim="email"
              class="bonus-reward-integration-popup__input"
              type="email"
              autocomplete="email"
              required
            />
          </label>

          <label class="bonus-reward-integration-popup__label">
            Password
            <input
              v-model="password"
              class="bonus-reward-integration-popup__input"
              type="password"
              autocomplete="current-password"
              required
            />
          </label>

          <button class="bonus-reward-integration-popup__submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";
import { useIsMobileLayout } from "@/composables/useIsMobileLayout";

const isOpen = defineModel<boolean>({ required: true });

const { isMobile } = useIsMobileLayout();

const emit = defineEmits<{
  submit: [{ email: string; password: string }];
}>();

const email = ref("");
const password = ref("");

function close() {
  isOpen.value = false;
}

function onSubmit() {
  emit("submit", { email: email.value, password: password.value });
  close();
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && isOpen.value) {
    close();
  }
}

watch(
  isOpen,
  (open) => {
    if (open) {
      document.addEventListener("keydown", onKeydown);
    } else {
      document.removeEventListener("keydown", onKeydown);
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
.bonus-reward-integration-popup__layer {
  position: fixed;
  inset: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.6);
}

.bonus-reward-integration-popup {
  position: absolute;
  top: 154px;
  left: 620px;
  width: 360px;
  height: 592px;
  box-sizing: border-box;
  border-radius: 16px;
  opacity: 1;
  background: #171925;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bonus-reward-integration-popup__close {
  align-self: flex-end;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.bonus-reward-integration-popup__title {
  font-family: Montserrat, system-ui, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.bonus-reward-integration-popup__subtitle {
  font-size: 13px;
  color: #cdd1df;
}

.bonus-reward-integration-popup__form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bonus-reward-integration-popup__label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
}

.bonus-reward-integration-popup__input {
  height: 40px;
  border: 1px solid #2f3549;
  border-radius: 8px;
  background: #0f1220;
  color: #fff;
  padding: 0 12px;
}

.bonus-reward-integration-popup__submit {
  margin-top: 8px;
  border: 0;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  background: #25f56c;
  color: #111;
  font-weight: 700;
}

.bonus-reward-integration-popup--mobile {
  inset: 0;
  width: 100vw;
  height: 100dvh;
  border-radius: 0;
}
</style>
