export type LocaleCode = 'kg' | 'kz' | 'uz'

export type Locale = {
  code: LocaleCode
  label: string
}

export const LOCALE_ORDER: LocaleCode[] = ['kg', 'kz', 'uz']

export function flagSrc(loc: Locale) {
  return `${import.meta.env.BASE_URL}flags/${loc.code}.svg`
}
