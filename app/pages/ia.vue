<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 font-mono">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <header class="mb-12 border-b border-gray-800 pb-8">
        <p class="text-sm text-amber-500 uppercase tracking-widest mb-2">Internal Reference Only</p>
        <h1 class="text-4xl font-bold text-white mb-3">Makers Landing Page</h1>
        <p class="text-lg text-gray-400">Information Architecture — Revised</p>
        <p class="text-sm text-gray-600 mt-2">This page is not linked anywhere on the site. It's a blueprint for what each section should contain.</p>

        <div class="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
          <p class="text-sm text-amber-500 uppercase tracking-wide mb-2">Site Structure — 3 Pages</p>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="text-white font-semibold">/ (Landing Page)</span> — Main page with hero, pillars, solutions, impact, partners, FAQs, contact &amp; location, footer</li>
            <li><span class="text-white font-semibold">/about</span> — About Us + The Space (co-work, training halls, open space) — <span class="text-amber-400">Coming Soon</span></li>
            <li><span class="text-white font-semibold">/programs</span> — All programs listing — <span class="text-amber-400">Coming Soon</span></li>
          </ul>
        </div>
      </header>

      <!-- ═══════════════════════════════════════ -->
      <!-- LANDING PAGE SECTIONS -->
      <!-- ═══════════════════════════════════════ -->

      <div class="mb-8">
        <h2 class="text-lg text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-2">Landing Page ( / )</h2>
      </div>

      <!-- Section 1: Navigation Bar -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">01</span>
          <h2 class="text-2xl font-bold text-white">Navigation Bar</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-2 text-gray-300">
            <li><span class="text-amber-500">Logo:</span> Makers</li>
            <li><span class="text-amber-500">Links:</span> About Us | Programs | Solutions | Impact | Contact</li>
            <li><span class="text-amber-500">CTA Button:</span> "Get Involved"</li>
          </ul>
          <p class="text-sm text-gray-500 mt-4 italic">Sticky nav, minimal. Logo left, links center, CTA right. "About Us" and "Programs" link to their respective pages (coming soon).</p>
        </div>
      </section>

      <!-- Section 2: Hero -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">02</span>
          <h2 class="text-2xl font-bold text-white">Hero Section</h2>
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Boss Priority</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Tagline</p>
            <p class="text-gray-300">"Baghdad's Innovation Hub"</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Headline</p>
            <p class="text-gray-300">Bold, mission-driven statement about building Iraq's tech future</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Sub-copy</p>
            <p class="text-gray-300">1-2 sentences: "We train people, run internship programs, conduct market research, and build tech solutions — all under one roof in Baghdad."</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">CTA Buttons</p>
            <p class="text-gray-300">"Explore Programs" (primary) + "Visit The Space" (secondary)</p>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-800">
            <p class="text-sm text-amber-500 uppercase tracking-wide mb-3">Impact Numbers (Prominent Display)</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">4,500+</p>
                <p class="text-xs text-gray-400">People Trained</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">20+</p>
                <p class="text-xs text-gray-400">Startups Incubated</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">200+</p>
                <p class="text-xs text-gray-400">Programs Delivered</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">X</p>
                <p class="text-xs text-gray-400">Researches Conducted</p>
              </div>
            </div>
            <p class="text-xs text-gray-600 mt-3 italic">Source: GIZ & FabLabs. Confirm with boss for latest figures. "Researches Conducted" number TBD.</p>
          </div>
        </div>
      </section>

      <!-- Section 3: About (Simplified) -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">03</span>
          <h2 class="text-2xl font-bold text-white">About / Who We Are</h2>
          <span class="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Simplified</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-3 text-gray-300">
            <li><span class="text-amber-500">Brief Intro:</span> Short mission statement and what Makers does — keep it concise, the full story lives on the About Us page.</li>
            <li><span class="text-amber-500">CTA:</span> "Learn More About Us" linking to /about (coming soon).</li>
          </ul>
          <p class="text-sm text-gray-500 mt-4 italic">This is a teaser, not the full about section. Team photo and detailed origin story, mission, backing info all live on the dedicated About Us page.</p>
        </div>
      </section>

      <!-- Section 4: What We Do — The 5 Pillars -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">04</span>
          <h2 class="text-2xl font-bold text-white">What We Do — The 5 Pillars</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Each pillar gets a card with icon, title, and short description.</p>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">1. Training Bootcamps</h3>
              <p class="text-gray-400 text-sm">Intensive programs in web development, mobile development, UI/UX design. Hands-on, project-based learning. Topics also include 3D modeling, electronics, robotics, and AI.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">2. Internships</h3>
              <p class="text-gray-400 text-sm">Real projects, real deadlines. Interns work alongside the dev team on shipping products. Bridge from training to career.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">3. Co-Working Space</h3>
              <p class="text-gray-400 text-sm">Desks, wifi, coffee, community. A place for freelancers, startups, and remote workers in Baghdad.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">4. End-to-End Product Growth</h3>
              <p class="text-gray-400 text-sm">We partner with you from idea to launch and beyond — whether it's shaping your concept, building the product, or scaling it to market. Full-cycle support to turn your vision into a working solution.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">5. Research</h3>
              <p class="text-gray-400 text-sm">Analyzing sectors and providing actionable insights and solutions — mapping the Iraqi market to help businesses and organizations make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Solutions / Tech Portfolio -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">05</span>
          <h2 class="text-2xl font-bold text-white">Our Solutions — Tech Portfolio</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Showcase of tech products built by Makers. This doubles as a portfolio — if businesses want a custom solution, they can reach out.</p>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Tawtheef</h3>
              <p class="text-gray-400 text-sm">Employment platform connecting Iraqi job seekers with public and private sector opportunities. Smart job matching, skills-based profiles.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Contract Generator</h3>
              <p class="text-gray-400 text-sm">A contractor website that generates contracts, creates templates, and streamlines the contracting process for businesses.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Presentation Maker</h3>
              <p class="text-gray-400 text-sm">Tool for creating professional presentations quickly and efficiently.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Judging Panel</h3>
              <p class="text-gray-400 text-sm">Digital judging system for competitions, hackathons, and evaluation events.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Loan Eligibility Checker</h3>
              <p class="text-gray-400 text-sm">Tool for businesses to check eligibility for loans from Iraqi government programs.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Reports System</h3>
              <p class="text-gray-400 text-sm">Generates structured reports from user-entered data, automating documentation and analysis.</p>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-gray-800">
            <p class="text-sm text-gray-400"><span class="text-amber-500">CTA:</span> "Need a custom solution? Let's build it together." — links to contact section.</p>
          </div>
          <div class="mt-4 pt-4 border-t border-gray-800">
            <p class="text-sm text-gray-400"><span class="text-amber-500">Articles:</span> Each solution can link to related articles from makers-articles.vercel.app (case studies, write-ups, behind-the-scenes). Articles live within the solutions context, not as a standalone section.</p>
          </div>
        </div>
      </section>

      <!-- Section 6: Impact / By The Numbers -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">06</span>
          <h2 class="text-2xl font-bold text-white">Impact / By The Numbers</h2>
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Boss Priority</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Dedicated section with large, animated counters. Visual, scroll-triggered animations.</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">4,500+</p>
              <p class="text-xs text-gray-400 mt-1">People Trained</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">49%</p>
              <p class="text-xs text-gray-400 mt-1">Female Participants</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">200+</p>
              <p class="text-xs text-gray-400 mt-1">Programs Delivered</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">20+</p>
              <p class="text-xs text-gray-400 mt-1">Startups Incubated</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">X</p>
              <p class="text-xs text-gray-400 mt-1">Visitors</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">221</p>
              <p class="text-xs text-gray-400 mt-1">Career Placements</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">32</p>
              <p class="text-xs text-gray-400 mt-1">Alumni Startups</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">6+</p>
              <p class="text-xs text-gray-400 mt-1">Years Running</p>
            </div>
          </div>
          <p class="text-xs text-gray-600 mt-4 italic">Career placements and alumni startups are from the 2019-2023 period (GIZ data). Visitors number TBD. Verify all numbers with latest data before launch.</p>
        </div>
      </section>

      <!-- Section 7: Partners & Supporters -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">07</span>
          <h2 class="text-2xl font-bold text-white">Partners & Supporters</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">GIZ</h3>
              <p class="text-gray-400 text-sm">Deutsche Gesellschaft fur Internationale Zusammenarbeit. Supported Makers with equipment and financial resources on behalf of the German Federal Ministry for Economic Cooperation and Development (BMZ).</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">USAID</h3>
              <p class="text-gray-400 text-sm">Funds the Masarat job acceleration program.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">FabLabs Network</h3>
              <p class="text-gray-400 text-sm">Part of the global FabLabs network (fablabs.io).</p>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-4 italic">Display as logo row. Add any other partners/sponsors as needed.</p>
        </div>
      </section>

      <!-- Section 8: FAQs -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">08</span>
          <h2 class="text-2xl font-bold text-white">FAQs</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Accordion-style FAQ section. Suggested questions:</p>
          <div class="space-y-3">
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">How can I join a training program?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about registration process, linking to /programs page.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">What is the co-working space and how do I book?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about co-work amenities and booking, linking to /about page.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">Can Makers build a custom tech solution for my business?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about the solutions portfolio and how to reach out.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">How do I apply for an internship?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about internship process and requirements.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">Who funds Makers?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about GIZ, USAID, and partnership model.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">What kind of research does Makers conduct?</p>
              <p class="text-gray-500 text-xs mt-1">Answer about market analysis, sector mapping, and research services.</p>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-4 italic">Finalize questions based on most common inquiries. Accordion expand/collapse interaction.</p>
        </div>
      </section>

      <!-- Section 9: Contact & Location -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">09</span>
          <h2 class="text-2xl font-bold text-white">Contact & Location</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="text-sm text-gray-500 uppercase tracking-wide mb-3">Contact Info</p>
              <ul class="space-y-2 text-gray-300">
                <li><span class="text-amber-500">Email:</span> hello@makersiq.org</li>
                <li><span class="text-amber-500">Phone:</span> +9647834915325</li>
                <li><span class="text-amber-500">Facebook:</span> facebook.com/iotmakeriq</li>
                <li><span class="text-amber-500">Instagram:</span> instagram.com/makers.iq</li>
                <li><span class="text-amber-500">YouTube:</span> Makers YouTube Channel</li>
              </ul>
              <p class="text-sm text-gray-500 mt-3 italic">Simple contact form or direct email link.</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 uppercase tracking-wide mb-3">Location</p>
              <ul class="space-y-2 text-gray-300">
                <li><span class="text-amber-500">Map:</span> Google Maps embed showing Makers location</li>
                <li><span class="text-amber-500">Address:</span> Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</li>
              </ul>
              <p class="text-sm text-gray-500 mt-3 italic">Full space details (co-work, training halls, amenities) live on the About Us page.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 10: Footer -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">10</span>
          <h2 class="text-2xl font-bold text-white">Footer</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-2 text-gray-300">
            <li><span class="text-amber-500">Logo:</span> Makers logo</li>
            <li><span class="text-amber-500">Quick Links:</span> All navigation items</li>
            <li><span class="text-amber-500">Social Icons:</span> Facebook, Instagram, YouTube</li>
            <li><span class="text-amber-500">Copyright:</span> &copy; 2024 Makers of Baghdad. All rights reserved.</li>
          </ul>
        </div>
      </section>

      <!-- ═══════════════════════════════════════ -->
      <!-- ABOUT US PAGE -->
      <!-- ═══════════════════════════════════════ -->

      <div class="mb-8 mt-16">
        <h2 class="text-lg text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-2">About Us Page ( /about ) — Coming Soon</h2>
      </div>

      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Coming Soon Page</span>
          <h2 class="text-2xl font-bold text-white">About Us + The Space</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">This page shows "Coming Soon" to users. The sections below are documented as TODOs for when the page is built.</p>

          <div class="space-y-6">
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">About Us Section</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Full origin story (founded 2017 as IoT Maker, rebranded to Makers of Baghdad)</li>
                <li>- Detailed mission statement</li>
                <li>- Backing: GIZ (German Federal Ministry for Economic Cooperation) and USAID</li>
                <li>- Team photo</li>
                <li>- Team members / leadership (if applicable)</li>
              </ul>
            </div>

            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">The Space — Co-Working</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Description of the co-working area</li>
                <li>- Amenities: High-speed WiFi, workstations, coffee/tea</li>
                <li>- Photos of the co-working space</li>
                <li>- <span class="text-amber-400">CTA: "Apply to Co-Work" button/form</span></li>
                <li>- Pricing info (if applicable)</li>
              </ul>
            </div>

            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">The Space — Training Halls</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Description of training hall facilities</li>
                <li>- Capacity, equipment, setup</li>
                <li>- Photos of training halls</li>
                <li>- <span class="text-amber-400">CTA: "Register for Training Hall" button/form</span></li>
              </ul>
            </div>

            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">The Space — Open Space</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Description of the open/community area</li>
                <li>- What it's used for (events, meetups, casual work)</li>
                <li>- Photos</li>
              </ul>
            </div>

            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">Location Details</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Full address: Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</li>
                <li>- Google Maps embed</li>
                <li>- Directions / how to get there</li>
                <li>- Operating hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════ -->
      <!-- PROGRAMS PAGE -->
      <!-- ═══════════════════════════════════════ -->

      <div class="mb-8 mt-16">
        <h2 class="text-lg text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-2">Programs Page ( /programs ) — Coming Soon</h2>
      </div>

      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Coming Soon Page</span>
          <h2 class="text-2xl font-bold text-white">All Programs</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">This page shows "Coming Soon" to users. The sections below are documented as TODOs for when the page is built.</p>

          <div class="space-y-4">
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">Masarat</h3>
              <p class="text-gray-400 text-sm">6-month job acceleration program covering programming, graphic design, and 3D modeling. Funded by USAID.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, eligibility, dates, apply CTA</p>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">Female Founders</h3>
              <p class="text-gray-400 text-sm">Incubation program supporting and empowering women entrepreneurs in Iraq.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, eligibility, dates, apply CTA</p>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">Climathon</h3>
              <p class="text-gray-400 text-sm">Climate change hackathon tackling community climate challenges.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, past editions, dates, register CTA</p>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">Jump-Start</h3>
              <p class="text-gray-400 text-sm">3-month internship program for graduates of Makers training programs.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, eligibility, dates, apply CTA</p>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">10,000 Coders for Kids</h3>
              <p class="text-gray-400 text-sm">Non-profit initiative by IoT Kids introducing coding and technology to children.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, age groups, schedule, register CTA</p>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold">Maker Camp</h3>
              <p class="text-gray-400 text-sm">Annual event bringing makers together.</p>
              <p class="text-gray-500 text-xs mt-1">TODO: Detailed description, past editions, dates, register CTA</p>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-4 italic">Each program should have: full description, eligibility criteria, duration, dates, photos/media, and a CTA button to apply/register.</p>
        </div>
      </section>

      <footer class="mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        <p>This is an internal reference page. Not linked in the main navigation.</p>
        <p class="mt-1">Navigate to <span class="text-amber-500">/ia</span> to view this page.</p>
      </footer>
    </div>
  </div>
</template>
