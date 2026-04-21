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
  kg: {
    languageSwitcher: {
      localeLabels: {
        kg: "KG",
        kz: "KZ",
        uz: "UZ",
      },
    },
    heroHeadline: "Дөңгелекти айлантып,\nсыйлыктарды утуп алыңыз",
    heroActionButton: "Қалған әрекет саны - 1",
    spinButton: "айлантуу",
    bonusReward: {
      amountText: "150 FS",
      subtitleText: "БУРЧТУ айлантуу",
      buttonText: "Баары",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS",
        `${CASINO_NAME}`,
        "кайрадан\nкөр",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "кайрадан\nкөр",
        "50FS",
      ],
      highlightedLabels: ["150€", "50FS"],
    },
  },
  kz: {
    languageSwitcher: {
      localeLabels: {
        kg: "KG",
        kz: "KZ",
        uz: "UZ",
      },
    },
    heroHeadline: "Дөңгелекті бұрап,\nсыйлықтар ұтып алыңыз",
    heroActionButton: "Қалған әрекет саны - 2",
    spinButton: "айналдыру",
    bonusReward: {
      amountText: "150 FS",
      subtitleText: "EГIН айналдыру",
      buttonText: "Барлық",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS",
        `${CASINO_NAME}`,
        "қайталап\nкөр",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "қайталап\nкөр",
        "50FS",
      ],
      highlightedLabels: ["150€", "50FS"],
    },
  },
  uz: {
    languageSwitcher: {
      localeLabels: {
        kg: "KG",
        kz: "KZ",
        uz: "UZ",
      },
    },
    heroHeadline: "G'ildirakni aylantirib,\nsovrinlarni yutib oling",
    heroActionButton: "Qolgan urinishlar soni - 2",
    spinButton: "aylantirish",
    bonusReward: {
      amountText: "150 FS",
      subtitleText: "BURCHAKNI aylantirish",
      buttonText: "Hammasi",
    },
    wheel: {
      labels: [
        "1000€",
        "150FS",
        `${CASINO_NAME}`,
        "qayta\nurinib ko'r",
        "150€",
        "1500€",
        "500€",
        `${CASINO_NAME}`,
        "qayta\nurinib ko'r",
        "50FS",
      ],
      highlightedLabels: ["150€", "50FS"],
    },
  },
};
