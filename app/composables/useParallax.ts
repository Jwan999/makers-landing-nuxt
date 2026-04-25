export function useParallax(factor = 0.25) {
  const el = ref<HTMLElement | null>(null)
  const offset = ref(0)
  let rafId = 0
  let pending = false

  function update() {
    if (!el.value) return
    const rect = el.value.getBoundingClientRect()
    const vh = window.innerHeight || 800
    // Centered around viewport center: distance from center normalized
    const centerOffset = rect.top + rect.height / 2 - vh / 2
    offset.value = -centerOffset * factor
  }

  function schedule() {
    if (pending) return
    pending = true
    rafId = requestAnimationFrame(() => {
      pending = false
      update()
    })
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { el, offset }
}