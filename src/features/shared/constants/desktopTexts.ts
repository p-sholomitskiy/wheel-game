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
    highlightedLabels: string[];
  };
};

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
      labels: ["1000€", "150FS", "WOWBET", "кайрадан\nкөр", "100€", "1500€", "500€", "WOWBET", "кайрадан\nкөр", "100FS"],
      highlightedLabels: ["1500 ЕВРО", "150FS"],
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
      labels: ["1000€", "150FS", "WOWBET", "қайталап\nкөр", "100€", "1500€", "500€", "WOWBET", "қайталап\nкөр", "100FS"],
      highlightedLabels: ["1500 ЕВРО", "150FS"],
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
      labels: ["1000€", "150FS", "WOWBET", "qayta\nurinib ko'r", "100€", "1500€", "500€", "WOWBET", "qayta\nurinib ko'r", "100FS"],
      highlightedLabels: ["1500 YEVRO", "150FS"],
    },
  },
};
