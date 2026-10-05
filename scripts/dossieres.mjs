/**
 * Imprime los dossieres en PDF desde la web (las hojas de /dossier/*), para que digan
 * siempre lo mismo que ella. Uso: `npm run build && npm run dossieres`, y otra vez
 * `npm run build` para que los PDF nuevos entren en dist/ (o súbelos tal cual: se
 * copian también a dist/dossieres si existe).
 *
 * Necesita Chrome o Chromium. Si no lo encuentra, indícalo con CHROME=/ruta/al/chrome.
 */
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'public', 'dossieres');
const port = 4391;
const sheets = [
  { path: '/dossier/fotografia/', file: 'nanai-weddings-dossier-fotografia.pdf' },
  { path: '/dossier/video/', file: 'nanai-weddings-dossier-video.pdf' },
];

const candidates = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const chrome = candidates.find((path) => existsSync(path));
if (!chrome) {
  console.error('No encuentro Chrome. Usa CHROME=/ruta/al/chrome npm run dossieres');
  process.exit(1);
}
if (!existsSync(join(root, 'dist'))) {
  console.error('Primero: npm run build');
  process.exit(1);
}

const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { cwd: root, stdio: 'ignore' });
const stop = () => server.kill();
process.on('exit', stop);

const base = `http://localhost:${port}`;
for (let i = 0; i < 60; i++) {
  try {
    if ((await fetch(base)).ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 500));
}

mkdirSync(out, { recursive: true });
for (const sheet of sheets) {
  const target = join(out, sheet.file);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=10000',
    `--print-to-pdf=${target}`,
    base + sheet.path,
  ], { stdio: 'ignore' });
  const kb = Math.round(statSync(target).size / 1024);
  console.log(`✓ ${sheet.file} (${kb} KB)`);
  const dist = join(root, 'dist', 'dossieres');
  if (existsSync(join(root, 'dist'))) {
    mkdirSync(dist, { recursive: true });
    copyFileSync(target, join(dist, sheet.file));
  }
}

stop();
process.exit(0);
