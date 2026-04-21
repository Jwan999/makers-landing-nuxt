<script setup lang="ts">
const events = [
  { y: '2017', l: 'Founded as IoT Maker' },
  { y: '2019', l: 'First GIZ partnership' },
  { y: '2020', l: 'Grew co-working + training facilities' },
  { y: '2022', l: 'Rebranded to Makers of Baghdad' },
  { y: '2023', l: 'Launched Makers Suite' },
  { y: 'Now',  l: "Iraq's data-driven hub" },
]
</script>

<template>
  <section class="bg-zinc-50 py-[120px] overflow-hidden">
    <div class="container-m">
      <div class="flex justify-between items-end mb-[60px] flex-wrap gap-6">
        <div>
          <div class="eyebrow">Who We Are</div>
          <h2 class="h-section">A data-driven hub<br />empowering Iraq's<br />entrepreneurs.</h2>
        </div>
        <p class="body-lg text-zinc-600 max-w-[46ch]">
          Makers is a data-driven hub empowering entrepreneurs and SME owners across Iraq — backed by GIZ, USAID, ILO, IOM, and other international partners.
        </p>
      </div>

      <!-- Timeline rail -->
      <div class="relative pt-[60px]">
        <div class="absolute left-0 right-0 h-[2px] bg-zinc-200" style="top: calc(60px + 11px);" />
        <div class="grid gap-4" :style="{ gridTemplateColumns: `repeat(${events.length}, 1fr)` }">
          <div v-for="(e, i) in events" :key="i" class="relative">
            <div
              class="absolute left-0 text-[22px] font-bold"
              :class="i === events.length - 1 ? 'text-[var(--orange)]' : 'text-zinc-900'"
              style="top: -50px;"
            >
              {{ e.y }}
            </div>
            <div
              class="w-6 h-6 rounded-full relative z-10"
              :class="i === events.length - 1 ? 'bg-[var(--orange)] border-2 border-[var(--orange)]' : 'bg-white border-2 border-zinc-300'"
            />
            <div class="mt-4 text-sm text-zinc-600 leading-snug max-w-[14ch]">{{ e.l }}</div>
          </div>
        </div>
      </div>

      <div class="mt-[60px] text-center">
        <NuxtLink
          to="/about"
          class="inline-flex items-center gap-[10px] px-6 py-[14px] bg-zinc-900 text-white rounded-full font-semibold"
        >
          Learn More About Us
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </NuxtLink>
        <div class="mono text-zinc-400 mt-3">/about · coming soon</div>
      </div>
    </div>
  </section>
</template>