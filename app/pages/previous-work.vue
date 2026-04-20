<script setup lang="ts">
const accomplishments = [
  { number: '15,000+', label: 'Beneficiaries' },
  { number: '200+', label: 'Training Sessions' },
  { number: '140+', label: 'Products Built' },
  { number: '200+', label: 'SMEs Supported' },
  { number: '2,000+', label: 'Jobs Created' },
]

const projects = [
  {
    name: 'Green Tech and Digital Transformation Hackathon',
    desc: 'A green technology and digital transformation hackathon for Iraqi MSMEs and SMEs in Basra and Muthanna seeking to strengthen their business capacities and access financing.',
    duration: '2 Months (2026)',
    donor: 'ILO',
  },
  {
    name: "Ta'zeez - Promotion of SME Development",
    desc: 'Financial education and business development for Iraqi entrepreneurs and MSMEs seeking to strengthen their financial management capabilities and access financing.',
    duration: '7 Months (2025-2026)',
    donor: 'ILO / KfW',
  },
  {
    name: 'Fintech Hackathon',
    desc: 'Showcasing innovative solutions in financial technology to support digital transformation and enhance financial inclusion in Iraq.',
    duration: '2 Months (2025)',
    donor: 'GIZ',
  },
  {
    name: 'GEW 2025',
    desc: 'Annual intensive innovation event bringing together Iraq\'s brightest tech minds to develop AI-powered solutions addressing critical challenges.',
    duration: '1 Month (2025)',
    donor: 'GEN / Central Bank / Zain',
  },
  {
    name: 'DAP',
    desc: 'Training program preparing young talents for the creative job market. 300 participants learn fundamentals online, top 40 advance to intensive in-person training.',
    duration: '6 Months (2026)',
    donor: 'Australian Embassy in Iraq',
  },
  {
    name: 'Mahara (ProDIGI)',
    desc: 'Innovative graphic design program empowering Iraqi youth across six governorates, combining online self-learning with practical training hackathons.',
    duration: '12 Months (2025-2026)',
    donor: 'GIZ ProDIGI',
  },
  {
    name: 'Tamkeen',
    desc: 'Acceleration for Iraqi SMEs and growth-stage businesses. Expert mentorship, training, and technical support in business development, financial systems, and legal frameworks.',
    duration: '15 Months (2025-2026)',
    donor: 'GIZ ProDIGI',
  },
  {
    name: 'Evidence Based Skills Mapping',
    desc: 'Comprehensive Skills Mapping Tool assessing Iraqi workforce skills, aligning them with EU and GCC labor market demands with interactive dashboard.',
    duration: '10 Months (2025-2026)',
    donor: 'IOM',
  },
  {
    name: 'Tawtheef',
    desc: 'Employment readiness for 75 women combining internships and mentorship in HR, interior design, and graphic design with AI-driven job matching.',
    duration: '9 Months (2025)',
    donor: 'WUSC / Global Affairs Canada',
  },
  {
    name: 'Social Protection FGDs',
    desc: 'Outreach strategy for 14 focus group discussions with diverse worker groups across Iraq on social protection and working conditions.',
    duration: '12 Months (2025-2026)',
    donor: 'ILO',
  },
  {
    name: 'Employment Platforms Mapping',
    desc: 'National policy for mapping existing job placement platforms and channels in Iraq for improved job accessibility.',
    duration: '5 Months (2025)',
    donor: 'IOM',
  },
  {
    name: 'Regular Migration Dashboard',
    desc: 'Structured information for Iraqis seeking safe, legal migration pathways to Europe with essential skills and knowledge for safe migration.',
    duration: '5 Months (2025)',
    donor: 'IOM',
  },
  {
    name: 'Private Sector Mapping & Engagement Strategy',
    desc: 'Private sector mapping and engagement strategy for DRC across eight strategic locations in Iraq.',
    duration: '2 Months (2024-2025)',
    donor: 'DRC',
  },
  {
    name: 'Mapping the Role of FinTech in Iraq',
    desc: 'Comprehensive overview of how fintech reshapes Iraq\'s economic ecosystem, mapping the current landscape and exploring future opportunities.',
    duration: '3 Months (2024)',
    donor: 'Central Bank of Iraq',
  },
  {
    name: 'American Space for Entrepreneurship',
    desc: 'Establishment of the American Space for Entrepreneurship and Innovation at Makers of Baghdad, driving innovation and fostering entrepreneurial mindset.',
    duration: '2 Years (2024)',
    donor: 'US Embassy',
  },
  {
    name: 'Mahara (GIZ)',
    desc: 'Employment readiness empowering youth, women, and aspiring individuals with expert-led, market-driven skill development and hands-on learning.',
    duration: '6 Months (2024)',
    donor: 'GIZ',
  },
  {
    name: 'Wifra - Agribusiness Support',
    desc: 'AgriTech Accelerator enhancing entrepreneurship skills of 20 agri-food businesses through tailored training and practical exercises.',
    duration: '6 Months (2024)',
    donor: 'European Union',
  },
  {
    name: 'ToT MOLSA',
    desc: 'Enhancing entrepreneurship skills of Ministry of Labour staff through tailored training, coaching, and beneficiary mentoring in Diwaniya.',
    duration: '9 Months (2024)',
    donor: 'WFP',
  },
  {
    name: 'IT Curriculum Development',
    desc: 'Equipping trainers with skills and knowledge to effectively teach information technology.',
    duration: '3 Months (2024)',
    donor: 'WFP',
  },
  {
    name: 'Grant Management Platform',
    desc: 'Educational platform for comprehensive grant administration training and resources, developed for the US Embassy.',
    duration: '3 Months (2024)',
    donor: 'World Learning',
  },
  {
    name: 'Masarat 2 - SME Development',
    desc: 'Empowering and accelerating growth of SMEs in Baghdad through comprehensive training and mentorship for scaling and sustainable profits.',
    duration: '6 Months (2024)',
    donor: 'USAID',
  },
  {
    name: 'Masarat 1 - Job Readiness',
    desc: 'Comprehensive job readiness with six pathways to empower youth in pursuing meaningful employment, concluded with a job fair.',
    duration: '6 Months (2023)',
    donor: 'USAID',
  },
  {
    name: 'Climathon',
    desc: 'Pre-incubation targeting climate change enthusiasts, helping 30 entrepreneurs start businesses addressing local climate issues.',
    duration: '5 Months (2023)',
    donor: 'GIZ',
  },
]

