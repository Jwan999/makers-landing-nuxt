<script setup lang="ts">
const amenities = [
  { icon: '📶', label: 'High-Speed WiFi' },
  { icon: '☕', label: 'Coffee & Tea' },
  { icon: '🖥️', label: 'Workstations' },
  { icon: '🛠️', label: 'Prototyping Tools' },
  { icon: '📅', label: 'Event Space' },
  { icon: '🤝', label: 'Community' },
]
</script>

<template>
  <section id="space" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Visual -->
        <div class="relative">
          <div class="bg-zinc-200 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
            <!-- Placeholder visual representing the space -->
            <div class="text-center p-8">
              <div class="w-24 h-24 mx-auto bg-orange-700/10 rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p class="text-zinc-700 font-bold text-2xl mb-2">The Maker Space</p>
              <p class="text-zinc-500">Baghdad, Iraq</p>
            </div>
          </div>
          <!-- Corner accent -->
          <div class="absolute -bottom-3 -right-3 w-32 h-32 bg-orange-700/5 rounded-2xl -z-10" />
        </div>

        <!-- Right: Content -->
        <div>
          <p class="text-orange-700 font-semibold text-lg mb-3">The Space</p>
          <h2 class="text-3xl md:text-5xl font-bold text-zinc-800 mb-6 leading-tight">
            Modest. Central.<br/>
            <span class="text-zinc-400">Community-Run.</span>
          </h2>

          <p class="text-zinc-500 text-lg leading-relaxed mb-8 max-w-lg">
            We won't pretend it's a Silicon Valley campus. It's a real workspace in Baghdad — functional, welcoming, and built around the people who use it. That's the point.
          </p>

          <!-- Amenities Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="amenity in amenities"
              :key="amenity.label"
              class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span class="text-2xl mb-2 block">{{ amenity.icon }}</span>
              <p class="text-zinc-700 text-[15px] font-medium">{{ amenity.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>