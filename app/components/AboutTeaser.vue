<script setup lang="ts">
const events = [
  { y: '2017', l: 'Founded as IoT Maker' },
  { y: '2018', l: '—' },
  { y: '2019', l: 'First GIZ partnership' },
  { y: '2020', l: 'Grew co-working + training facilities' },
  { y: '2021', l: '—' },
  { y: '2022', l: 'Rebranded to Makers of Baghdad' },
  { y: '2023', l: 'Launched Makers Suite' },
  { y: '2024', l: '—' },
  { y: '2025', l: '—' },
  { y: 'Now',  l: "Iraq's data-driven hub" },
]

const STEP_PX = 320

const sectionEl = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const subProgress = ref(0)

let rafId = 0
let pending = false

function scheduleUpdate() {
  if (pending) return
  pending = true
  rafId = requestAnimationFrame(() => {
    pending = false
    update()
  })
}

function update() {
  const el = sectionEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || 800
  const sectionHeight = rect.height
  const totalPinnedScroll = sectionHeight - vh
  const scrolled = Math.max(0, -rect.top)
  const p = totalPinnedScroll > 0 ? Math.min(1, scrolled / totalPinnedScroll) : 0
  const pFull = p * events.length
  const idx = Math.min(events.length - 1, Math.floor(pFull))
  activeIndex.value = idx
  subProgress.value = Math.max(0, Math.min(1, pFull - idx))
}

onMounted(() => {
  update()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', scheduleUpdate)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section
    ref="sectionEl"
    class="relative bg-zinc-50"
    :style="{ height: `calc(100vh + ${events.length * STEP_PX}px)` }"
  >
    <div class="sticky top-0 h-screen overflow-hidden">
      <div class="container-m h-full flex flex-col justify-center gap-16 py-[60px]">
        <!-- Header -->
        <div>
          <div class="eyebrow">Who We Are</div>
          <h2 class="h-section">A data-driven hub<br />empowering Iraq's entrepreneurs.</h2>
        </div>

        <!-- Active milestone (centered, big) -->
        <div>
          <div class="w-full">
            <!-- Year + description (crossfading stack) -->
            <div class="grid grid-cols-1">
              <div
                v-for="(e, i) in events"
                :key="i"
                class="col-start-1 row-start-1 flex items-center justify-between gap-10 flex-wrap transition-all duration-[450ms]"
                :style="{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: i === activeIndex
                    ? 'translateY(0)'
                    : i < activeIndex
                      ? 'translateY(-36px)'
                      : 'translateY(36px)',
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }"
              >
                <div
                  class="font-bold text-zinc-950 shrink-0"
                  style="font-size: clamp(76px, 14vw, 200px); line-height: 0.92; letter-spacing: -0.03em;"
                >
                  {{ e.y }}
                </div>
                <div class="body-lg text-zinc-700 max-w-[40ch]">{{ e.l }}</div>
              </div>
            </div>

            <!-- Persistent progress bar (below year, unaffected by milestone transitions) -->
            <div class="mt-12 flex items-center gap-4">
              <div class="mono text-zinc-500 shrink-0 tabular-nums">
                {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(events.length).padStart(2, '0') }}
              </div>
              <div class="flex-1 flex gap-1.5">
                <div
                  v-for="(_, j) in events"
                  :key="j"
                  class="h-[6px] flex-1 rounded-full relative overflow-hidden transition-colors duration-300"
                  :class="j < activeIndex ? 'bg-[var(--orange)]' : 'bg-zinc-200'"
                >
                  <div
                    v-if="j === activeIndex"
                    class="absolute inset-y-0 left-0 bg-[var(--orange)] rounded-full"
                    :style="{ width: (subProgress * 100) + '%' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>