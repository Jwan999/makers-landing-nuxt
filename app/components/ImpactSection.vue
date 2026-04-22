<script setup lang="ts">
const STATS = [
  { n: '50,000+', l: 'Visitors' },
  { n: '15,000+', l: 'Beneficiaries' },
  { n: '200+',    l: 'Training Sessions' },
  { n: '140+',    l: 'Products Built' },
  { n: '200+',    l: 'SMEs Supported' },
  { n: '2,000+',  l: 'Jobs Created' },
  { n: '49%',     l: 'Female Participants' },
  { n: '6+',      l: 'Years Running' },
]

const idx = ref(0)
const current = computed(() => STATS[idx.value])
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    idx.value = (idx.value + 1) % STATS.length
  }, 2800)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section
    id="impact"
    class="relative overflow-hidden flex items-center py-[120px] text-white"
    style="background: var(--orange); min-height: 80vh;"
  >
    <div class="container-m text-center relative">
      <div class="mono mb-5">
        BY THE NUMBERS — {{ String(idx + 1).padStart(2, '0') }}/{{ String(STATS.length).padStart(2, '0') }}
      </div>

      <div
        class="text-white"
        style="font-size: clamp(96px, 22vw, 320px); line-height: 0.9; letter-spacing: -0.04em; font-weight: 500;"
      >
        {{ current.n }}
      </div>
      <div
        class="font-bold mt-2.5"
        style="font-size: clamp(22px, 2.4vw, 32px); color: rgba(255,255,255,0.9);"
      >
        {{ current.l }}
      </div>

      <div class="flex gap-2 justify-center mt-12">
        <button
          v-for="(_, i) in STATS"
          :key="i"
          type="button"
          class="rounded transition-all"
          :style="{
            width: i === idx ? '32px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === idx ? '#fff' : 'rgba(255,255,255,0.4)',
            transitionDuration: '0.25s',
          }"
          @click="idx = i"
        />
      </div>
    </div>
  </section>
</template>