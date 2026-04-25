<script setup lang="ts">
const stats = [
  { n: '50,000+', l: 'Visitors',       size: 'xl', pos: { top: '26%', left: '8%'  } },
  { n: '15,000+', l: 'Beneficiaries',  size: 'lg', pos: { top: '18%', left: '28%' } },
  { n: '2,000+',  l: 'Jobs Created',   size: 'lg', pos: { top: '18%', right: '28%' } },
  { n: '200+',    l: 'SMEs Supported', size: 'xl', pos: { top: '26%', right: '8%'  } },
]

const chipClass = (size: string) =>
  size === 'xl'
    ? 'px-[28px] py-[24px] [--num-size:56px] [--lab-size:15px]'
    : 'px-[24px] py-[20px] [--num-size:46px] [--lab-size:14px]'
</script>

<template>
  <section class="relative z-10 min-h-screen bg-zinc-50 text-zinc-950 flex items-center overflow-x-clip py-[120px]">
    <!-- Concentric orbit rings (decorative) -->
    <div aria-hidden class="pointer-events-none absolute inset-0 z-[1]">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-zinc-200" style="width: min(86vw, 1080px);" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-zinc-300" style="width: min(58vw, 740px);" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-zinc-200" style="width: min(34vw, 440px);" />
    </div>

    <!-- Chips placed along the upper orbit arcs -->
    <div class="hero-orbit-chips absolute inset-0 z-[2] hidden lg:block">
      <div
        v-for="(s, i) in stats"
        :key="i"
        :class="['stat-chip absolute bg-zinc-950 text-white rounded-[18px] flex flex-col gap-1 min-w-max', chipClass(s.size)]"
        :style="{
          top: s.pos.top,
          left: s.pos.left,
          right: s.pos.right,
          boxShadow: '0 6px 0 rgba(0,0,0,0.2), 0 18px 40px rgba(0,0,0,0.25)',
          animationDelay: `${500 + i * 380}ms`,
        }"
      >
        <div
          class="font-bold leading-[0.95] tracking-[-0.02em] text-[var(--orange)]"
          :style="{ fontSize: 'var(--num-size)' }"
        >
          {{ s.n }}
        </div>
        <div class="mono text-zinc-400" :style="{ fontSize: 'var(--lab-size)', letterSpacing: '0.14em' }">
          {{ s.l }}
        </div>
      </div>
    </div>

    <!-- Center column — shifted down to leave room for chips above -->
    <div class="container-m relative z-[3] w-full">
      <div class="max-w-[900px] mx-auto text-center pt-[18vh] lg:pt-[22vh]">
        <div class="mono mb-6 text-[var(--orange)]">— BAGHDAD'S DATA-DRIVEN HUB · SINCE 2017 —</div>
        <h1 class="font-bold text-zinc-950 leading-[1.05]" style="font-size: clamp(40px, 5.6vw, 76px); letter-spacing: -0.03em;">
          Empowering entrepreneurs and SME owners<br />
          across
          <span class="bg-zinc-950 text-[var(--orange)] rounded-[10px] px-[14px] inline-block">Iraq.</span>
        </h1>
        <div class="flex gap-3 justify-center mt-9 flex-wrap">
          <a
            href="#pillars"
            class="inline-flex items-center justify-center gap-[10px] rounded-full px-8 py-4 bg-[var(--orange)] text-white font-bold text-base leading-none"
          >
            <span>Explore What We Do</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
              <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full px-8 py-4 bg-white text-zinc-950 font-bold text-base border border-zinc-300 leading-none"
          >
            <span>Get In Touch</span>
          </a>
        </div>

        <!-- Mobile fallback: horizontal stat row below CTAs -->
        <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden">
          <div
            v-for="(s, i) in stats"
            :key="i"
            class="stat-chip bg-zinc-950 text-white rounded-xl p-3 text-left"
            :style="{ animationDelay: `${500 + i * 320}ms` }"
          >
            <div class="font-bold text-[var(--orange)] text-[30px] leading-none">{{ s.n }}</div>
            <div class="mono text-zinc-400 mt-1">{{ s.l }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-chip {
  opacity: 0;
  transform: translateY(14px) scale(0.96);
  animation: chip-in 1.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
@keyframes chip-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .stat-chip {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>