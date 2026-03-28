<template>
  <footer class="bg-zinc-950 py-12 border-t border-zinc-800">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
            <img src="~/assets/svgs/tawtheefLogo.svg" alt="Makers" class="w-5 h-5 brightness-0 invert" />
          </div>
          <span class="text-zinc-400 font-semibold">Makers</span>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <NuxtLink to="/about" class="text-zinc-500 hover:text-orange-400 transition-colors text-sm">About Us</NuxtLink>
          <NuxtLink to="/programs" class="text-zinc-500 hover:text-orange-400 transition-colors text-sm">Programs</NuxtLink>
          <a href="#solutions" class="text-zinc-500 hover:text-orange-400 transition-colors text-sm">Solutions</a>
          <a href="#impact" class="text-zinc-500 hover:text-orange-400 transition-colors text-sm">Impact</a>
          <a href="#contact" class="text-zinc-500 hover:text-orange-400 transition-colors text-sm">Contact</a>
        </div>

        <!-- Copyright -->
        <p class="text-zinc-600 text-sm">
          &copy; {{ new Date().getFullYear() }} Makers. Baghdad, Iraq.
        </p>
      </div>
    </div>
  </footer>
</template>
