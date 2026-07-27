<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 font-mono">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <header class="mb-12 border-b border-gray-800 pb-8">
        <p class="text-sm text-amber-500 uppercase tracking-widest mb-2">Internal Reference Only</p>
        <h1 class="text-4xl font-bold text-white mb-3">Makers Landing Page</h1>
        <p class="text-lg text-gray-400">Information Architecture — Revised v2</p>
        <p class="text-sm text-gray-600 mt-2">This page is not linked anywhere on the site. It's a blueprint for what each section should contain.</p>

        <div class="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
          <p class="text-sm text-amber-500 uppercase tracking-wide mb-2">Site Structure — 3 Pages</p>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="text-white font-semibold">/ (Landing Page)</span> — Hero, about teaser, 3 pillars, Makers Suite, services, impact, FAQs, contact form, footer</li>
            <li><span class="text-white font-semibold">/about</span> — Who We Are + The Space (co-work, training halls, open space) — <span class="text-amber-400">Coming Soon</span></li>
            <li><span class="text-white font-semibold">/data-hub</span> — Data Hub — <span class="text-amber-400">Coming Soon</span></li>
          </ul>
        </div>

        <div class="mt-4 bg-red-900/30 border border-red-800 rounded-lg p-4">
          <p class="text-sm text-red-400 uppercase tracking-wide mb-2">Key Naming Rules</p>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li>— NEVER use "startups" — always say <span class="text-white font-semibold">"Businesses and SMEs"</span></li>
            <li>— NEVER use "programs" — the programs page is removed</li>
            <li>— Technologies section is called <span class="text-white font-semibold">"Makers Suite"</span></li>
            <li>— Navbar only has page links (Who We Are, Data Hub) — sections are NOT in navbar</li>
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
            <li><span class="text-amber-500">Page Links:</span> Who We Are | Data Hub</li>
            <li><span class="text-amber-500">CTA Button:</span> "Get Involved"</li>
          </ul>
          <p class="text-sm text-gray-500 mt-4 italic">Sticky nav, minimal. Logo left, links center, CTA right. Sections (pillars, suite, impact, services, contact) are NOT in the navbar — they are scroll sections on the landing page only.</p>
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
            <p class="text-gray-300">"Baghdad's Data-Driven Hub"</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Headline</p>
            <p class="text-gray-300">Empowering entrepreneurs and SME owners across Iraq through capacity building, applied research, and ecosystem development.</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Sub-copy</p>
            <p class="text-gray-300">We boost youth employability and create job opportunities by connecting talent with the private sector, government, and international partners.</p>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">CTA Buttons</p>
            <p class="text-gray-300">"Explore What We Do" (primary) + "Get In Touch" (secondary)</p>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-800">
            <p class="text-sm text-amber-500 uppercase tracking-wide mb-3">Impact Numbers (Prominent — Visitors First)</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">50,000+</p>
                <p class="text-xs text-gray-400">Visitors</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">15,000+</p>
                <p class="text-xs text-gray-400">Beneficiaries</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">2,000+</p>
                <p class="text-xs text-gray-400">Jobs Created</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-2xl font-bold text-white">200+</p>
                <p class="text-xs text-gray-400">SMEs Supported</p>
              </div>
            </div>
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
            <li><span class="text-amber-500">Brief Intro:</span> Short mission statement — data-driven hub empowering entrepreneurs and SME owners across Iraq. No mention of startups.</li>
            <li><span class="text-amber-500">CTA:</span> "Learn More About Us" linking to /about (coming soon).</li>
          </ul>
        </div>
      </section>

      <!-- Section 4: What We Do — The 3 Pillars -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">04</span>
          <h2 class="text-2xl font-bold text-white">What We Do — The 3 Pillars</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Each pillar gets a card with icon, title, and description based on Makers of Baghdad's core components.</p>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">1. Employment</h3>
              <p class="text-gray-400 text-sm">Creating sustainable and inclusive job opportunities for youth, with a strong focus on skills development and the digital economy. We boost youth employability by connecting young talent with the private sector, government, and international partners through targeted initiatives and national events.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">2. Businesses & SMEs</h3>
              <p class="text-gray-400 text-sm">Strengthening Iraq's entrepreneurial ecosystem by supporting innovation, fostering local production, and enabling sustainable business growth. We provide mentorship, acceleration, and technical support in business development, financial systems, and legal frameworks.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">3. Research</h3>
              <p class="text-gray-400 text-sm">Producing data-driven studies and sector-mapping reports that guide policymakers and program designers in creating effective solutions for beneficiaries. Our research informs policy and practice across Iraq's economic landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Makers Suite -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">05</span>
          <h2 class="text-2xl font-bold text-white">Makers Suite — Tech Portfolio</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Showcase of tech products built by Makers. Formerly called "Solutions" — now branded as "Makers Suite".</p>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Tawtheef</h3>
              <p class="text-gray-400 text-sm">Advanced digital employment platform with ATS-compliant CV builder and intelligent matching tools.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Contract Generator</h3>
              <p class="text-gray-400 text-sm">Generates contracts and templates, streamlining the contracting process for businesses.</p>
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
              <p class="text-gray-400 text-sm">Helps businesses check eligibility for loans from Iraqi government initiatives.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Reports System</h3>
              <p class="text-gray-400 text-sm">Generates structured reports from user-entered data, automating documentation and analysis.</p>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-gray-800">
            <p class="text-sm text-gray-400"><span class="text-amber-500">CTA:</span> "Need a custom solution? Let's build it together." — links to contact section.</p>
          </div>
        </div>
      </section>

      <!-- Section 6: Services -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">06</span>
          <h2 class="text-2xl font-bold text-white">Our Services</h2>
          <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">New Section</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Services offered by Makers based on expertise and facilities.</p>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Training Halls</h3>
              <p class="text-gray-400 text-sm">Fully equipped training facilities for intensive bootcamps, workshops, and capacity building sessions in web development, design, robotics, AI, and more.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Curriculum Development</h3>
              <p class="text-gray-400 text-sm">Custom curriculum design for IT, entrepreneurship, and digital skills training. Developed for organizations including WFP, US Embassy, and ministry-level clients.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Co-Working Spaces</h3>
              <p class="text-gray-400 text-sm">Collaborative workspaces for businesses, SMEs, and remote workers in Baghdad. High-speed WiFi, workstations, and a community-driven environment.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Financial Understanding</h3>
              <p class="text-gray-400 text-sm">Financial education and business development support — including SYIB training, financial management, and connection to loan facilities.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">Investment Readiness</h3>
              <p class="text-gray-400 text-sm">Preparing businesses and SMEs to be investment-ready through due diligence support, data room establishment, mentorship, and positioning for funding opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7: Impact / By The Numbers -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">07</span>
          <h2 class="text-2xl font-bold text-white">Impact / By The Numbers</h2>
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Boss Priority</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Dedicated section with large, animated counters. All statistics from Makers document.</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">50,000+</p>
              <p class="text-xs text-gray-400 mt-1">Visitors</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">15,000+</p>
              <p class="text-xs text-gray-400 mt-1">Beneficiaries</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">200+</p>
              <p class="text-xs text-gray-400 mt-1">Training Sessions</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">140+</p>
              <p class="text-xs text-gray-400 mt-1">Products Built</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">200+</p>
              <p class="text-xs text-gray-400 mt-1">SMEs Supported</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">2,000+</p>
              <p class="text-xs text-gray-400 mt-1">Jobs Created</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">49%</p>
              <p class="text-xs text-gray-400 mt-1">Female Participants</p>
            </div>
            <div class="bg-gray-800 rounded p-4 text-center">
              <p class="text-3xl font-bold text-amber-500">6+</p>
              <p class="text-xs text-gray-400 mt-1">Years Running</p>
            </div>
          </div>
          <p class="text-xs text-gray-600 mt-4 italic">All numbers are placeholder/fake for now. Verify with latest data before launch.</p>
        </div>
      </section>

      <!-- Section 8: FAQs -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">08</span>
          <h2 class="text-2xl font-bold text-white">FAQs</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Accordion-style FAQ section. Updated to remove "programs" references.</p>
          <div class="space-y-3">
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">What does Makers of Baghdad do?</p>
              <p class="text-gray-500 text-xs mt-1">Overview of employment, business support, and research pillars.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">How can Makers help my business or SME?</p>
              <p class="text-gray-500 text-xs mt-1">Business development, mentorship, investment readiness.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">Can Makers build a custom tech solution for my business?</p>
              <p class="text-gray-500 text-xs mt-1">Makers Suite overview and contact CTA.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">What services does Makers offer?</p>
              <p class="text-gray-500 text-xs mt-1">Training halls, curriculum development, co-working, financial understanding, investment readiness.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">Who are Makers' partners?</p>
              <p class="text-gray-500 text-xs mt-1">GIZ, USAID, ILO, IOM, and other international organizations.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <p class="text-white font-semibold text-sm">What kind of research does Makers conduct?</p>
              <p class="text-gray-500 text-xs mt-1">Sector analysis, skills mapping, fintech research, private sector mapping.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 10: Contact Form -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">09</span>
          <h2 class="text-2xl font-bold text-white">Contact Form</h2>
          <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Changed to Form</span>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">Contact form replacing old contact info + map layout.</p>
          <ul class="space-y-2 text-gray-300">
            <li><span class="text-amber-500">Fields:</span> Full Name, Email, Subject, Message</li>
            <li><span class="text-amber-500">CTA:</span> "Send Message" button</li>
            <li><span class="text-amber-500">Side Info:</span> Email, phone, social links, address still visible alongside the form</li>
          </ul>
        </div>
      </section>

      <!-- Section 11: Footer -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">10</span>
          <h2 class="text-2xl font-bold text-white">Footer</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-2 text-gray-300">
            <li><span class="text-amber-500">Logo:</span> Makers logo</li>
            <li><span class="text-amber-500">Quick Links:</span> Who We Are, Data Hub, Contact</li>
            <li><span class="text-amber-500">Social Icons:</span> Facebook, Instagram, YouTube</li>
            <li><span class="text-amber-500">Copyright:</span> &copy; 2024 Makers of Baghdad. All rights reserved.</li>
          </ul>
        </div>
      </section>

      <!-- ═══════════════════════════════════════ -->
      <!-- WHO WE ARE PAGE -->
      <!-- ═══════════════════════════════════════ -->

      <div class="mb-8 mt-16">
        <h2 class="text-lg text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-2">Who We Are Page ( /about ) — Coming Soon</h2>
      </div>

      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Coming Soon Page</span>
          <h2 class="text-2xl font-bold text-white">Who We Are + The Space</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500 mb-4">This page shows "Coming Soon" to users. Same TODO items as before.</p>
          <div class="space-y-6">
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">About Us Section</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Full origin story (founded 2017 as IoT Maker, rebranded to Makers of Baghdad)</li>
                <li>- Mission: data-driven hub empowering entrepreneurs and SME owners across Iraq</li>
                <li>- Backing: GIZ, USAID, ILO, IOM, and other partners</li>
                <li>- Team photo and leadership</li>
              </ul>
            </div>
            <div class="border-l-2 border-amber-500/50 pl-4">
              <h3 class="text-white font-semibold mb-2">The Space</h3>
              <ul class="space-y-1 text-gray-400 text-sm">
                <li>- Co-Working area, Training Halls, Open Space</li>
                <li>- Location: Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════ -->
      <!-- DATA HUB PAGE -->
      <!-- ═══════════════════════════════════════ -->

      <div class="mb-8 mt-16">
        <h2 class="text-lg text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-2">Data Hub Page ( /data-hub ) — Coming Soon</h2>
      </div>

      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">New Page — Coming Soon</span>
          <h2 class="text-2xl font-bold text-white">Data Hub</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p class="text-sm text-gray-500">Coming Soon placeholder page. Future home of Makers' data-driven research, reports, and sector mapping insights.</p>
        </div>
      </section>

      <footer class="mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        <p>This is an internal reference page. Not linked in the main navigation.</p>
        <p class="mt-1">Navigate to <span class="text-amber-500">/ia</span> to view this page.</p>
      </footer>
    </div>
  </div>
</template>