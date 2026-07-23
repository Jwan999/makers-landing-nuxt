<script setup lang="ts">
const STATS = [
  { n: '50,000+', l: 'Visitors' },
  { n: '15,000+', l: 'Beneficiaries' },
  { n: '200+',    l: 'Training Sessions' },
  { n: '140+',    l: 'Products Built' },
  { n: '200+',    l: 'SMEs Supported' },
  { n: '2,000+',  l: 'Jobs Created' },
  { n: '49%',     l: 'Female Participants' },
  { n: '6+',      l: 'Years Running' },
]

const idx = ref(0)
const current = computed(() => STATS[idx.value])
let timer: ReturnType<typeof setInterval> | null = null

const { el: parallaxEl, offset: parallaxOffset } = useParallax(0.15)

onMounted(() => {
  timer = setInterval(() => {
    idx.value = (idx.value + 1) % STATS.length
  }, 2800)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section
    id="impact"
    class="relative overflow-hidden flex items-center py-20 lg:py-[120px] text-white"
    style="background: var(--orange); min-height: 80vh;"
  >
    <div ref="parallaxEl" class="container-m relative w-full">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
        <!-- Number (left) -->
        <div
          class="text-white whitespace-nowrap shrink-0"
          :style="{
            fontSize: 'clamp(60px, 15vw, 240px)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            fontWeight: 500,
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform',
          }"
        >
          {{ current.n }}
        </div>

        <!-- Info + progress (right) -->
        <div class="flex items-start gap-8 md:gap-12 shrink-0">
          <div class="flex flex-col gap-4">
            <div class="mono text-white/70">
              BY THE NUMBERS {{ String(idx + 1).padStart(2, '0') }}/{{ String(STATS.length).padStart(2, '0') }}
            </div>
            <div
              class="font-bold"
              style="font-size: clamp(26px, 2.6vw, 38px); color: rgba(255,255,255,0.95);"
            >
              {{ current.l }}
            </div>
          </div>

          <!-- Progress dots — horizontal on mobile, vertical on desktop -->
          <div class="flex flex-row lg:flex-col gap-2.5 pt-2 lg:pt-1.5 shrink-0">
            <button
              v-for="(_, i) in STATS"
              :key="i"
              type="button"
              class="rounded-full transition-all duration-200"
              :class="i === idx ? 'w-8 h-2 lg:w-2 lg:h-8 bg-white' : 'w-2 h-2 bg-white/40'"
              :aria-label="`Show stat ${i + 1}`"
              @click="idx = i"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>