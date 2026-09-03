import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

const startedAt = performance.now();
const baseUrl = import.meta.env.BASE_URL;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const criticalImages = [
  `${baseUrl}ui/webp/${isMobile ? "bg-mobile" : "bg-desktop"}.webp`,
  `${baseUrl}ui/webp/wheel.webp`,
  `${baseUrl}ui/webp/wheel-rim.webp`,
  `${baseUrl}ui/webp/button-default.webp`,
  `${baseUrl}ui/webp/button-default-pulse-up.webp`,
  `${baseUrl}ui/webp/button-hover.webp`,
  `${baseUrl}ui/webp/button-press.webp`,
  `${baseUrl}ui/webp/logo-casino.webp`,
  `${baseUrl}ui/webp/logo-slot.webp`,
  `${baseUrl}ui/webp/gift.webp`,
  `${baseUrl}ui/webp/bonus_message_desk.webp`,
  ...["en", "tr", "uz"].map((locale) => `${baseUrl}flags/${locale}.svg`),
];

function preloadImage(src: string, priority: "high" | "low" = "high") {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.fetchPriority = priority;
    image.onload = async () => {
      try {
        await image.decode();
      } catch {
        // Loading succeeded; decoding may already be complete or unsupported.
      }
      resolve();
    };
    image.onerror = () => resolve();
    image.src = src;
  });
}

function nextFrame() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

async function preloadFonts() {
  if (!("fonts" in document)) return;

  try {
    await Promise.all([
      document.fonts.load('800 16px "Montserrat"'),
      document.fonts.load('italic 800 16px "Montserrat"'),
      document.fonts.load('500 16px "Inter"'),
    ]);
  } catch {
    // The app can safely fall back to system fonts when the provider is unavailable.
  }
}

async function bootstrap() {
  const criticalLoading = Promise.all([
    ...criticalImages.map((src) => preloadImage(src)),
    preloadFonts(),
  ]);
  void preloadImage(`${baseUrl}ui/webp/mascot.webp`, "low");

  await Promise.race([
    criticalLoading,
    new Promise<void>((resolve) => window.setTimeout(resolve, 30000)),
  ]);

  app.mount("#app");
  if ("fonts" in document) {
    await Promise.race([
      document.fonts.ready,
      new Promise<void>((resolve) => window.setTimeout(resolve, 2000)),
    ]);
  }
  await nextFrame();
  await nextFrame();
  await new Promise<void>((resolve) => window.setTimeout(resolve, 120));
  await nextFrame();

  const minimumDisplayTime = 350;
  const remainingTime = Math.max(0, minimumDisplayTime - (performance.now() - startedAt));
  await new Promise<void>((resolve) => window.setTimeout(resolve, remainingTime));

  const loader = document.querySelector<HTMLElement>("#app-loader");
  if (!loader) return;

  loader.classList.add("app-loader--hidden");
  window.setTimeout(() => loader.remove(), 300);
}

void bootstrap();
