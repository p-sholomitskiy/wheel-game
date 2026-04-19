const base = `${import.meta.env.BASE_URL}chips`;

const assets = [
  `${base}/chip-red-small.svg`,
  `${base}/chip-red-big.svg`,
  `${base}/chip-gold-small.svg`,
  `${base}/chip-gold-big.svg`,
  `${base}/chip-black-1.svg`,
  `${base}/chip-black-2.svg`,
] as const;

export const chips = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: assets[i % assets.length]!,
  className: `chip--${i + 1}`,
})) as readonly { id: number; src: string; className: string }[];
