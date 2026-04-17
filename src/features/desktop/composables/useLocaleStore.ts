import { defineStore } from 'pinia'

export type LocaleCode = 'kg' | 'kz' | 'uz'

export const useLocaleStore = defineStore('desktop-locale', {
  state: () => ({
    current: 'kg' as LocaleCode,
  }),
  actions: {
    setLocale(code: LocaleCode) {
      this.current = code
    },
  },
})

