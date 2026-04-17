import { computed } from 'vue'
import { DESKTOP_TEXTS_BY_LOCALE } from '../constants/desktopTexts'
import { useLocaleStore } from './useLocaleStore'

export function useDesktopTexts() {
  const localeStore = useLocaleStore()

  const texts = computed(() => {
    return DESKTOP_TEXTS_BY_LOCALE[localeStore.current] ?? DESKTOP_TEXTS_BY_LOCALE.kg
  })

  return {
    texts,
  }
}

