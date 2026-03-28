<template>
  <section id="contact" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-700 font-semibold text-lg mb-3">Contact & Location</p>
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">Get In Touch</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold text-zinc-800 mb-6">Reach Out</h3>
          <div class="space-y-5">
            <a href="mailto:hello@makersiq.org" class="flex items-center gap-4 group">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg class="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-zinc-800 font-semibold group-hover:text-orange-700 transition-colors">Email</p>
                <p class="text-zinc-500 text-sm">hello@makersiq.org</p>
              </div>
            </a>

            <a href="tel:+9647834915325" class="flex items-center gap-4 group">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg class="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-zinc-800 font-semibold group-hover:text-orange-700 transition-colors">Phone</p>
                <p class="text-zinc-500 text-sm">+964 783 491 5325</p>
              </div>
            </a>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div class="flex gap-4">
                <a href="https://www.facebook.com/iotmakeriq" target="_blank" rel="noopener" class="text-zinc-500 hover:text-orange-700 transition-colors text-sm font-medium">Facebook</a>
                <a href="https://www.instagram.com/makers.iq/" target="_blank" rel="noopener" class="text-zinc-500 hover:text-orange-700 transition-colors text-sm font-medium">Instagram</a>
                <a href="https://www.youtube.com/channel/UCV_yCnlTKWNb1K_boz6g59A" target="_blank" rel="noopener" class="text-zinc-500 hover:text-orange-700 transition-colors text-sm font-medium">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div>
          <h3 class="text-xl font-bold text-zinc-800 mb-6">Find Us</h3>
          <div class="rounded-2xl overflow-hidden shadow-sm h-64 md:h-full min-h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456!2d44.3661!3d33.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzU0LjciTiA0NMKwMjEnNTcuOSJF!5e0!3m2!1sen!2siq!4v1"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Makers Location"
            />
          </div>
          <p class="text-zinc-500 text-sm mt-3">Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</p>
        </div>
      </div>
    </div>
  </section>
</template>
