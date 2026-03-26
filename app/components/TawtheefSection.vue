<script setup lang="ts">
const features = [
  'Smart job matching for Iraqi graduates',
  'Public & private sector opportunities',
  'Skills-based profile system',
  'Built and maintained by our dev team',
]
</script>

<template>
  <section id="tawtheef" class="py-24 bg-zinc-900">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Content -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-orange-700 rounded-xl flex items-center justify-center">
              <img src="~/assets/svgs/tawtheefLogo.svg" alt="Tawtheef" class="w-7 h-7 brightness-0 invert" />
            </div>
            <span class="text-orange-400 font-bold text-xl">Tawtheef</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Flagship Product.<br/>
            <span class="text-zinc-400">Built in Baghdad,</span><br/>
            <span class="text-orange-400">For Iraq.</span>
          </h2>

          <p class="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
            Tawtheef is an employment platform connecting Iraqi job seekers with opportunities across public and private sectors. It's not a concept — it's live, serving real users.
          </p>

          <ul class="space-y-4 mb-10">
            <li v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <div class="w-6 h-6 bg-orange-700/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-zinc-300 text-[17px]">{{ feature }}</span>
            </li>
          </ul>

          <a
            href="https://tawtheef.makersiq.org"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full text-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Visit Tawtheef
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <!-- Right: Visual -->
        <div class="relative">
          <div class="bg-zinc-800 rounded-2xl p-8 border border-zinc-700/50">
            <!-- Mock UI -->
            <div class="flex items-center gap-2 mb-6">
              <div class="w-3 h-3 rounded-full bg-red-500/60" />
              <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div class="w-3 h-3 rounded-full bg-green-500/60" />
              <span class="text-zinc-500 text-sm ml-3 font-mono">tawtheef.makersiq.org</span>
            </div>

            <!-- Mock Dashboard -->
            <div class="space-y-4">
              <div class="bg-zinc-900 rounded-xl p-5">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-700 rounded-xl flex items-center justify-center">
                      <img src="~/assets/svgs/tawtheefLogo.svg" alt="" class="w-5 h-5 brightness-0 invert" />
                    </div>
                    <div>
                      <p class="text-white font-semibold">Tawtheef</p>
                      <p class="text-zinc-500 text-sm">Employment Platform</p>
                    </div>
                  </div>
                  <span class="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full font-medium">Live</span>
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div class="bg-zinc-800 rounded-lg p-3 text-center">
                    <p class="text-orange-400 font-bold text-lg">1.2K+</p>
                    <p class="text-zinc-500 text-xs mt-1">Users</p>
                  </div>
                  <div class="bg-zinc-800 rounded-lg p-3 text-center">
                    <p class="text-orange-400 font-bold text-lg">500+</p>
                    <p class="text-zinc-500 text-xs mt-1">Job Matches</p>
                  </div>
                  <div class="bg-zinc-800 rounded-lg p-3 text-center">
                    <p class="text-orange-400 font-bold text-lg">50+</p>
                    <p class="text-zinc-500 text-xs mt-1">Companies</p>
                  </div>
                </div>
              </div>

              <!-- Fake job cards -->
              <div class="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-zinc-700 rounded-lg" />
                  <div>
                    <p class="text-zinc-300 text-sm font-medium">Frontend Developer</p>
                    <p class="text-zinc-500 text-xs">Baghdad — Full Time</p>
                  </div>
                </div>
                <span class="text-orange-400 text-sm font-medium">95% Match</span>
              </div>
              <div class="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-zinc-700 rounded-lg" />
                  <div>
                    <p class="text-zinc-300 text-sm font-medium">UI/UX Designer</p>
                    <p class="text-zinc-500 text-xs">Remote — Contract</p>
                  </div>
                </div>
                <span class="text-orange-400 text-sm font-medium">87% Match</span>
              </div>
            </div>
          </div>

          <!-- Floating decoration -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-orange-700/20 rounded-full animate-float" style="animation-delay: 1s" />
          <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-700/10 rounded-full animate-float" style="animation-delay: 2s" />
        </div>
      </div>
    </div>
  </section>
</template>