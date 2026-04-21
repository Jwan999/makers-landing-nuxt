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

const R = 220
const hover = ref<number | null>(null)

const positions = computed(() =>
  PILLARS.map((_, i) => {
    const a = (i / PILLARS.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: Math.cos(a) * R,
      y: Math.sin(a) * R,
    }
  })
)
</script>

<template>
  <section id="pillars" class="bg-zinc-950 text-white py-[140px] relative overflow-hidden">
    <div class="container-m">
      <div class="text-center mb-10">
        <div class="eyebrow centered">What We Do</div>
        <h2 class="h-section text-white">Five pillars.<br />One foundation.</h2>
      </div>

      <div
        class="relative mx-auto mt-[60px]"
        :style="{ width: R * 2 + 180 + 'px', height: R * 2 + 180 + 'px', maxWidth: '100%' }"
      >
        <div class="absolute inset-0 rounded-full border border-dashed border-zinc-800" />

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <MakersMark :size="90" color="#E26701" class="mx-auto" />
          <div class="mono text-zinc-500 mt-[10px]">MAKERS</div>
        </div>

        <div
          v-for="(p, i) in PILLARS"
          :key="p.id"
          class="absolute top-1/2 left-1/2 w-[180px] p-4 rounded-2xl border text-center cursor-pointer"
          :class="hover === i ? 'bg-[var(--orange)] border-[var(--orange)] text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-100'"
          :style="{
            transform: `translate(calc(-50% + ${positions[i].x}px), calc(-50% + ${positions[i].y}px))`,
            transition: 'all 0.25s var(--ease-out)',
          }"
          @mouseenter="hover = i"
          @mouseleave="hover = null"
        >
          <div class="mono mb-2" :class="hover === i ? 'text-white/70' : 'text-zinc-500'">
            0{{ i + 1 }}
          </div>
          <div class="text-base font-bold">{{ p.title }}</div>
        </div>
      </div>

      <div class="max-w-[560px] mx-auto mt-[60px] min-h-[60px] text-center">
        <p class="body-lg text-zinc-400">
          {{ hover !== null ? PILLARS[hover].desc : 'Hover a pillar to learn more.' }}
        </p>
      </div>
    </div>
  </section>
</template>