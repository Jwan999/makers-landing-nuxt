// Load gate secrets from /root/makers-gate.env (not committed). Each line
// like "KEY=value" populates process.env. Falls through silently if the file
// is missing (e.g. in dev or on a fresh server pre-setup).
try {
  const fs = require('fs');
  const raw = fs.readFileSync('/root/makers-gate.env', 'utf8');
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const i = trimmed.indexOf('=');
    if (i < 0) continue;
    const k = trimmed.slice(0, i).trim();
    const v = trimmed.slice(i + 1).trim();
    if (k && process.env[k] === undefined) process.env[k] = v;
  }
} catch {}

module.exports = {
  apps: [
    {
      // frontend-conqueror gate — backs Test mode for makers-landing
      // (makersiq.org). The host app is SSG (npm run generate → dist/),
      // so there's no frontend PM2 process — only the gate.
      // Secrets (GATE_ADMIN_PASSWORD, GATE_JWT_SECRET) live in
      // /root/makers-gate.env and are loaded into process.env above so PM2
      // inherits them. Never commit secrets to this file.
      name: 'makers-gate',
      script: 'node_modules/frontend-conqueror/gate/server.js',
      env: {
        NODE_ENV: 'production',
        GATE_PORT: 54325,
        GATE_HOST: '127.0.0.1',
        GATE_PUBLIC_URL: 'https://gate.makersiq.org',
        GATE_PROJECT_NAME: 'makers',
        GATE_DATA: '/var/data/makers-gate.json',
        GATE_ADMIN_PASSWORD: process.env.GATE_ADMIN_PASSWORD,
        GATE_JWT_SECRET: process.env.GATE_JWT_SECRET,
      },
    },
  ],
};
