<script setup lang="ts">
const { open: openContactModal } = useContactModal()
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden py-16 lg:py-[100px] text-white"
    style="background: var(--orange);"
  >
    <div
      aria-hidden
      class="absolute rounded-full pointer-events-none"
      style="top: -100px; right: -100px; width: 400px; height: 400px; background: rgba(255,255,255,0.1);"
    />

    <div class="container-m relative">
      <div class="grid items-end gap-10 contact-top">
        <Reveal>
          <h2
            class="font-bold text-white"
            style="font-size: clamp(48px, 8vw, 120px); line-height: 0.95; letter-spacing: -0.03em;"
          >
            Say hi →
          </h2>
          <p class="body-lg mt-5 max-w-[40ch]" style="color: rgba(255,255,255,0.9);">
            Whether you want to train, collaborate, build, or just visit — pick your lane and reach out.
          </p>
        </Reveal>
        <Reveal as="div" :delay="140" class="flex">
          <button
            type="button"
            class="px-8 py-4 bg-zinc-950 text-white rounded-full font-bold inline-flex items-center gap-[10px] transition-transform active:scale-[0.99]"
            @click="openContactModal()"
          >
            <span>Get in touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
              <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-top { grid-template-columns: 1fr auto; }
@media (max-width: 768px) {
  .contact-top { grid-template-columns: 1fr !important; }
}
</style>