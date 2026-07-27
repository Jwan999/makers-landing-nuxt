<script setup lang="ts">
const events = [
  {
    y: '2020',
    theme: 'Making through the crisis',
    goal: 'When COVID-19 hit Iraq, we moved training online and turned the MakerSpace machines toward the response — printing face shields and producing sanitizer and soap for hospitals and schools.',
    programs: ['Digital fabrication', 'COVID-19 response'],
  },
  {
    y: '2021',
    theme: 'A community of makers',
    goal: 'Grew a real community in Baghdad: hundreds of young people trained in digital fabrication, a co-working floor for start-ups, and paid internships that fed local teams.',
    programs: ['Fabrication training', 'Co-working', 'Internships'],
  },
  {
    y: '2022',
    theme: 'Becoming Makers of Baghdad',
    goal: 'Rebranded from IoT Maker, launched the Climathon and our VR and PLC labs, and connected MakerSpaces across Iraq through the MakerHive network.',
    programs: ['Climathon', 'VR & PLC labs', 'MakerHive'],
  },
  {
    y: '2023',
    theme: 'From skills to jobs',
    goal: 'Shifted from teaching skills to placing people — structured job-readiness tracks that ended with graduates meeting real employers at a job fair.',
    programs: ['Masarat-1', 'Climathon'],
  },
  {
    y: '2024',
    theme: 'Programs, research, and a home for founders',
    goal: 'Scaled into acceleration and applied research, and opened the American Space for Entrepreneurship & Innovation inside our walls.',
    programs: ['American Space', 'Mahara', 'Masarat 2', 'AgriTech', 'FinTech mapping'],
  },
  {
    y: '2025',
    theme: 'Working at national scale',
    goal: 'Took our research, migration and employment programs country-wide — from skills mapping to national entrepreneurship weeks.',
    programs: ['Tawtheef', 'GEW 2025', 'Skills Mapping', 'Tech Pathways MENA', "Ta'zeez"],
  },
  {
    y: 'Now',
    theme: "Iraq's data-driven hub",
    goal: 'Backing entrepreneurs and youth across Iraq with capacity building, applied research, and the data that helps shape policy and practice.',
    programs: ['Mahara', 'DAP', 'Green Tech', 'Social Protection'],
  },
]

const STEP_PX = 320
const LAST = events.length - 1

// Auto-play timing
const DWELL_MS = 2800 // time each year rests on screen (reading time)
const GLIDE_MS = 800 // eased transition from one year to the next
const RESUME_MS = 1500 // idle time after a manual scroll before auto-play resumes

const sectionEl = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const subProgress = ref(0)

let rafId = 0
let pending = false

// --- Auto-play state -------------------------------------------------------
let reducedMotion = false
let autoActive = false
let autoRaf = 0
let autoIndex = 0
let phase: 'dwell' | 'glide' = 'dwell'
let phaseStart = 0
let glideFrom = 0
let glideTo = 0
let expectedY = 0 // scroll position auto-play last wrote; used to tell our scroll from the user's
let idleTimer: ReturnType<typeof setTimeout> | 0 = 0

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Shared crossfade for the year column and the info column (kept in sync).
function crossfadeStyle(i: number) {
  const active = i === activeIndex.value
  return {
    opacity: active ? 1 : 0,
    transform: active
      ? 'translateY(0)'
      : i < activeIndex.value
        ? 'translateY(-36px)'
        : 'translateY(36px)',
    pointerEvents: active ? 'auto' : 'none',
    transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
  } as Record<string, string | number>
}

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
  const idx = Math.min(LAST, Math.floor(pFull))
  activeIndex.value = idx
  subProgress.value = Math.max(0, Math.min(1, pFull - idx))
}

// Is the section currently pinned and filling the viewport?
function isEngaged() {
  const el = sectionEl.value
  if (!el) return false
  const r = el.getBoundingClientRect()
  const vh = window.innerHeight || 800
  return r.top <= 0 && r.bottom > vh + 1
}

// Window scroll position that centers a given milestone.
function targetForIndex(i: number) {
  const el = sectionEl.value
  if (!el) return 0
  const vh = window.innerHeight || 800
  const totalPinnedScroll = el.offsetHeight - vh
  const centerP = (i + 0.5) / events.length
  return el.offsetTop + centerP * totalPinnedScroll
}

function stopAuto() {
  autoActive = false
  if (autoRaf) {
    cancelAnimationFrame(autoRaf)
    autoRaf = 0
  }
}

function startAuto() {
  if (autoActive || reducedMotion) return
  if (!isEngaged() || activeIndex.value >= LAST) return
  if (idleTimer) {
    clearTimeout(idleTimer)
    idleTimer = 0
  }
  autoActive = true
  autoIndex = activeIndex.value
  expectedY = window.scrollY
  phase = 'dwell'
  phaseStart = performance.now()
  autoRaf = requestAnimationFrame(autoTick)
}

