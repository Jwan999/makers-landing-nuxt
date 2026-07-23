<script setup lang="ts">
const PARTNERS = [
  { name: 'GIZ',               desc: 'German Corporation for International Cooperation' },
  { name: 'USAID',             desc: 'Masarat job acceleration program' },
  { name: 'ILO',               desc: 'UN agency for labour issues' },
  { name: 'IOM',               desc: 'UN migration agency' },
  { name: 'WFP',               desc: 'UN food-assistance agency' },
  { name: 'GEN',               desc: 'Global entrepreneurship community' },
  { name: 'UNICEF',            desc: "UN children's agency" },
  { name: 'UNFPA',             desc: 'UN sexual & reproductive health agency' },
  { name: 'US Embassy',        desc: 'Diplomatic partner' },
  { name: 'Australian Embassy', desc: 'Diplomatic partner' },
  { name: 'DRC',               desc: 'International NGO' },
  { name: 'WUSC',              desc: 'International development org' },
  { name: 'EU',                desc: 'Supranational partner' },
  { name: 'CBI',               desc: 'National banking authority' },
  { name: 'KfW',               desc: 'German development bank' },
  { name: 'Zain',              desc: 'Telecom partner' },
  { name: 'World Learning',    desc: 'International NGO' },
  { name: 'FabLabs',           desc: 'Global FabLabs network' },
]

// Two rows for the mobile marquee (opposite directions).
const half = Math.ceil(PARTNERS.length / 2)
const rowA = PARTNERS.slice(0, half)
const rowB = PARTNERS.slice(half)
</script>

<template>
  <section class="bg-zinc-950 text-white py-20 overflow-hidden">
    <!-- Laptop: heading on the left + bordered partner cells, revealed on scroll -->
    <div class="container-m hidden lg:block">
      <div class="flex items-center gap-8 flex-wrap">
        <Reveal as="div" class="flex-none max-w-full">
          <div class="mono mb-2" style="color: var(--orange);">PARTNERS</div>
          <div class="text-[26px] font-bold max-w-[18ch] leading-tight">
            Trusted and funded by global organizations.
          </div>
        </Reveal>
        <div class="flex-1 flex flex-wrap border-l border-zinc-800">
          <Reveal
            v-for="(p, i) in PARTNERS"
            :key="p.name"
            as="div"
            :delay="80 + i * 30"
            class="px-[30px] py-5 flex-1"
            :class="i < PARTNERS.length - 1 ? 'border-r border-zinc-800' : ''"
            style="flex-basis: 200px;"
          >
            <div class="text-[30px] font-bold">{{ p.name }}</div>
            <div class="caption text-zinc-400 mt-1.5">{{ p.desc }}</div>
          </Reveal>
        </div>
      </div>
    </div>

    <!-- Mobile / tablet: heading + two self-moving marquee rows -->
    <div class="lg:hidden">
      <div class="container-m mb-8">
        <Reveal>
          <div class="mono mb-2" style="color: var(--orange);">PARTNERS</div>
          <div class="text-[26px] font-bold leading-tight">
            Trusted and funded by global organizations.
          </div>
        </Reveal>
      </div>
      <div class="flex flex-col gap-3">
      <div class="marquee">
        <div class="marquee-track marquee-ltr">
          <div
            v-for="(p, i) in [...rowA, ...rowA]"
            :key="'a' + i"
            class="marquee-card"
          >
            <div class="text-[22px] font-bold leading-tight">{{ p.name }}</div>
            <div class="caption text-zinc-400 mt-1.5">{{ p.desc }}</div>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-track marquee-rtl">
          <div
            v-for="(p, i) in [...rowB, ...rowB]"
            :key="'b' + i"
            class="marquee-card"
          >
            <div class="text-[22px] font-bold leading-tight">{{ p.name }}</div>
            <div class="caption text-zinc-400 mt-1.5">{{ p.desc }}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee-track {
  display: flex;
  gap: 12px;
  width: max-content;
}
.marquee-card {
  flex: none;
  width: 210px;
  border: 1px solid var(--zinc-800);
  background: rgba(24, 24, 27, 0.6);
  border-radius: 16px;
  padding: 18px 20px;
}
.marquee-ltr {
  animation: marquee-ltr 34s linear infinite;
}
.marquee-rtl {
  animation: marquee-rtl 34s linear infinite;
}
@keyframes marquee-ltr {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 6px)); }
}
@keyframes marquee-rtl {
  from { transform: translateX(calc(-50% - 6px)); }
  to { transform: translateX(0); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-ltr,
  .marquee-rtl {
    animation: none;
  }
}
</style>
