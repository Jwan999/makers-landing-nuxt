<script setup lang="ts">
const details = [
  { label: 'EMAIL',  value: 'hello@makersiq.org' },
  { label: 'PHONE',  value: '+964 783 491 5325' },
  { label: 'STUDIO', value: "Al Sina'a Street · Al Rusafa, Baghdad 10069" },
  { label: 'HOURS',  value: 'Sun–Thu · 10am–7pm' },
]
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden py-[100px] text-white"
    style="background: var(--orange);"
  >
    <div
      aria-hidden
      class="absolute rounded-full pointer-events-none"
      style="top: -100px; right: -100px; width: 400px; height: 400px; background: rgba(255,255,255,0.1);"
    />

    <div class="container-m relative">
      <div class="grid items-end gap-10 contact-top">
        <div>
          <h2
            class="font-bold text-white"
            style="font-size: clamp(48px, 8vw, 120px); line-height: 0.95; letter-spacing: -0.03em;"
          >
            Say hi →
          </h2>
          <p class="body-lg mt-5 max-w-[40ch]" style="color: rgba(255,255,255,0.9);">
            Whether you want to train, collaborate, build, or just visit — pick your lane and reach out.
          </p>
        </div>
        <div class="flex gap-3 flex-wrap">
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-bold inline-flex items-center gap-[10px]">
            I want to train
          </a>
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-bold">I'm a startup</a>
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-bold">I'm a partner</a>
        </div>
      </div>

      <div
        class="grid gap-6 mt-20 pt-10"
        style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); border-top: 2px solid rgba(255,255,255,0.25);"
      >
        <div v-for="d in details" :key="d.label">
          <div class="mono" style="color: rgba(255,255,255,0.85);">{{ d.label }}</div>
          <div class="font-bold mt-1.5 text-white" style="font-size: 22px;">{{ d.value }}</div>
        </div>
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