</script>

<template>
  <div>
    <NavBar />

    <!-- Hero -->
    <section class="pt-32 pb-16 bg-zinc-900">
      <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        <p class="text-orange-400 font-semibold text-lg mb-3">Our Portfolio</p>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6">Previous Work</h1>
        <p class="text-zinc-400 text-lg max-w-2xl" style="line-height: 1.7;">
          A track record of impactful projects across employment, business development, and research — delivered with international partners across Iraq.
        </p>
      </div>
    </section>

    <!-- Accomplishments -->
    <section class="py-16 bg-zinc-800">
      <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div
            v-for="stat in accomplishments"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-3xl md:text-4xl font-extrabold text-orange-400">{{ stat.number }}</p>
            <p class="text-zinc-400 text-sm font-medium mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-24 bg-zinc-100">
      <div class="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        <div class="text-center mb-16">
          <p class="text-orange-700 font-semibold text-lg mb-3">Projects</p>
          <h2 class="text-3xl md:text-5xl font-bold text-zinc-800">What We've Delivered</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b-2 border-zinc-300">
                <th class="py-4 px-4 text-zinc-800 font-bold text-sm">Project</th>
                <th class="py-4 px-4 text-zinc-800 font-bold text-sm hidden md:table-cell">Duration</th>
                <th class="py-4 px-4 text-zinc-800 font-bold text-sm hidden lg:table-cell">Donor</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="project in projects"
                :key="project.name"
                class="border-b border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                <td class="py-4 px-4">
                  <p class="text-zinc-800 font-semibold text-sm">{{ project.name }}</p>
                  <p class="text-zinc-500 text-xs mt-1 max-w-md">{{ project.desc }}</p>
                </td>
                <td class="py-4 px-4 text-zinc-500 text-sm hidden md:table-cell whitespace-nowrap">{{ project.duration }}</td>
                <td class="py-4 px-4 text-zinc-500 text-sm hidden lg:table-cell">{{ project.donor }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>