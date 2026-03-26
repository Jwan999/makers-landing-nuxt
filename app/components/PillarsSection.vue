<script setup lang="ts">
const pillars = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    title: 'Training Bootcamps',
    desc: 'Intensive programs in web dev, mobile, UI/UX, and more. We don\'t lecture — we build together.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    title: 'Internships',
    desc: 'Real projects, real deadlines. Interns work alongside our dev team on products that ship.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    title: 'Co-Working',
    desc: 'Desks, wifi, coffee, community. A place for freelancers, startups, and remote workers in Baghdad.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    title: 'Product Development',
    desc: 'A small but sharp dev team building tech tools for the Iraqi market. Tawtheef is our flagship.',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    title: 'Maker Space',
    desc: 'Modest but functional. A hands-on space for prototyping, tinkering, and turning ideas into objects.',
  },
]
</script>

<template>
  <section id="pillars" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-orange-700 font-semibold text-lg mb-3">What We Do</p>
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">Five Things, Done Well</h2>
        <p class="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
          We're not trying to be everything. Here's what we actually do — and what we're good at.
        </p>
      </div>

      <!-- Pillar Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          :class="i === 3 ? 'lg:col-span-1 md:col-span-1' : ''"
        >
          <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-700 mb-5 group-hover:bg-orange-700 group-hover:text-white transition-colors duration-300" v-html="pillar.icon" />
          <h3 class="text-xl font-bold text-zinc-800 mb-3">{{ pillar.title }}</h3>
          <p class="text-zinc-500 text-[17px] leading-relaxed">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>