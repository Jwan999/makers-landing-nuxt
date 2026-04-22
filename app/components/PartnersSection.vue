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
</script>

<template>
  <section class="bg-zinc-950 text-white py-20">
    <div class="container-m">
      <div class="flex items-center gap-8 flex-wrap partners-wrap">
        <div class="flex-none max-w-full">
          <div class="mono mb-2" style="color: var(--orange);">PARTNERS</div>
          <div class="text-[26px] font-bold max-w-[18ch] leading-tight">
            Trusted and funded by global organizations.
          </div>
        </div>
        <div class="flex-1 flex flex-wrap border-l border-zinc-800 partners-grid">
          <div
            v-for="(p, i) in PARTNERS"
            :key="p.name"
            class="px-[30px] py-5 flex-1"
            :class="i < PARTNERS.length - 1 ? 'border-r border-zinc-800' : ''"
            style="flex-basis: 200px;"
          >
            <div class="text-[30px] font-bold">{{ p.name }}</div>
            <div class="caption text-zinc-400 mt-1.5">{{ p.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .partners-wrap { flex-direction: column; align-items: flex-start; }
  .partners-grid { border-left: 0 !important; border-top: 1px solid var(--zinc-800); }
}
</style>