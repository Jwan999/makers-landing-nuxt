<script setup lang="ts">
const stats = [
  { number: '50,000+', label: 'Visitors' },
  { number: '15,000+', label: 'Beneficiaries' },
  { number: '200+', label: 'Training Sessions' },
  { number: '140+', label: 'Products Built' },
  { number: '200+', label: 'SMEs Supported' },
  { number: '2,000+', label: 'Jobs Created' },
  { number: '49%', label: 'Female Participants' },
  { number: '6+', label: 'Years Running' },
]
</script>

<template>
  <section id="impact" class="py-24 bg-zinc-900">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-400 font-semibold text-lg mb-3">Our Impact</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">By The Numbers</h2>
        <p class="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
          Real results from years of empowering businesses, creating jobs, and building Iraq's ecosystem.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-6 text-center hover:border-orange-700/50 transition-all duration-300"
        >
          <p class="text-3xl md:text-4xl font-extrabold text-orange-400 mb-2">{{ stat.number }}</p>
          <p class="text-zinc-400 text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>