<script setup lang="ts">
const SERVICES = [
  {
    id: 'halls',
    title: 'Training Halls',
    desc: 'Fully equipped training facilities for intensive bootcamps, workshops, and capacity-building sessions in web development, design, robotics, AI, and more.',
  },
  {
    id: 'curriculum',
    title: 'Curriculum Development',
    desc: 'Custom curriculum design for IT, entrepreneurship, and digital skills — developed for WFP, US Embassy, and ministry-level clients.',
  },
  {
    id: 'cowork',
    title: 'Co-Working Spaces',
    desc: 'Collaborative workspaces for businesses, SMEs, and remote workers in Baghdad. High-speed WiFi, workstations, and a community-driven environment.',
  },
  {
    id: 'finance',
    title: 'Financial Understanding',
    desc: 'Financial education and business development support — including SYIB training, financial management, and connection to loan facilities.',
  },
  {
    id: 'investment',
    title: 'Investment Readiness',
    desc: 'Preparing businesses and SMEs to be investment-ready through due diligence support, data room establishment, mentorship, and positioning for funding.',
  },
]
</script>

<template>
  <section id="services" class="bg-zinc-950 text-white py-[120px]">
    <div class="container-m">
      <div class="grid gap-20 mb-10 items-end services-header" style="grid-template-columns: 1fr 2fr;">
        <div>
          <div class="eyebrow" style="color: var(--orange);">Our Services</div>
          <h2 class="h-section text-white">
            Five ways<br />to work with<br /><span class="text-[var(--orange)]">Makers.</span>
          </h2>
        </div>
        <p class="body-lg text-zinc-400 self-end">
          Services offered at the space, grounded in our facilities, curriculum expertise, and years of cross-sector partnerships.
        </p>
      </div>

      <div>
        <div
          v-for="(s, i) in SERVICES"
          :key="s.id"
          class="grid gap-8 py-7 border-t border-zinc-800 items-start services-row"
          style="grid-template-columns: 80px 1.4fr 2fr;"
        >
          <div
            class="text-[28px] font-bold text-[var(--orange)] font-mono"
            style="letter-spacing: -0.02em;"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <h3 class="text-[26px] font-bold" style="letter-spacing: -0.01em;">{{ s.title }}</h3>
          <p class="body-r text-zinc-400">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .services-header { grid-template-columns: 1fr !important; gap: 20px !important; }
  .services-row { grid-template-columns: 60px 1fr !important; }
  .services-row > p { grid-column: 1 / -1; }
}
</style>