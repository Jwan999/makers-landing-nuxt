<script setup lang="ts">
const stats = [
  { n: '50,000+', l: 'Visitors',       size: 'xl', pos: { top: '22%', left: '8%'  } },
  { n: '15,000+', l: 'Beneficiaries',  size: 'lg', pos: { top: '18%', right: '10%' } },
  { n: '2,000+',  l: 'Jobs Created',   size: 'lg', pos: { top: '60%', left: '12%' } },
  { n: '200+',    l: 'SMEs Supported', size: 'xl', pos: { top: '64%', right: '8%'  } },
]

const chipClass = (size: string) =>
  size === 'xl'
    ? 'px-[26px] py-[22px] [--num-size:64px] [--lab-size:12px]'
    : 'px-[22px] py-[18px] [--num-size:52px] [--lab-size:11px]'
</script>

<template>
  <section class="relative min-h-screen bg-zinc-50 text-zinc-950 flex items-center overflow-hidden py-[120px]">
    <!-- Concentric orbit rings -->
    <div aria-hidden class="pointer-events-none absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-zinc-200" style="width: min(86vw, 1080px);" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-zinc-300" style="width: min(58vw, 740px);" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-zinc-200" style="width: min(34vw, 440px);" />
    </div>

    <!-- Orbiting stat chips (hidden on small screens) -->
    <div class="hero-orbit-chips absolute inset-0 z-[2] hidden lg:block">
      <div
        v-for="(s, i) in stats"
        :key="i"
        :class="['absolute bg-zinc-950 text-white rounded-[18px] flex flex-col gap-1 min-w-max', chipClass(s.size)]"
        :style="{
          top: s.pos.top,
          left: s.pos.left,
          right: s.pos.right,
          boxShadow: '0 6px 0 rgba(0,0,0,0.2), 0 18px 40px rgba(0,0,0,0.25)',
        }"
      >
        <div class="font-bold leading-[0.95] tracking-[-0.02em] text-[var(--orange)]" :style="{ fontSize: 'var(--num-size)' }">
          {{ s.n }}
        </div>
        <div class="mono text-zinc-400" :style="{ fontSize: 'var(--lab-size)', letterSpacing: '0.14em' }">{{ s.l }}</div>
      </div>
    </div>

    <!-- Center column -->
    <div class="container-m relative z-[3]">
      <div class="max-w-[820px] mx-auto text-center">
        <div class="mono mb-6 text-[var(--orange)]">— BAGHDAD'S DATA-DRIVEN HUB · SINCE 2017 —</div>
        <h1 class="font-bold text-zinc-950 leading-[1.05]" style="font-size: clamp(40px, 5.6vw, 76px); letter-spacing: -0.03em;">
          Empowering entrepreneurs and SME owners<br />
          across
          <span class="bg-zinc-950 text-[var(--orange)] rounded-[10px] px-[14px] inline-block">Iraq.</span>
        </h1>
        <p class="body-lg text-zinc-600 mt-6 max-w-[60ch] mx-auto">
          Through capacity building, applied research, and ecosystem development — boosting youth employability and creating jobs by connecting talent with the private sector, government, and international partners.
        </p>
        <div class="flex gap-3 justify-center mt-9 flex-wrap">
          <a
            href="#pillars"
            class="inline-flex items-center gap-[10px] rounded-full px-8 py-4 bg-[var(--orange)] text-white font-semibold text-base"
            style="box-shadow: 0 4px 0 var(--orange-600);"
          >
            Explore What We Do
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center rounded-full px-8 py-4 bg-white text-zinc-950 font-semibold text-base border border-zinc-300"
            style="box-shadow: 0 4px 0 rgba(0,0,0,0.06);"
          >
            Get In Touch
          </a>
        </div>

        <!-- Mobile fallback grid -->
        <div class="hero-orbit-grid mt-11 grid gap-3 lg:hidden" :style="{ gridTemplateColumns: 'repeat(4, 1fr)' }">
          <div v-for="(s, i) in stats" :key="i" class="bg-zinc-950 text-white rounded-xl p-3 text-left">
            <div class="font-bold text-[var(--orange)] text-[28px] leading-none">{{ s.n }}</div>
            <div class="mono text-zinc-400 mt-1" style="font-size: 9.5px;">{{ s.l }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 520px) {
  .hero-orbit-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
</style>