function autoTick(now: number) {
  if (!autoActive) return

  if (phase === 'dwell') {
    if (now - phaseStart >= DWELL_MS) {
      const next = autoIndex + 1
      if (next > LAST) {
        stopAuto() // rest on "Now"
        return
      }
      glideFrom = window.scrollY
      glideTo = targetForIndex(next)
      phase = 'glide'
      phaseStart = now
    }
  } else {
    const t = Math.min(1, (now - phaseStart) / GLIDE_MS)
    const y = glideFrom + (glideTo - glideFrom) * easeInOutCubic(t)
    expectedY = y
    window.scrollTo({ top: y, left: 0, behavior: 'auto' })
    if (t >= 1) {
      autoIndex += 1
      phase = 'dwell'
      phaseStart = now
    }
  }

  autoRaf = requestAnimationFrame(autoTick)
}

// A manual scroll takes over: cancel auto-play, and queue a resume once idle.
function handleUserScroll() {
  if (autoActive) stopAuto()
  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(onIdle, RESUME_MS)
}

function onIdle() {
  idleTimer = 0
  if (reducedMotion) return
  if (isEngaged() && activeIndex.value < LAST) startAuto()
}

function onScroll() {
  scheduleUpdate()
  if (autoActive) {
    // Ignore auto-play's own scrolling; only real user input differs from expectedY.
    if (Math.abs(window.scrollY - expectedY) > 2) handleUserScroll()
  } else {
    handleUserScroll()
  }
}

onMounted(() => {
  reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
  // If we load already inside the section, begin after the usual idle beat.
  if (!reducedMotion && isEngaged()) {
    idleTimer = setTimeout(onIdle, RESUME_MS)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', scheduleUpdate)
  if (rafId) cancelAnimationFrame(rafId)
  if (autoRaf) cancelAnimationFrame(autoRaf)
  if (idleTimer) clearTimeout(idleTimer)
})
</script>

<template>
  <section
    ref="sectionEl"
    class="relative bg-zinc-50"
    :style="{ height: `calc(100vh + ${events.length * STEP_PX}px)` }"
  >
    <div class="sticky top-0 h-screen overflow-hidden">
      <div class="container-m h-full flex flex-col justify-center gap-8 lg:gap-16 py-10 lg:py-[60px]">
        <!-- Header -->
        <div>
          <div class="eyebrow">Who We Are</div>
          <h2 class="h-section">A data-driven hub<br />empowering Iraq's entrepreneurs.</h2>
        </div>

        <!-- Active milestone -->
        <div>
          <div class="w-full flex flex-col lg:flex-row items-start lg:justify-between gap-6 lg:gap-16">
            <!-- Left group: year + description sit close together -->
            <div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-8 md:gap-14 w-full lg:flex-1 min-w-0">
              <!-- Year (crossfading) -->
              <div class="grid grid-cols-1 shrink-0">
                <div
                  v-for="(e, i) in events"
                  :key="'y' + i"
                  class="col-start-1 row-start-1 font-bold text-zinc-950"
                  style="font-size: clamp(64px, 12vw, 176px); line-height: 0.92; letter-spacing: -0.03em;"
                  :style="crossfadeStyle(i)"
                >
                  {{ e.y }}
                </div>
              </div>

              <!-- Description (crossfading) -->
              <div class="grid grid-cols-1 min-w-0 pt-2">
                <div
                  v-for="(e, i) in events"
                  :key="'d' + i"
                  class="col-start-1 row-start-1 flex flex-col gap-3 max-w-[44ch]"
                  :style="crossfadeStyle(i)"
                >
                  <div class="body-lg font-bold text-zinc-900">{{ e.theme }}</div>
                  <p class="body-r text-zinc-600">{{ e.goal }}</p>
                  <div v-if="e.programs?.length" class="flex flex-wrap gap-2 pt-1">
                    <span
                      v-for="p in e.programs"
                      :key="p"
                      class="mono text-[11px] leading-none tracking-tight text-zinc-600 border border-zinc-300 rounded-full px-3 py-1.5 whitespace-nowrap"
                    >
                      {{ p }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop: persistent vertical progress rail, pushed to the far right.
                 self-stretch makes it span the left column's height, so its centre
                 lines up with the centre of the year + description block. -->
            <div class="hidden lg:flex shrink-0 relative flex-col items-center self-stretch justify-center">
              <div class="mono text-zinc-500 tabular-nums text-[11px] absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap">
                {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(events.length).padStart(2, '0') }}
              </div>
              <div class="flex flex-col gap-2 h-full max-h-[440px] w-[6px]">
                <div
                  v-for="(_, j) in events"
                  :key="j"
                  class="w-full flex-1 rounded-full relative overflow-hidden transition-colors duration-300"
                  :class="j < activeIndex ? 'bg-[var(--orange)]' : 'bg-zinc-200'"
                >
                  <div
                    v-if="j === activeIndex"
                    class="absolute inset-x-0 top-0 bg-[var(--orange)] rounded-full"
                    :style="{ height: (subProgress * 100) + '%' }"
                  />
                </div>
              </div>
            </div>

            <!-- Mobile: horizontal progress bar -->
            <div class="flex lg:hidden w-full items-center gap-4 mt-2">
              <div class="mono text-zinc-500 shrink-0 tabular-nums text-[11px]">
                {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(events.length).padStart(2, '0') }}
              </div>
              <div class="flex-1 flex gap-1.5">
                <div
                  v-for="(_, j) in events"
                  :key="'m' + j"
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