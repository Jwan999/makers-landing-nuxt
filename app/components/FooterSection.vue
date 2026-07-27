<script setup lang="ts">
const { open: openContactModal } = useContactModal()

const nav = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Previous Work', href: '/previous-work' },
  { label: 'Data Hub', href: '/data-hub' },
  { label: 'What We Do', href: '/#pillars' },
  { label: 'Impact', href: '/#impact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/makers.iq' },
  { label: 'Facebook', href: 'https://facebook.com/iotmakeriq' },
]

const contact = {
  email: 'hello@makersiq.org',
  phone: '+964 783 491 5325',
  phoneTel: '+9647834915325',
  studio: "Al Sina'a Street · Al Rusafa, Baghdad 10069",
  hours: 'Sun–Thu · 10am–7pm',
}

const mapQuery = "Al Sina'a Street, Al Rusafa, Baghdad, Iraq"
const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

const year = new Date().getFullYear()

const { el: parallaxEl, offset: parallaxOffset } = useParallax(0.12)
</script>

<template>
  <footer class="bg-zinc-950 text-white overflow-hidden">
    <div class="container-m pt-36 lg:pt-32">
      <!-- Top band -->
      <div class="pb-12 border-b border-zinc-800">
        <div class="mono mb-4" style="color: var(--orange);">BAGHDAD · EST. 2017</div>
        <h2 class="font-bold" style="font-size: clamp(44px, 7vw, 104px); letter-spacing: -0.03em; line-height: 0.9;">
          Let's make.
        </h2>
      </div>

      <!-- Main grid -->
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-10 py-14 lg:py-16">
        <!-- Contact -->
        <div class="lg:col-span-4">
          <div class="mono text-zinc-500 mb-6">Contact</div>
          <ul class="flex flex-col gap-5">
            <li class="flex items-start gap-3.5">
              <svg class="footer-ico" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>
              <a :href="`mailto:${contact.email}`" class="footer-link text-[18px]">{{ contact.email }}</a>
            </li>
            <li class="flex items-start gap-3.5">
              <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a :href="`tel:${contact.phoneTel}`" class="footer-link text-[18px]">{{ contact.phone }}</a>
            </li>
            <li class="flex items-start gap-3.5">
              <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span class="text-zinc-300 text-[18px] leading-snug">{{ contact.studio }}</span>
            </li>
            <li class="flex items-start gap-3.5">
              <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span class="text-zinc-300 text-[18px]">{{ contact.hours }}</span>
            </li>
          </ul>
        </div>

        <!-- Explore + Connect -->
        <div class="lg:col-span-3 grid grid-cols-2 gap-8">
          <div>
            <div class="mono text-zinc-500 mb-6">Explore</div>
            <ul class="flex flex-col gap-3.5">
              <li v-for="l in nav" :key="l.label">
                <NuxtLink :to="l.href" class="footer-link text-[18px]">{{ l.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <div class="mono text-zinc-500 mb-6">Connect</div>
            <ul class="flex flex-col gap-3.5">
              <li v-for="s in socials" :key="s.label">
                <a :href="s.href" target="_blank" rel="noopener" class="footer-link text-[18px]">{{ s.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Map -->
        <div class="lg:col-span-5">
          <div class="mono text-zinc-500 mb-6">Find us</div>
          <div class="rounded-2xl overflow-hidden border border-zinc-800 h-[170px] lg:h-[220px] max-w-[460px] lg:max-w-none">
            <iframe
              :src="mapEmbed"
              title="Makers of Baghdad location"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="footer-map w-full h-full border-0"
            />
          </div>
          <a :href="mapLink" target="_blank" rel="noopener" class="footer-link text-[15px] inline-flex items-center gap-1.5 mt-4">
            Open in Google Maps
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Baghdad skyline finale with wordmark -->
    <div class="relative w-full overflow-hidden mt-6" style="height: clamp(230px, 32vw, 460px);">
      <!-- Skyline silhouette (Makers of Baghdad brand illustration) -->
      <img
        src="/iraq-landmarks.svg"
        alt=""
        aria-hidden="true"
        class="absolute inset-x-0 bottom-0 w-full select-none pointer-events-none"
        style="opacity: 0.55;"
      />
      <!-- Wordmark overlaid on the skyline -->
      <div
        ref="parallaxEl"
        aria-hidden="true"
        class="absolute inset-x-0 top-[10%] text-center select-none pointer-events-none px-4"
        :style="{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          willChange: 'transform',
        }"
      >
        <div
          class="font-bold"
          style="font-size: clamp(13px, 2.8vw, 40px); letter-spacing: 0.2em; color: #d4d4d8; text-shadow: 0 2px 16px rgba(0,0,0,0.6);"
        >
          MAKERS OF
        </div>
        <div
          class="font-bold"
          style="font-size: clamp(52px, 13vw, 200px); letter-spacing: -0.04em; line-height: 0.85; color: #ffffff; text-shadow: 0 4px 24px rgba(0,0,0,0.6);"
        >
          BAGHDAD
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="py-6" style="background: #111113;">
      <div class="container-m flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] font-bold text-zinc-500">
        <div class="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left">
          <span>© {{ year }} Makers of Baghdad. All rights reserved.</span>
          <p class="text-[13px] font-medium text-zinc-600 max-w-[62ch] leading-relaxed">
            Makers of Baghdad is registered as Al-Baha Organization for Information
            Technology Development and Public Services.
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener"
            :aria-label="s.label"
            class="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            <svg v-if="s.label === 'Instagram'" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #d4d4d8; /* zinc-300 */
  font-weight: 700;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: var(--orange);
}
.footer-ico {
  width: 20px;
  height: 20px;
  flex: none;
  margin-top: 2px;
  color: var(--orange);
}
/* Tint the embedded map toward the dark theme */
.footer-map {
  filter: invert(0.92) hue-rotate(180deg) contrast(0.9) brightness(0.95);
}
</style>
