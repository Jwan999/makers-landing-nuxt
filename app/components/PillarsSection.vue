<script setup lang="ts">
const PILLARS = [
  {
    id: 'employment',
    title: 'Employment',
    desc: "Creating sustainable and inclusive job opportunities for youth, with a strong focus on skills development and the digital economy. We boost youth employability by connecting young talent with the private sector and government.",
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

const sectionEl = ref<HTMLElement | null>(null)
const progress = ref(0) // 0..1 through the pinned scroll
const viewportW = ref(1280)

let rafPending = false
let rafId = 0

// How far the horizontal track has panned, in px.
const trackX = computed(() => -(progress.value * (PILLARS.length - 1) * viewportW.value))

// Which pillar is currently front-and-center (for the numbering / dots).
const activeIndex = computed(() =>
  Math.min(PILLARS.length - 1, Math.round(progress.value * (PILLARS.length - 1)))
)

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
  progress.value = totalPinned > 0 ? Math.min(1, Math.max(0, scrolled / totalPinned)) : 0
}

function onResize() {
  viewportW.value = window.innerWidth || 1280
  scheduleUpdate()
}

onMounted(() => {
  viewportW.value = window.innerWidth || 1280
  update()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', onResize)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section
    id="pillars"
    ref="sectionEl"
    class="pillars-section bg-zinc-950 text-white relative"
    :style="{ '--pinned-height': `calc(100vh + ${(PILLARS.length - 1) * 120}vw)` }"
  >
    <!-- Pinned horizontal pan through the pillars (all breakpoints) -->
    <div class="pillars-inner">
      <div
        class="pillars-track"
        :style="{ transform: `translate3d(${trackX}px, 0, 0)` }"
      >
        <article v-for="(p, i) in PILLARS" :key="p.id" class="pillars-panel">
          <div class="pillars-panel-content">
            <div class="mono text-[var(--orange)] mb-6 lg:mb-8">
              0{{ i + 1 }} <span class="text-zinc-600">/ 0{{ PILLARS.length }}</span>
            </div>
            <h2 class="pillar-title">{{ p.title }}</h2>
            <p class="pillar-desc body-r text-zinc-400">{{ p.desc }}</p>
          </div>
        </article>
      </div>

      <!-- Progress dots -->
      <div class="pillars-dots">
        <span
          v-for="(p, i) in PILLARS"
          :key="p.id"
          class="pillars-dot"
          :class="i === activeIndex ? 'is-active' : ''"
        />
      </div>

      <!-- Section title, pinned to the bottom-right -->
      <div class="pillars-title-corner">
        <span class="mono pillars-corner-kicker">What We Do</span>
        <h2 class="pillars-corner-title">The Pillars of Makers</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Pinned horizontal pan — applies at every breakpoint so the scroll effect
   is kept on mobile too. */
.pillars-section {
  padding: 0;
  height: var(--pinned-height);
}
.pillars-inner {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}
.pillars-track {
  display: flex;
  height: 100%;
  will-change: transform;
}
.pillars-panel {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.pillars-panel-content {
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: clamp(88px, 15vh, 190px) var(--gutter) 0;
}

.pillar-title {
  font-family: inherit;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.94;
  font-size: clamp(40px, 11vw, 168px);
  color: #fff;
}
.pillar-desc {
  margin-top: clamp(16px, 3vh, 40px);
  max-width: 52ch;
}

/* Progress dots — bottom-left so they never collide with the bottom-right title */
.pillars-dots {
  position: absolute;
  left: var(--gutter);
  bottom: clamp(24px, 6vh, 64px);
  display: flex;
  gap: 10px;
}
.pillars-dot {
  width: 22px;
  height: 4px;
  border-radius: 999px;
  background: #3f3f46; /* zinc-700 */
  transition: background-color 0.3s ease, width 0.3s ease;
}
.pillars-dot.is-active {
  background: var(--orange);
  width: 38px;
}

/* Section title, pinned bottom-right */
.pillars-title-corner {
  position: absolute;
  right: var(--gutter);
  bottom: clamp(24px, 6vh, 64px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  text-align: right;
  pointer-events: none;
}
.pillars-corner-kicker {
  color: var(--orange);
}
.pillars-corner-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  font-size: clamp(18px, 5vw, 40px);
  color: #fff;
  max-width: 12ch;
}

@media (min-width: 1024px) {
  .pillars-dots { gap: 10px; }
  .pillars-corner-title { font-size: clamp(22px, 2.4vw, 40px); max-width: 14ch; }
}
</style>