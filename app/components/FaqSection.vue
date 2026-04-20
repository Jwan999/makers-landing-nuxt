<script setup lang="ts">
const faqs = [
  {
    question: 'What does Makers of Baghdad do?',
    answer: 'Makers of Baghdad is a data-driven hub empowering entrepreneurs and SME owners across Iraq through three pillars: employment, business and SME development, and research. We connect talent with the private sector, government, and international partners.',
  },
  {
    question: 'How can Makers help my business or SME?',
    answer: 'We provide mentorship, acceleration, and technical support in business development, financial systems, and legal frameworks. Our investment readiness services prepare businesses for funding opportunities across Iraq.',
  },
  {
    question: 'Can Makers build a custom tech solution for my business?',
    answer: 'Yes. Through our Makers Suite, we\'ve built everything from employment platforms to reporting systems. Reach out through our contact form and we\'ll discuss your project.',
  },
  {
    question: 'What services does Makers offer?',
    answer: 'We offer training halls, curriculum development, co-working spaces, financial understanding workshops, and investment readiness support — all designed to help businesses and individuals grow.',
  },
  {
    question: 'Who are Makers\' partners?',
    answer: 'Makers is supported by GIZ, USAID, ILO, IOM, WFP, the US Embassy, the European Union, and many other international organizations committed to developing Iraq\'s ecosystem.',
  },
  {
    question: 'What kind of research does Makers conduct?',
    answer: 'We produce data-driven studies including sector analysis, skills mapping, fintech landscape research, and private sector mapping — providing actionable insights for policymakers and businesses.',
  },
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-24 bg-zinc-900">
    <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div class="text-center mb-16">
        <p class="text-orange-400 font-semibold text-lg mb-3">FAQ</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">Common Questions</h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-zinc-800 border border-zinc-700/50 rounded-2xl overflow-hidden transition-all duration-300"
          :class="openIndex === index ? 'border-orange-700/50' : ''"
        >
          <button
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
            @click="toggle(index)"
          >
            <span class="text-white font-semibold text-[17px]">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Transition name="expand">
            <div v-if="openIndex === index" class="px-6 pb-5">
              <p class="text-zinc-400 text-[17px] leading-relaxed">{{ faq.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.expand-enter-to, .expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>