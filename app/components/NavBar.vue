<script setup lang="ts">
const { open: openContactModal } = useContactModal()

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Data Hub', href: '/data-hub' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/makers.iq' },
  { label: 'Facebook', href: 'https://facebook.com/iotmakeriq' },
]

function onScroll() {
  scrolled.value = window.scrollY > 50
}
function closeMenu() {
  mobileOpen.value = false
}
function openModalFromNav() {
  closeMenu()
  openContactModal()
}

watch(mobileOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (import.meta.client) document.body.style.overflow = ''
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
        <MakersMark :size="30" :color="scrolled ? '#ffffff' : '#18181b'" class="transition-transform duration-300 group-hover:scale-105" />
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
        <button
          type="button"
          class="px-6 py-2 bg-orange-700 text-white rounded-full text-[18px] font-bold hover:bg-orange-600 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          @click="openContactModal()"
        >
          Get Involved
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2"
        :class="scrolled ? 'text-white' : 'text-zinc-950'"
        @click="mobileOpen = true"
        aria-label="Open menu"
      >
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>

    <!-- Full-screen mobile menu -->
    <Teleport to="body">
      <Transition name="menu">
        <div
          v-if="mobileOpen"
          class="md:hidden fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <!-- Menu header -->
          <div class="flex items-center justify-between px-6 py-5">
            <a href="/" class="flex items-center gap-3" @click="closeMenu">
              <MakersMark :size="30" color="#ffffff" />
              <span class="font-bold text-xl">Makers</span>
            </a>
            <button
              type="button"
              class="w-11 h-11 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              aria-label="Close menu"
              @click="closeMenu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Big links -->
          <nav class="flex-1 flex flex-col justify-center px-6 gap-1">
            <NuxtLink
              v-for="(link, i) in links"
              :key="link.href"
              :to="link.href"
              class="menu-link group flex items-baseline gap-4 py-3 border-b border-zinc-800"
              :style="{ animationDelay: `${80 + i * 70}ms` }"
              @click="closeMenu"
            >
              <span class="mono text-[var(--orange)] text-sm">0{{ i + 1 }}</span>
              <span
                class="font-bold leading-none tracking-tight group-hover:text-[var(--orange)] transition-colors"
                style="font-size: clamp(34px, 11vw, 56px);"
              >
                {{ link.label }}
              </span>
            </NuxtLink>
          </nav>

          <!-- Footer: CTA + contact + socials -->
          <div class="px-6 pb-10 pt-4 flex flex-col gap-5">
            <button
              type="button"
              class="menu-link w-full inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-bold text-white leading-none"
              style="background: var(--orange); animation-delay: 320ms;"
              @click="openModalFromNav"
            >
              <span>Get Involved</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </button>
            <div class="menu-link flex items-center justify-between text-[15px]" style="animation-delay: 400ms;">
              <a href="mailto:hello@makersiq.org" class="text-zinc-400 font-bold hover:text-white transition-colors">hello@makersiq.org</a>
              <div class="flex gap-4">
                <a
                  v-for="s in socials"
                  :key="s.label"
                  :href="s.href"
                  target="_blank"
                  rel="noopener"
                  class="text-zinc-400 font-bold hover:text-[var(--orange)] transition-colors"
                >{{ s.label }}</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<style scoped>
/* Panel fade */
.menu-enter-active {
  transition: opacity 0.35s ease;
}
.menu-leave-active {
  transition: opacity 0.25s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

/* Staggered item entrance */
.menu-link {
  opacity: 0;
  transform: translateY(22px);
  animation: menu-item-in 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
@keyframes menu-item-in {
  to {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .menu-enter-active,
  .menu-leave-active,
  .menu-link {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
