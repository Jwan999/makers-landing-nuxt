<template>
  <div>
    <NavBar />
    <section class="min-h-screen flex items-center justify-center bg-zinc-900">
      <div class="text-center px-6">
        <div class="w-16 h-16 bg-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <img src="~/assets/svgs/tawtheefLogo.svg" alt="Makers" class="w-10 h-10 brightness-0 invert" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p class="text-zinc-400 text-lg max-w-md mx-auto mb-8">
          We're putting together the full list of our programs. Check back soon.
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

    <!--
    ╔══════════════════════════════════════════════════════════════╗
    ║  TODO: PROGRAMS PAGE — DATA TO FILL IN                      ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  MASARAT:                                                    ║
    ║  - 6-month job acceleration program                          ║
    ║  - Covers: programming, graphic design, 3D modeling          ║
    ║  - Funded by USAID                                           ║
    ║  - TODO: detailed description, eligibility, dates, apply CTA ║
    ║                                                              ║
    ║  FEMALE FOUNDERS:                                            ║
    ║  - Incubation program for women entrepreneurs                ║
    ║  - TODO: detailed description, eligibility, dates, apply CTA ║
    ║                                                              ║
    ║  CLIMATHON:                                                  ║
    ║  - Climate change hackathon                                  ║
    ║  - TODO: detailed description, past editions, dates,         ║
    ║          register CTA                                        ║
    ║                                                              ║
    ║  JUMP-START:                                                 ║
    ║  - 3-month internship for training graduates                 ║
    ║  - TODO: detailed description, eligibility, dates, apply CTA ║
    ║                                                              ║
    ║  10,000 CODERS FOR KIDS:                                     ║
    ║  - Non-profit initiative introducing coding to children      ║
    ║  - TODO: detailed description, age groups, schedule,         ║
    ║          register CTA                                        ║
    ║                                                              ║
    ║  MAKER CAMP:                                                 ║
    ║  - Annual event                                              ║
    ║  - TODO: detailed description, past editions, dates,         ║
    ║          register CTA                                        ║
    ║                                                              ║
    ║  EACH PROGRAM NEEDS:                                         ║
    ║  - Full description                                          ║
    ║  - Eligibility criteria                                      ║
    ║  - Duration & dates                                          ║
    ║  - Photos / media                                            ║
    ║  - Apply / register CTA button                               ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    -->
  </div>
</template>
