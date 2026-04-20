<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  // TODO: integrate with backend/email service
  alert('Message sent! We will get back to you soon.')
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <section id="contact" class="py-24 bg-zinc-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-700 font-semibold text-lg mb-3">Contact Us</p>
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">Get In Touch</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-zinc-700 font-semibold text-sm mb-2">Full Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block text-zinc-700 font-semibold text-sm mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label for="subject" class="block text-zinc-700 font-semibold text-sm mb-2">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label for="message" class="block text-zinc-700 font-semibold text-sm mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all resize-none"
                placeholder="Tell us more..."
              />
            </div>
            <button
              type="submit"
              class="w-full px-8 py-3 bg-orange-700 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info Side -->
        <div class="flex flex-col justify-center">
          <h3 class="text-xl font-bold text-zinc-800 mb-6">Reach Out Directly</h3>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-zinc-800 font-semibold">Location</p>
                <p class="text-zinc-500 text-sm">Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</p>
              </div>
            </div>

            <div class="flex items-center gap-4 pt-2">
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
      </div>
    </div>
  </section>
</template>