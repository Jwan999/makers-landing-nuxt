<template>
  <div>
    <NavBar />
    <section class="min-h-screen flex items-center justify-center bg-zinc-900">
      <div class="text-center px-6">
        <MakersMark :size="88" color="#ffffff" class="mx-auto mb-8" />
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p class="text-zinc-400 text-lg max-w-md mx-auto mb-8">
          We're building out the Who We Are page. Check back soon for the full story.
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