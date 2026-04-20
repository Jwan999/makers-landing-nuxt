<template>
  <div>
    <NavBar />
    <section class="min-h-screen flex items-center justify-center bg-zinc-900">
      <div class="text-center px-6">
        <div class="w-16 h-16 bg-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Data Hub</h1>
        <p class="text-zinc-400 text-lg max-w-md mx-auto mb-2">Coming Soon</p>
        <p class="text-zinc-500 text-base max-w-lg mx-auto mb-8">
          The future home of Makers' data-driven research, sector-mapping reports, and insights that guide policymakers and businesses across Iraq.
        </p>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-8 py-3 bg-orange-700 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-200"
        >
          Back to Home
        </NuxtLink>
      </div>
    </section>
    <FooterSection />
  </div>
</template>