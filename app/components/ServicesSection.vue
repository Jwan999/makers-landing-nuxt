<script setup lang="ts">
const services = [
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    title: 'Training Halls',
    desc: 'Fully equipped training facilities for intensive bootcamps, workshops, and capacity building sessions in web development, design, robotics, AI, and more.',
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    title: 'Curriculum Development',
    desc: 'Custom curriculum design for IT, entrepreneurship, and digital skills training. Developed for organizations including WFP, US Embassy, and ministry-level clients.',
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    title: 'Co-Working Spaces',
    desc: 'Collaborative workspaces for businesses, SMEs, and remote workers in Baghdad. High-speed WiFi, workstations, and a community-driven environment.',
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    title: 'Financial Understanding',
    desc: 'Financial education and business development support — including SYIB training, financial management, and connection to loan facilities.',
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
    title: 'Investment Readiness',
    desc: 'Preparing businesses and SMEs to be investment-ready through due diligence support, data room establishment, mentorship, and positioning for funding opportunities.',
  },
]
</script>

<template>
  <section id="services" class="py-24 bg-zinc-900">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-400 font-semibold text-lg mb-3">Our Services</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">What We Offer</h2>
        <p class="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
          From training halls to investment readiness — we provide the infrastructure and expertise to grow Iraq's businesses and workforce.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-8 hover:border-orange-700/50 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-orange-400 mb-5 group-hover:bg-orange-700 group-hover:text-white transition-colors duration-300"
            v-html="service.icon"
          />
          <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
          <p class="text-zinc-400 text-[17px] leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>