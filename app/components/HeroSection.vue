<script setup lang="ts">
const stats = [
  { number: '50,000+', label: 'Visitors' },
  { number: '15,000+', label: 'Beneficiaries' },
  { number: '2,000+', label: 'Jobs Created' },
  { number: '200+', label: 'SMEs Supported' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center bg-zinc-900 overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-700/10 animate-bubble"
        style="animation-delay: 0.2s"
      />
      <div
        class="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full bg-orange-700/5 animate-bubble"
        style="animation-delay: 0.5s"
      />
      <div
        class="absolute bottom-32 right-1/4 w-[150px] h-[150px] rounded-full bg-orange-700/8 animate-float"
      />
      <div class="absolute top-1/3 right-1/3 w-24 h-24 rounded-full border-2 border-orange-700/20 animate-ring-pulse" />
    </div>

    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl relative z-10 pt-24">
      <div class="max-w-3xl">
        <!-- Tagline -->
        <p class="text-orange-400 text-lg font-semibold mb-4 animate-fade-in-up animate-fade-in-up-1">
          Baghdad's Data-Driven Hub
        </p>

        <!-- Main Headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animate-fade-in-up-2">
          Empowering
          <span class="animate-shimmer">Businesses</span>
          Across Iraq
        </h1>

        <!-- Sub copy -->
        <p class="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 animate-fade-in-up animate-fade-in-up-3" style="line-height: 1.7;">
          We boost youth employability and create job opportunities by connecting talent with the private sector, government, and international partners.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4 mb-16 animate-fade-in-up animate-fade-in-up-4">
          <a
            href="#pillars"
            class="px-10 py-3 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full text-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Explore What We Do
          </a>
          <a
            href="#contact"
            class="px-10 py-3 bg-transparent border border-zinc-600 text-zinc-300 rounded-full text-lg font-semibold hover:border-zinc-400 hover:text-white transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:flex gap-8 md:gap-12 animate-fade-in-up animate-fade-in-up-5">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-3xl md:text-4xl font-extrabold text-orange-400">{{ stat.number }}</p>
            <p class="text-zinc-500 text-[17px] font-medium mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>