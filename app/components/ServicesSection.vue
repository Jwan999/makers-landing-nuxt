<script setup lang="ts">
const SERVICES = [
  {
    id: 'halls',
    title: 'Training Halls',
    desc: 'Fully equipped training facilities for intensive bootcamps, workshops, and capacity-building sessions in web development, design, robotics, AI, and more.',
  },
  {
    id: 'curriculum',
    title: 'Curriculum Development',
    desc: 'Custom curriculum design for IT, entrepreneurship, and digital skills — developed for WFP, US Embassy, and ministry-level clients.',
  },
  {
    id: 'cowork',
    title: 'Co-Working Spaces',
    desc: 'Collaborative workspaces for businesses, SMEs, and remote workers in Baghdad. High-speed WiFi, workstations, and a community-driven environment.',
  },
  {
    id: 'finance',
    title: 'Financial Understanding',
    desc: 'Financial education and business development support — including SYIB training, financial management, and connection to loan facilities.',
  },
  {
    id: 'investment',
    title: 'Investment Readiness',
    desc: 'Preparing businesses and SMEs to be investment-ready through due diligence support, data room establishment, mentorship, and positioning for funding.',
  },
]

const STEP_PX = 320

const sectionEl = ref<HTMLElement | null>(null)
const activeIndex = ref(0)

let rafPending = false
let rafId = 0

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
  activeIndex.value = Math.min(SERVICES.length - 1, Math.floor(p * SERVICES.length))
}

// Click a service to scroll it into focus.
function goTo(i: number) {
  const el = sectionEl.value
  if (!el) return
  const vh = window.innerHeight || 800
  const totalPinned = el.offsetHeight - vh
  const y = el.offsetTop + ((i + 0.5) / SERVICES.length) * totalPinned
  window.scrollTo({ top: y, behavior: 'smooth' })
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
    id="services"
    ref="sectionEl"
    class="services-section bg-zinc-950 text-white"
    :style="{ '--pinned-height': `calc(100vh + ${SERVICES.length * STEP_PX}px)` }"
  >
    <div class="services-inner">
      <div class="container-m w-full">
        <div class="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-20 lg:items-center">
          <!-- Header -->
          <div>
            <div class="eyebrow" style="color: var(--orange);">Our Services</div>
            <h2 class="h-section text-white">
              Five ways<br />to work with<br /><span class="text-[var(--orange)]">Makers.</span>
            </h2>
            <p class="body-lg text-zinc-400 mt-6 max-w-[42ch] hidden lg:block">
              Services offered at the space, grounded in our facilities, curriculum expertise, and years of cross-sector partnerships.
            </p>

            <!-- Progress -->
            <div class="mt-8 flex items-center gap-4">
              <span class="mono text-zinc-500 tabular-nums">
                {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(SERVICES.length).padStart(2, '0') }}
              </span>
              <div class="relative h-[2px] flex-1 max-w-[240px] bg-zinc-800">
                <div
                  class="absolute inset-y-0 left-0 bg-[var(--orange)] transition-[width] duration-300"
                  :style="{ width: ((activeIndex + 1) / SERVICES.length) * 100 + '%' }"
                />
              </div>
            </div>
          </div>

          <!-- Services list (scroll-driven accordion) -->
          <div class="flex flex-col border-b border-zinc-800">
            <button
              v-for="(s, i) in SERVICES"
              :key="s.id"
              type="button"
              class="services-item text-left border-t border-zinc-800 py-5"
              :class="i === activeIndex ? 'is-active' : ''"
              @click="goTo(i)"
            >
              <div class="flex items-baseline gap-5">
                <span
                  class="mono text-[17px] transition-colors"
                  :class="i === activeIndex ? 'text-[var(--orange)]' : 'text-zinc-600'"
                >
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <h3
                  class="font-bold leading-tight transition-colors"
                  :class="i === activeIndex ? 'text-white' : 'text-zinc-500'"
                  style="font-size: clamp(24px, 3vw, 34px); letter-spacing: -0.01em;"
                >
                  {{ s.title }}
                </h3>
              </div>
              <div
                class="services-desc"
                :style="{ maxHeight: i === activeIndex ? '180px' : '0px', opacity: i === activeIndex ? 1 : 0 }"
              >
                <p class="body-r text-zinc-400 pt-3 pl-[40px] max-w-[52ch]">{{ s.desc }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  height: var(--pinned-height);
}
.services-inner {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.services-desc {
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .services-desc {
    transition: none;
  }
}
</style>
