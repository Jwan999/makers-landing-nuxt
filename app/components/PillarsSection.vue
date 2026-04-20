<script setup lang="ts">
const pillars = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    title: 'Employment',
    desc: 'Creating sustainable and inclusive job opportunities for youth, with a strong focus on skills development and the digital economy. We connect young talent with the private sector, government, and international partners through targeted initiatives and national events.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    title: 'Businesses & SMEs',
    desc: 'Strengthening Iraq\'s entrepreneurial ecosystem by supporting innovation, fostering local production, and enabling sustainable business growth. We provide mentorship, acceleration, and technical support in business development, financial systems, and legal frameworks.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    title: 'Research',
    desc: 'Producing data-driven studies and sector-mapping reports that guide policymakers in creating effective solutions. Our research informs policy and practice across Iraq\'s economic landscape, from fintech mapping to skills gap analysis.',
  },
]
</script>

<template>
  <section id="pillars" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-orange-700 font-semibold text-lg mb-3">What We Do</p>
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">Three Pillars of Impact</h2>
        <p class="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
          Empowering Iraq's future through employment, business development, and data-driven research.
        </p>
      </div>

      <!-- Pillar Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
        >
          <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-700 mb-5 group-hover:bg-orange-700 group-hover:text-white transition-colors duration-300" v-html="pillar.icon" />
          <h3 class="text-xl font-bold text-zinc-800 mb-3">{{ pillar.title }}</h3>
          <p class="text-zinc-500 text-[17px] leading-relaxed">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>