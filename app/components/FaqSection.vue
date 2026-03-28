<script setup lang="ts">
const faqs = [
  {
    question: 'How can I join a training program?',
    answer: 'We run intensive bootcamps throughout the year in web development, mobile, UI/UX, and more. Check our Programs page for upcoming sessions and registration details.',
  },
  {
    question: 'What is the co-working space and how do I book?',
    answer: 'Our co-working space offers desks, high-speed WiFi, and a community of makers in central Baghdad. Visit our About page for amenities and booking information.',
  },
  {
    question: 'Can Makers build a custom tech solution for my business?',
    answer: 'Yes. We\'ve built everything from employment platforms to reporting systems. Reach out through our contact section and we\'ll discuss your project.',
  },
  {
    question: 'How do I apply for an internship?',
    answer: 'Internships are available for graduates of our training programs. You\'ll work alongside our dev team on real products with real deadlines. Contact us to learn about current openings.',
  },
  {
    question: 'Who funds Makers?',
    answer: 'Makers is supported by GIZ (German Corporation for International Cooperation) and USAID, among other partners committed to developing Iraq\'s tech ecosystem.',
  },
  {
    question: 'What kind of research does Makers conduct?',
    answer: 'We analyze sectors and map the Iraqi market to provide actionable insights — helping businesses and organizations make data-driven decisions.',
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
