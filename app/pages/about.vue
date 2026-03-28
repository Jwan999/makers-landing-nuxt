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
          We're building out the About Us page. Check back soon for the full story.
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
    ║  TODO: ABOUT US PAGE — DATA TO FILL IN                      ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  ABOUT US SECTION:                                           ║
    ║  - Full origin story (founded 2017 as IoT Maker, rebranded) ║
    ║  - Detailed mission statement                                ║
    ║  - Backing: GIZ and USAID details                           ║
    ║  - Team photo                                                ║
    ║  - Team members / leadership info                            ║
    ║                                                              ║
    ║  THE SPACE — CO-WORKING:                                     ║
    ║  - Description of co-working area                            ║
    ║  - Amenities: WiFi, workstations, coffee/tea                 ║
    ║  - Photos of co-working space                                ║
    ║  - "Apply to Co-Work" CTA / form                            ║
    ║  - Pricing info                                              ║
    ║                                                              ║
    ║  THE SPACE — TRAINING HALLS:                                 ║
    ║  - Description of training hall facilities                   ║
    ║  - Capacity, equipment, setup                                ║
    ║  - Photos of training halls                                  ║
    ║  - "Register for Training Hall" CTA / form                  ║
    ║                                                              ║
    ║  THE SPACE — OPEN SPACE:                                     ║
    ║  - Description of open/community area                        ║
    ║  - Use cases: events, meetups, casual work                   ║
    ║  - Photos                                                    ║
    ║                                                              ║
    ║  LOCATION DETAILS:                                           ║
    ║  - Full address: Al Sina'a Street, Baghdad, Al Rusafa        ║
    ║  - Google Maps embed                                         ║
    ║  - Directions / how to get there                             ║
    ║  - Operating hours                                           ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    -->
  </div>
</template>
