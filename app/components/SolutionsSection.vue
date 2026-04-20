<script setup lang="ts">
const solutions = [
  {
    title: 'Tawtheef',
    desc: 'Advanced digital employment platform with ATS-compliant CV builder, intelligent matching tools, and a searchable talent database for Iraq\'s tech sector.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    title: 'Contract Generator',
    desc: 'Generates contracts and creates templates, streamlining the contracting process for businesses and contractors.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  },
  {
    title: 'Presentation Maker',
    desc: 'Tool for creating professional presentations quickly and efficiently.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21l5-5 5 5M3 4h18M4 4v12a2 2 0 002 2h12a2 2 0 002-2V4"/></svg>`,
  },
  {
    title: 'Judging Panel',
    desc: 'Digital judging system for competitions, hackathons, and evaluation events.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  },
  {
    title: 'Loan Eligibility Checker',
    desc: 'Helps businesses check their eligibility for loans from Iraqi government initiatives.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
  {
    title: 'Reports System',
    desc: 'Generates structured reports from user-entered data, automating documentation and analysis.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  },
]
</script>

<template>
  <section id="solutions" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-700 font-semibold text-lg mb-3">Makers Suite</p>
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">Built by Makers</h2>
        <p class="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
          Our suite of tech products — from employment platforms to automated reporting. If you need something custom, let's talk.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-700 mb-5 group-hover:bg-orange-700 group-hover:text-white transition-colors duration-300"
            v-html="solution.icon"
          />
          <h3 class="text-xl font-bold text-zinc-800 mb-3">{{ solution.title }}</h3>
          <p class="text-zinc-500 text-[17px] leading-relaxed">{{ solution.desc }}</p>
        </div>
      </div>

      <div class="text-center mt-12">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-3 bg-orange-700 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
        >
          Need a custom solution? Let's build it together
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>