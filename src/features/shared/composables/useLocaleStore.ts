import { defineStore } from "pinia";

export type LocaleCode = "uz" | "tr" | "en";

export const useLocaleStore = defineStore("desktop-locale", {
  state: () => ({
    current: "en" as LocaleCode,
  }),
  actions: {
    setLocale(code: LocaleCode) {
      this.current = code;
    },
  },
});
