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

const { el: parallaxEl, offset: parallaxOffset } = useParallax(0.12)
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
        <div class="mt-6 flex justify-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-[10px] px-5 py-3 rounded-full font-bold text-white leading-none"
            style="background: var(--orange);"
          >
            <span>Get Involved</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
              <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div class="grid gap-y-3 gap-x-[60px]" style="grid-template-columns: auto auto;">
        <a v-for="l in links" :key="l.label" :href="l.href" class="text-zinc-400 text-[17px] font-bold hover:text-orange-400 transition-colors">
          {{ l.label }}
        </a>
      </div>
    </div>

    <div
      ref="parallaxEl"
      class="mt-[60px] font-bold text-center select-none"
      :style="{
        fontSize: 'clamp(80px, 22vw, 320px)',
        color: 'var(--zinc-900)',
        letterSpacing: '-0.06em',
        lineHeight: 0.8,
        marginBottom: '-40px',
        transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        willChange: 'transform',
      }"
    >
      MAKERS
    </div>

    <div class="py-5 text-[14px] font-bold" style="background: var(--zinc-900); color: var(--zinc-400);">
      <div class="container-m flex justify-between flex-wrap gap-3">
        <span>© {{ year }} Makers. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>