import { onMounted, onUnmounted, ref } from "vue"
import { MOBILE_LAYOUT_MAX_WIDTH_PX } from "@/constants/layout"

function mediaQuery() {
  return `(max-width: ${MOBILE_LAYOUT_MAX_WIDTH_PX}px)`
}

function matchesMobileViewport() {
  if (typeof window === "undefined") return false
  return window.matchMedia(mediaQuery()).matches
}

/**
 * Root layout switch: desktop vs mobile tree.
 * Initial value matches the client viewport when `window` exists.
 */
export function useIsMobileLayout() {
  const isMobile = ref(matchesMobileViewport())
  let mql: MediaQueryList | null = null

  function sync() {
    isMobile.value = matchesMobileViewport()
  }

  onMounted(() => {
    sync()
    mql = window.matchMedia(mediaQuery())
    mql.addEventListener("change", sync)
  })

  onUnmounted(() => {
    mql?.removeEventListener("change", sync)
    mql = null
  })

  return { isMobile }
}
