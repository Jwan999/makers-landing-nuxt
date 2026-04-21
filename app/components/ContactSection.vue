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
    class="relative overflow-hidden py-[100px]"
    style="background: var(--orange); color: var(--zinc-950);"
  >
    <div
      aria-hidden
      class="absolute rounded-full pointer-events-none"
      style="top: -100px; right: -100px; width: 400px; height: 400px; background: rgba(24,24,27,0.06);"
    />

    <div class="container-m relative">
      <div class="grid items-end gap-10 contact-top">
        <div>
          <h2
            class="font-bold"
            style="font-size: clamp(48px, 8vw, 120px); line-height: 0.95; letter-spacing: -0.03em;"
          >
            Say hi →
          </h2>
          <p class="body-lg mt-5 max-w-[40ch]" style="color: rgba(24,24,27,0.8);">
            Whether you want to train, collaborate, build, or just visit — pick your lane and reach out.
          </p>
        </div>
        <div class="flex gap-3 flex-wrap">
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-semibold inline-flex items-center gap-[10px]">
            I want to train
          </a>
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-semibold">I'm a startup</a>
          <a href="#" class="px-6 py-[14px] bg-zinc-950 text-white rounded-full font-semibold">I'm a partner</a>
        </div>
      </div>

      <div
        class="grid gap-6 mt-20 pt-10"
        style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); border-top: 2px solid rgba(24,24,27,0.2);"
      >
        <div v-for="d in details" :key="d.label">
          <div class="mono">{{ d.label }}</div>
          <div class="font-bold mt-1.5" style="font-size: 20px;">{{ d.value }}</div>
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