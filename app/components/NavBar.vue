<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Previous Work', href: '/previous-work' },
  { label: 'Data Hub', href: '/data-hub' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg py-3'
      : 'bg-transparent py-5'"
  >
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 bg-orange-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/25">
          <img src="~/assets/svgs/tawtheefLogo.svg" alt="Makers" class="w-6 h-6 brightness-0 invert" />
        </div>
        <span
          class="font-bold text-xl transition-colors"
          :class="scrolled ? 'text-white' : 'text-zinc-950'"
        >Makers</span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="transition-colors duration-200 text-[18px] font-bold hover:text-orange-500"
          :class="scrolled ? 'text-white' : 'text-zinc-950'"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="/#contact"
          class="px-6 py-2 bg-orange-700 text-white rounded-full text-[18px] font-bold hover:bg-orange-600 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
        >
          Get Involved
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2"
        :class="scrolled ? 'text-white' : 'text-zinc-950'"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-6 py-4">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="block py-3 text-white hover:text-orange-400 transition-colors text-[18px] font-bold"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="/#contact"
          class="block mt-3 px-6 py-3 bg-orange-700 text-white rounded-full text-center text-[18px] font-bold"
          @click="mobileOpen = false"
        >
          Get Involved
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
