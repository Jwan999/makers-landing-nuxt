<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 font-mono">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <header class="mb-12 border-b border-gray-800 pb-8">
        <p class="text-sm text-amber-500 uppercase tracking-widest mb-2">Internal Reference Only</p>
        <h1 class="text-4xl font-bold text-white mb-3">Makers Landing Page</h1>
        <p class="text-lg text-gray-400">Information Architecture</p>
        <p class="text-sm text-gray-600 mt-2">This page is not linked anywhere on the site. It's a blueprint for what each section should contain.</p>
      </header>

      <!-- Section 1: Navigation Bar -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">01</span>
          <h2 class="text-2xl font-bold text-white">Navigation Bar</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-2 text-gray-300">
            <li><span class="text-amber-500">Logo:</span> Makers</li>
            <li><span class="text-amber-500">Links:</span> About | What We Do | Impact | Tawtheef | The Space | Articles | Contact</li>
            <li><span class="text-amber-500">CTA Button:</span> "Get Involved"</li>
          </ul>
          <p class="text-sm text-gray-500 mt-4 italic">Sticky nav, minimal. Logo left, links center, CTA right.</p>
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
            <p class="text-gray-300">1-2 sentences: "We train developers, host internships, build real products for the Iraqi market, and give makers a space to work."</p>
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
                <p class="text-2xl font-bold text-white">93</p>
                <p class="text-xs text-gray-400">Products Created</p>
              </div>
            </div>
            <p class="text-xs text-gray-600 mt-3 italic">Source: GIZ & FabLabs. Confirm with boss for latest figures.</p>
          </div>
        </div>
      </section>

      <!-- Section 3: About -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">03</span>
          <h2 class="text-2xl font-bold text-white">About / Who We Are</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-3 text-gray-300">
            <li><span class="text-amber-500">Origin Story:</span> Founded in 2017 as IoT Maker, rebranded to Makers of Baghdad. Started as a FabLab, grew into a full innovation hub.</li>
            <li><span class="text-amber-500">Mission:</span> Creating job opportunities in IT, developing workforce capabilities, transforming perceptions of the labor market in Iraq, and encouraging youth to develop startups.</li>
            <li><span class="text-amber-500">Backing:</span> Supported by GIZ (German Federal Ministry for Economic Cooperation) and USAID.</li>
            <li><span class="text-amber-500">Visual:</span> Photo of the team or the space.</li>
          </ul>
        </div>
      </section>

      <!-- Section 4: Five Pillars -->
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
              <h3 class="text-white font-semibold mb-1">4. Product Development</h3>
              <p class="text-gray-400 text-sm">Small in-house dev team building tech tools for the Iraqi market. Tawtheef is the flagship product.</p>
            </div>
            <div class="bg-gray-800 rounded p-4">
              <h3 class="text-white font-semibold mb-1">5. Maker Space / FabLab</h3>
              <p class="text-gray-400 text-sm">Hands-on space for prototyping and fabrication. Equipment: 3D printers, CNC milling machines, laser cutting/engraving, circuit board production.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Programs -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">05</span>
          <h2 class="text-2xl font-bold text-white">Programs & Initiatives</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div class="space-y-4">
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">Masarat</h3>
              <p class="text-gray-400 text-sm">6-month job acceleration program covering programming, graphic design, and 3D modeling. Funded by USAID.</p>
            </div>
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">Female Founders</h3>
              <p class="text-gray-400 text-sm">Incubation program supporting and empowering women entrepreneurs in Iraq.</p>
            </div>
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">Climathon</h3>
              <p class="text-gray-400 text-sm">Climate change hackathon tackling community climate challenges.</p>
            </div>
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">Jump-Start</h3>
              <p class="text-gray-400 text-sm">3-month internship program for graduates of Makers training programs.</p>
            </div>
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">10,000 Coders for Kids</h3>
              <p class="text-gray-400 text-sm">Non-profit initiative by IoT Kids introducing coding and technology to children.</p>
            </div>
            <div class="border-l-2 border-amber-500 pl-4">
              <h3 class="text-white font-semibold">Maker Camp</h3>
              <p class="text-gray-400 text-sm">Annual event bringing makers together.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Impact -->
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
              <p class="text-3xl font-bold text-amber-500">93</p>
              <p class="text-xs text-gray-400 mt-1">Products Created</p>
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
          <p class="text-xs text-gray-600 mt-4 italic">Career placements and alumni startups are from the 2019-2023 period (GIZ data). Verify all numbers with latest data before launch.</p>
        </div>
      </section>

      <!-- Section 7: Tawtheef -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">07</span>
          <h2 class="text-2xl font-bold text-white">Tawtheef — Flagship Product</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-3 text-gray-300">
            <li><span class="text-amber-500">What:</span> Employment platform connecting Iraqi job seekers with public and private sector opportunities.</li>
            <li><span class="text-amber-500">Features:</span> Smart job matching, skills-based profile system, employer dashboard.</li>
            <li><span class="text-amber-500">URL:</span> tawtheef.makersiq.org</li>
            <li><span class="text-amber-500">Visual:</span> Product screenshot or interactive mockup.</li>
            <li><span class="text-amber-500">Context:</span> Part of the Iraqi government's wider program addressing unemployment. Built and maintained by Makers' in-house dev team.</li>
          </ul>
          <div class="mt-4 pt-4 border-t border-gray-800">
            <p class="text-sm text-gray-500 mb-3">Product Stats (verify these):</p>
            <div class="grid grid-cols-3 gap-3">
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-xl font-bold text-white">1,200+</p>
                <p class="text-xs text-gray-400">Users</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-xl font-bold text-white">500+</p>
                <p class="text-xs text-gray-400">Job Matches</p>
              </div>
              <div class="bg-gray-800 rounded p-3 text-center">
                <p class="text-xl font-bold text-white">50+</p>
                <p class="text-xs text-gray-400">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 8: Articles -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">08</span>
          <h2 class="text-2xl font-bold text-white">Articles / Blog</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-3 text-gray-300">
            <li><span class="text-amber-500">Content:</span> Latest 3-4 articles pulled from the Makers articles system.</li>
            <li><span class="text-amber-500">Source:</span> makers-articles.vercel.app (dashboard.makersiq.org API)</li>
            <li><span class="text-amber-500">Card Format:</span> Title, excerpt, date, thumbnail image.</li>
            <li><span class="text-amber-500">CTA:</span> "View All Articles" linking to the articles site.</li>
          </ul>
          <p class="text-sm text-gray-500 mt-4 italic">Note: Articles may need to be fetched from an API or hardcoded if the API (dashboard.makersiq.org) is unreliable.</p>
        </div>
      </section>

      <!-- Section 9: The Space -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">09</span>
          <h2 class="text-2xl font-bold text-white">The Space</h2>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul class="space-y-3 text-gray-300">
            <li><span class="text-amber-500">Location:</span> Al Sina'a Street, Baghdad, Al Rusafa, 10069, Iraq</li>
            <li><span class="text-amber-500">Vibe:</span> "Modest. Central. Community-Run."</li>
            <li><span class="text-amber-500">Amenities:</span> High-speed WiFi, workstations, prototyping tools, event space, coffee/tea</li>
            <li><span class="text-amber-500">FabLab Equipment:</span> 3D printers, CNC milling machines, laser cutting/engraving, circuit board production</li>
            <li><span class="text-amber-500">Visuals:</span> Photos of the space (interior shots, equipment, people working)</li>
            <li><span class="text-amber-500">Map:</span> Google Maps embed or link</li>
            <li><span class="text-amber-500">Booking:</span> Co-work booking link (bit.ly/42ZVbv8)</li>
          </ul>
        </div>
      </section>

      <!-- Section 10: Partners -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">10</span>
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

      <!-- Section 11: Contact -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">11</span>
          <h2 class="text-2xl font-bold text-white">Contact / Get Involved</h2>
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
            </div>
            <div>
              <p class="text-sm text-gray-500 uppercase tracking-wide mb-3">CTAs for Different Audiences</p>
              <ul class="space-y-2 text-gray-300">
                <li>Join a Bootcamp</li>
                <li>Apply for Internship</li>
                <li>Book Co-Working</li>
                <li>Partner With Us</li>
              </ul>
              <p class="text-sm text-gray-500 mt-3 italic">Could be buttons or a simple contact form.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 12: Footer -->
      <section class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">12</span>
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

      <footer class="mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        <p>This is an internal reference page. Not linked in the main navigation.</p>
        <p class="mt-1">Navigate to <span class="text-amber-500">/ia</span> to view this page.</p>
      </footer>
    </div>
  </div>
</template>
