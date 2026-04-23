export type LocaleCode = "en" | "tr" | "uz";

export type Locale = {
  code: LocaleCode;
  label: string;
};

export const LOCALE_ORDER: LocaleCode[] = ["en", "tr", "uz"];

export function flagSrc(loc: Locale) {
  return `${import.meta.env.BASE_URL}flags/${loc.code}.svg`;
}
