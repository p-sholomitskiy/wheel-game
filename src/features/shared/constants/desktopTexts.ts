import type { LocaleCode } from "../composables/useLocaleStore";

export type DesktopTexts = {
  languageSwitcher: {
    localeLabels: Record<LocaleCode, string>;
  };
  heroHeadline: string;
  heroActionButton: string;
  spinButton: string;
  bonusReward: {
    amountText: string;
    subtitleText: string;
    buttonText: string;
  };
  wheel: {
    labels: string[];
    /** Два элемента: целевой сектор 1-го и 2-го прокрута + подсветка (строки — как в `labels`, можно с теми же переносами строк). */
    highlightedLabels: [string, string];
  };
};

export const CASINO_NAME = `BIGSBET`;

export const DESKTOP_TEXTS_BY_LOCALE: Record<LocaleCode, DesktopTexts> = {
  uz: {
    languageSwitcher: {
      localeLabels: {
        en: "EN",
        tr: "TR",
        uz: "UZ",
      },
    },
    heroHeadline: "G‘ildirakni aylantiring va sovrinlar yutib oling!",
    heroActionButton: "Qolgan urinishlar soni",
    spinButton: "Aylantirish",
    bonusReward: {
      amountText: "120% + 150 FS",
      subtitleText: "Siz yutdingiz",
      buttonText: "Olish",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS + 120%",
        `${CASINO_NAME}`,
        "Qayta urinib ko'ring",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "Qayta urinib ko'ring",
        "50FS",
      ],
      highlightedLabels: ["Qayta urinib ko'ring", "150FS + 120%"],
    },
  },
  tr: {
    languageSwitcher: {
      localeLabels: {
        en: "EN",
        tr: "TR",
        uz: "UZ",
      },
    },
    heroHeadline: "Çarkı çevirin \nve ödüller kazanın!",
    heroActionButton: "Kalan deneme sayısı",
    spinButton: "Çevir",
    bonusReward: {
      amountText: "120% + 150 FS",
      subtitleText: "Kazandınız",
      buttonText: "Al",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS + 120%",
        `${CASINO_NAME}`,
        "Tekrar deneyin",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "Tekrar deneyin",
        "50FS",
      ],
      highlightedLabels: ["Tekrar deneyin", "150FS + 120%"],
    },
  },
  en: {
    languageSwitcher: {
      localeLabels: {
        en: "EN",
        tr: "TR",
        uz: "UZ",
      },
    },
    heroHeadline: "Spin the wheel \nand win prizes!",
    heroActionButton: "Remaining attempts",
    spinButton: "Spin",
    bonusReward: {
      amountText: "120% + 150 FS",
      subtitleText: "Your bonus",
      buttonText: "Claim",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS + 120%",
        `${CASINO_NAME}`,
        "TRY AGAIN",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "TRY AGAIN",
        "50FS",
      ],
      highlightedLabels: ["TRY AGAIN", "150FS + 120%"],
    },
  },
};
