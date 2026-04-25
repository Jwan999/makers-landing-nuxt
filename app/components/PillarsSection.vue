<script setup lang="ts">
const PILLARS = [
  {
    id: 'employment',
    title: 'Employment',
    desc: "Creating sustainable and inclusive job opportunities for youth, with a strong focus on skills development and the digital economy. We boost youth employability by connecting young talent with the private sector, government, and international partners.",
  },
  {
    id: 'sme',
    title: 'Businesses & SMEs',
    desc: "Strengthening Iraq's entrepreneurial ecosystem by supporting innovation, fostering local production, and enabling sustainable business growth. Mentorship, acceleration, and technical support in business development, financial systems, and legal frameworks.",
  },
  {
    id: 'research',
    title: 'Research',
    desc: "Producing data-driven studies and sector-mapping reports that guide policymakers and program designers. Our research informs policy and practice across Iraq's economic landscape.",
  },
]

const STEP_PX = 420

const sectionEl = ref<HTMLElement | null>(null)
const orbitEl = ref<HTMLElement | null>(null)
const orbitSize = ref(460)
const activeIndex = ref(0)

const ANGLES_DEG = [-90, -15, -165]
const R = computed(() => orbitSize.value * 0.36)

const positions = computed(() =>
  PILLARS.map((_, i) => {
    const a = ((ANGLES_DEG[i] ?? 0) * Math.PI) / 180
    return {
      x: Math.cos(a) * R.value,
      y: Math.sin(a) * R.value,
    }
  })
)

let rafPending = false
let rafId = 0
let resizeObs: ResizeObserver | null = null

function scheduleUpdate() {
  if (rafPending) return
  rafPending = true
  rafId = requestAnimationFrame(() => {
    rafPending = false
    update()
  })
}

function update() {
  const el = sectionEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || 800
  const totalPinned = rect.height - vh
  const scrolled = Math.max(0, -rect.top)
  const p = totalPinned > 0 ? Math.min(1, scrolled / totalPinned) : 0
  activeIndex.value = Math.min(PILLARS.length - 1, Math.floor(p * PILLARS.length))
}

onMounted(() => {
  const el = orbitEl.value
  if (el) {
    orbitSize.value = el.clientWidth
    resizeObs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        orbitSize.value = entry.contentRect.width
      }
    })
    resizeObs.observe(el)
  }
  update()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', scheduleUpdate)
  if (rafId) cancelAnimationFrame(rafId)
  resizeObs?.disconnect()
})
</script>

<template>
  <section
    id="pillars"
    ref="sectionEl"
    class="pillars-section bg-zinc-950 text-white relative"
    :style="{ '--pinned-height': `calc(100vh + ${PILLARS.length * STEP_PX}px)` }"
  >
    <div class="pillars-inner">
      <div class="container-m w-full">
        <div class="text-center mb-8 lg:mb-6">
          <div class="eyebrow centered">What We Do</div>
          <h2 class="h-section text-white">Three pillars.<br />One foundation.</h2>
        </div>

        <!-- Desktop: orbit-based layout -->
        <div
          ref="orbitEl"
          class="relative mx-auto hidden lg:block"
          style="width: min(460px, 54vh, 88vw); aspect-ratio: 1;"
        >
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-800"
            :style="{
              width: (R * 2) + 'px',
              height: (R * 2) + 'px',
              clipPath: 'inset(0 0 50% 0)',
            }"
          />

          <!-- Center logo + mark -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <MakersMark :size="Math.round(orbitSize * 0.14)" color="#ffffff" class="mx-auto" />
            <div class="mono text-zinc-500 mt-[10px]">MAKERS</div>
          </div>

          <!-- Pillar cards -->
          <div
            v-for="(p, i) in PILLARS"
            :key="p.id"
            class="absolute top-1/2 left-1/2 p-3 rounded-2xl border text-center"
            :class="activeIndex === i ? 'bg-[var(--orange)] border-[var(--orange)] text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-100'"
            :style="{
              width: Math.round(orbitSize * 0.38) + 'px',
              transform: `translate(calc(-50% + ${positions[i].x}px), calc(-50% + ${positions[i].y}px))`,
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }"
          >
            <div class="mono mb-1" :class="activeIndex === i ? 'text-white/70' : 'text-zinc-500'">
              0{{ i + 1 }}
            </div>
            <div class="text-[17px] font-bold whitespace-nowrap">{{ p.title }}</div>
          </div>

          <!-- Description (crossfading stack at the bottom of the orbit) -->
          <div
            class="absolute left-1/2 -translate-x-1/2 px-4"
            style="bottom: 10%; width: min(640px, 92vw);"
          >
            <div class="grid grid-cols-1">
              <p
                v-for="(p, i) in PILLARS"
                :key="p.id"
                class="col-start-1 row-start-1 body-r text-zinc-400 text-justify transition-opacity duration-300"
                :style="{ opacity: activeIndex === i ? 1 : 0 }"
              >
                {{ p.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile: vertical stacked cards -->
        <div class="grid gap-4 lg:hidden">
          <Reveal
            v-for="(p, i) in PILLARS"
            :key="p.id"
            as="div"
            :delay="i * 100"
            class="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="mono text-[var(--orange)]">0{{ i + 1 }}</div>
              <div class="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 class="text-[22px] font-bold mb-3">{{ p.title }}</h3>
            <p class="body-r text-zinc-400">{{ p.desc }}</p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Mobile: section flows naturally, no pinning */
.pillars-section {
  padding: 96px 0;
}
.pillars-inner {
  display: flex;
  align-items: center;
}

/* Desktop: pinned scroll reveal of orbit pillars */
@media (min-width: 1024px) {
  .pillars-section {
    height: var(--pinned-height);
    padding: 0;
  }
  .pillars-inner {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
}
</style>
