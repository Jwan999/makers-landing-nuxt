// https://nuxt.com/docs/api/configuration/nuxt-config
import frontendConquerorPlugin from 'frontend-conqueror/plugin'
import { createRequire } from 'module'

const isDev = process.env.NODE_ENV !== 'production'
// Auto-derive overlay cache-bust from the pinned plugin version so we never
// have to bump `?v=` by hand. Cloudflare aggressively caches the overlay; the
// query string makes each release a distinct cache key.
const fcVersion = createRequire(import.meta.url)('frontend-conqueror/package.json').version

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Makers — Where Baghdad Builds',
      meta: [
        { name: 'description', content: 'Baghdad\'s innovation hub. Training, internships, co-working, product development, and a makerspace — all under one roof.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: isDev
        ? [{ src: '/__frontend-conqueror/overlay.js', defer: true }]
        : [{ src: `https://gate.makersiq.org/makers/overlay.js?v=${fcVersion}`, defer: true }],
    },
  },
  vite: {
    plugins: [
      // Run the plugin in BOTH dev and prod builds so data-edit-source
      // attributes ship to production for Test mode's issue bubbles to anchor
      // to. `autoInject` / `autoStartAgent` stay dev-only — in prod the
      // overlay is loaded by the explicit <script src> above.
      frontendConquerorPlugin({
        projectRoot: process.cwd(),
        locales: ['en'],
        agentPort: 54324,
        gate: {
          url: process.env.NUXT_PUBLIC_GATE_URL || 'http://localhost:54322',
          project: 'makers',
        },
        autoInject: isDev,
        autoStartAgent: isDev,
      }),
    ],
  },
})
