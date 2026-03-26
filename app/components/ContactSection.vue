<template>
  <section id="contact" class="py-24 bg-zinc-900 relative overflow-hidden">
    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-[10%] w-2 h-2 bg-orange-700/30 rounded-full animate-float" />
      <div class="absolute top-40 right-[20%] w-3 h-3 bg-orange-700/20 rounded-full animate-float" style="animation-delay: 1s" />
      <div class="absolute bottom-32 left-[30%] w-2 h-2 bg-orange-700/25 rounded-full animate-float" style="animation-delay: 2s" />
      <div class="absolute bottom-20 right-[15%] w-4 h-4 bg-orange-700/15 rounded-full animate-float" style="animation-delay: 3s" />
    </div>

    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl relative z-10">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-orange-400 font-semibold text-lg mb-3">Get Involved</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Want to Build With Us?
        </h2>
        <p class="text-zinc-400 text-lg leading-relaxed mb-10">
          Whether you're looking to train, intern, rent a desk, or collaborate on a project — we'd like to hear from you.
        </p>

        <!-- Contact Options -->
        <div class="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:hello@makersiq.org"
            class="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-700/50 transition-all duration-300 group"
          >
            <svg class="w-8 h-8 text-zinc-400 group-hover:text-orange-400 transition-colors mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p class="text-white font-semibold mb-1">Email Us</p>
            <p class="text-zinc-500 text-sm">hello@makersiq.org</p>
          </a>

          <a
            href="https://makersiq.org"
            target="_blank"
            rel="noopener"
            class="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-700/50 transition-all duration-300 group"
          >
            <svg class="w-8 h-8 text-zinc-400 group-hover:text-orange-400 transition-colors mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <p class="text-white font-semibold mb-1">Website</p>
            <p class="text-zinc-500 text-sm">makersiq.org</p>
          </a>

          <div class="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-6">
            <svg class="w-8 h-8 text-zinc-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="text-white font-semibold mb-1">Visit Us</p>
            <p class="text-zinc-500 text-sm">Baghdad, Iraq</p>
          </div>
        </div>

        <!-- Large CTA -->
        <a
          href="mailto:hello@makersiq.org"
          class="inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full text-xl font-bold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
        >
          Let's Talk
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>