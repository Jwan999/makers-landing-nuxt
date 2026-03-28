<script setup lang="ts">
const partners = [
  { name: 'GIZ', desc: 'German Corporation for International Cooperation' },
  { name: 'USAID', desc: 'U.S. Agency for International Development' },
  { name: 'FabLabs', desc: 'Global Fabrication Laboratory Network' },
]
</script>

<template>
  <section class="py-20 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-12">
        <p class="text-orange-700 font-semibold text-lg mb-3">Partners & Supporters</p>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-800">Backed By</h2>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="text-center group"
        >
          <div class="w-28 h-28 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow duration-300">
            <span class="text-2xl font-bold text-zinc-400 group-hover:text-orange-700 transition-colors duration-300">{{ partner.name }}</span>
          </div>
          <p class="text-zinc-500 text-sm max-w-[160px]">{{ partner.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
