<script setup lang="ts">
const SOLUTIONS = [
  { id: 'tawtheef', title: 'Tawtheef',               tagline: 'Employment platform', desc: 'Advanced digital employment platform with ATS-compliant CV builder and intelligent matching tools.' },
  { id: 'contract', title: 'Contract Generator',     tagline: 'Legal automation',    desc: 'Generates contracts and templates, streamlining the contracting process for businesses.' },
  { id: 'present',  title: 'Presentation Maker',     tagline: 'Deck builder',        desc: 'Tool for creating professional presentations quickly and efficiently.' },
  { id: 'judging',  title: 'Judging Panel',          tagline: 'Evaluation system',   desc: 'Digital judging system for competitions, hackathons, and evaluation events.' },
  { id: 'loan',     title: 'Loan Eligibility Checker', tagline: 'Financial tooling', desc: 'Helps businesses check eligibility for loans from Iraqi government initiatives.' },
  { id: 'reports',  title: 'Reports System',         tagline: 'Document automation', desc: 'Generates structured reports from user-entered data, automating documentation and analysis.' },
]

const active = ref(0)
const current = computed(() => SOLUTIONS[active.value])
</script>

<template>
  <section id="solutions" class="bg-zinc-50 py-[140px]">
    <div class="container-m">
      <div class="flex justify-between items-end mb-[60px] flex-wrap gap-6">
        <div>
          <div class="eyebrow">The Makers Suite</div>
          <h2 class="h-section">Tools we built,<br />shipped, and stand behind.</h2>
        </div>
        <p class="body-lg text-zinc-600 max-w-[42ch]">
          Every tool in the Makers Suite solves a real problem we ran into ourselves.
          If you need a custom one — we build those too.
        </p>
      </div>

      <div class="grid gap-10 items-start" style="grid-template-columns: 1fr 1.4fr;">
        <!-- Index -->
        <div class="border-t border-zinc-200">
          <button
            v-for="(sol, i) in SOLUTIONS"
            :key="sol.id"
            type="button"
            @click="active = i"
            class="w-full text-left py-6 border-b border-zinc-200 grid items-center gap-4 cursor-pointer"
            :class="active === i ? 'text-zinc-950' : 'text-zinc-600'"
            style="grid-template-columns: 60px 1fr auto;"
          >
            <div class="mono" :class="active === i ? 'text-[var(--orange)]' : 'text-zinc-400'">
              S/0{{ i + 1 }}
            </div>
            <div>
              <div class="text-xl font-bold">{{ sol.title }}</div>
              <div class="caption text-zinc-500 mt-0.5">{{ sol.tagline }}</div>
            </div>
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              :class="active === i ? 'bg-[var(--orange)] text-white border-0' : 'border border-zinc-300 text-zinc-400'"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          </button>
        </div>

        <!-- Detail pane -->
        <div
          class="bg-white rounded-3xl p-8 sticky"
          style="top: 140px; box-shadow: 0 4px 0 rgba(0,0,0,0.06), 0 12px 30px rgba(0,0,0,0.05);"
        >
          <div class="mono text-zinc-400">CASE STUDY · S/0{{ active + 1 }}</div>
          <h3 class="mt-3 font-bold" style="font-size: 42px; letter-spacing: -0.02em;">{{ current.title }}</h3>
          <div
            class="inline-block mt-2 rounded-full text-[14px] font-bold px-3 py-1.5"
            style="background: var(--orange-50); color: var(--orange);"
          >
            {{ current.tagline }}
          </div>
          <p class="body-lg text-zinc-600 mt-5">{{ current.desc }}</p>

          <div
            class="mt-6 rounded-xl border border-dashed border-zinc-300 bg-zinc-100 flex flex-col items-center justify-center gap-2"
            style="aspect-ratio: 16 / 7;"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400">
              <path d="M3 3h8v8H3z" /><path d="M13 3h8v8h-8z" /><path d="M3 13h8v8H3z" /><path d="M13 13h8v8h-8z" />
            </svg>
            <div class="mono text-zinc-500">PRODUCT SCREENSHOT · PLACEHOLDER</div>
          </div>

          <div class="flex gap-3 mt-5">
            <a href="#" class="px-[18px] py-2.5 bg-zinc-900 text-white rounded-full text-[15px] font-bold">View case study</a>
            <a href="#contact" class="px-[18px] py-2.5 border border-zinc-300 rounded-full text-[15px] font-bold text-zinc-700">Request similar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  section .container-m > div:nth-child(2) {
    grid-template-columns: 1fr !important;
  }
}
</style>