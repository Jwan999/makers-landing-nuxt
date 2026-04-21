<script setup lang="ts">
const links = [
  { label: 'About Us',  href: '/about' },
  { label: 'Programs',  href: '/#pillars' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Impact',    href: '/#impact' },
  { label: 'Facebook',  href: 'https://facebook.com/iotmakeriq' },
  { label: 'Instagram', href: 'https://instagram.com/makers.iq' },
  { label: 'YouTube',   href: '#' },
  { label: 'Contact',   href: '/#contact' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-zinc-950 text-white overflow-hidden" style="padding-top: 80px;">
    <div class="container-m flex justify-between items-start gap-10 flex-wrap">
      <div>
        <div class="mono mb-3.5" style="color: var(--orange);">BAGHDAD · EST. 2017</div>
        <div
          class="font-bold"
          style="font-size: clamp(40px, 7vw, 88px); letter-spacing: -0.03em; line-height: 0.95;"
        >
          Let's make.
        </div>
        <a
          href="#contact"
          class="inline-flex items-center gap-[10px] mt-6 px-5 py-3 rounded-full font-semibold text-white"
          style="background: var(--orange);"
        >
          Get Involved
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="grid gap-y-3 gap-x-[60px]" style="grid-template-columns: auto auto;">
        <a v-for="l in links" :key="l.label" :href="l.href" class="text-zinc-400 text-[15px] hover:text-orange-400 transition-colors">
          {{ l.label }}
        </a>
      </div>
    </div>

    <div
      class="mt-[60px] font-bold text-center select-none"
      style="font-size: clamp(80px, 22vw, 320px); color: var(--zinc-900); letter-spacing: -0.06em; line-height: 0.8; margin-bottom: -40px;"
    >
      MAKERS
    </div>

    <div class="py-5 text-[13px]" style="background: var(--zinc-900); color: var(--zinc-500);">
      <div class="container-m flex justify-between flex-wrap gap-3">
        <span>© {{ year }} Makers. All rights reserved.</span>
        <span>Baghdad, Iraq · Backed by GIZ &amp; USAID</span>
      </div>
    </div>
  </footer>
</template>