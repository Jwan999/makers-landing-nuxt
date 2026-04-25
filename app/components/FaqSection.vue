<script setup lang="ts">
const FAQS = [
  {
    q: 'What does Makers of Baghdad do?',
    a: 'We are a data-driven hub empowering entrepreneurs and SME owners across Iraq through three pillars: employment, business and SME support, and applied research.',
  },
  {
    q: 'How can Makers help my business or SME?',
    a: 'Through business development, mentorship, acceleration, and investment readiness — including data-room support, financial management training, and connections to funding opportunities.',
  },
  {
    q: 'Can Makers build a custom tech solution for my business?',
    a: "Yes. Our Makers Suite includes platforms we've built in-house (Tawtheef, Contract Generator, Judging Panel, Reports System and more). Reach out via the contact form and we'll discuss.",
  },
  {
    q: 'What services does Makers offer?',
    a: 'Training halls, curriculum development, co-working spaces, financial understanding support, and investment readiness programming — built on six years of experience.',
  },
  {
    q: "Who are Makers' partners?",
    a: 'GIZ, USAID, ILO, IOM, WFP, GEN, UNICEF, UNFPA, the US and Australian Embassies, DRC, WUSC, European Union, Central Bank of Iraq, KfW, Zain, World Learning and the FabLabs Network.',
  },
  {
    q: 'What kind of research does Makers conduct?',
    a: 'Sector analysis, skills mapping, fintech research, and private-sector mapping — data-driven studies that inform policy and program design.',
  },
]

const open = ref<number>(0)

function toggle(i: number) {
  open.value = open.value === i ? -1 : i
}
</script>

<template>
  <section class="bg-zinc-50 text-zinc-950 py-[120px]">
    <div class="container-m">
      <Reveal as="div" class="text-center mb-[60px]">
        <div class="eyebrow centered">FAQ</div>
        <h2 class="h-section text-zinc-950">Common questions.</h2>
      </Reveal>

      <div class="max-w-[720px] mx-auto">
        <Reveal
          v-for="(f, i) in FAQS"
          :key="i"
          as="div"
          :delay="80 + i * 50"
          class="border-b border-zinc-200 py-2"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between py-[18px] text-left"
            @click="toggle(i)"
          >
            <span class="text-[20px] font-bold text-zinc-950">{{ f.q }}</span>
            <span
              class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
              :class="open === i
                ? 'bg-[var(--orange)] text-white'
                : 'border border-zinc-300 text-zinc-500'"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                class="transition-transform duration-200"
                :class="open === i ? 'rotate-180' : ''"
              >
                <path d="M5 12h14" />
                <path v-if="open !== i" d="M12 5v14" />
              </svg>
            </span>
          </button>
          <p
            v-if="open === i"
            class="text-zinc-600 leading-[1.6] pb-5 max-w-[60ch] body-r"
          >
            {{ f.a }}
          </p>
        </Reveal>
      </div>
    </div>
  </section>
</template>