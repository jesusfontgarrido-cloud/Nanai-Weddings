/**
 * Vista previa navegable para claude.ai (Artifact). Copia dist/ a una carpeta lista para
 * publicar: rutas relativas, fuentes dentro del CSS, la carpeta _astro renombrada a assets
 * (el visor reserva los nombres que empiezan por «_»), la página principal sin esqueleto de
 * documento (lo pone el visor) y html[data-preview] para que el formulario no envíe nada.
 *
 * Uso: npm run build && node scripts/vista-previa.mjs dist <carpeta-de-salida>
 */
import fs from 'node:fs';
import path from 'node:path';

const [dist, out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });

const pages = [
  'index.html', '404.html', 'tarifas/index.html', 'profesionales/index.html', 'historias/index.html',
  'historias/historia-01/index.html', 'historias/historia-02/index.html', 'historias/historia-03/index.html',
  'aviso-legal/index.html', 'privacidad/index.html', 'cookies/index.html',
];

const fontData = (p) => `data:font/woff2;base64,${fs.readFileSync(path.join(dist, p)).toString('base64')}`;
const assets = new Set();

const rel = (url, depth) => {
  const m = url.match(/^([^?#]*)(.*)$/);
  let p = m[1];
  const rest = m[2];
  let target;
  if (p === '/' || p === '') target = 'index.html';
  else if (/\.[a-z0-9]+$/i.test(p)) {
    target = p.slice(1);
    assets.add(target);
  } else target = p.slice(1).replace(/\/$/, '') + '/index.html';
  target = target.replace(/^_astro\//, 'assets/');
  return '../'.repeat(depth) + target + rest;
};

const rewriteHtml = (html, depth) => {
  // Sin precarga de fuentes: van dentro del CSS
  html = html.replace(/<link rel="preload" href="\/fonts\/[^"]*"[^>]*>/g, '');
  html = html.replace(/\s(href|src|poster|action)="(\/(?!\/)[^"]*)"/g, (_, a, u) => ` ${a}="${rel(u, depth)}"`);
  html = html.replace(/\s(srcset)="([^"]*)"/g, (_, a, v) => ` ${a}="${v.split(',').map((part) => {
    const [u, ...d] = part.trim().split(/\s+/);
    return [u.startsWith('/') ? rel(u, depth) : u, ...d].join(' ');
  }).join(', ')}"`);
  // Descargas: el visor las bloquea; mejor que abran el PDF
  html = html.replace(/\sdownload(?=[\s>])/g, '');
  html = html.replace(/url\((['"]?)\/fonts\/([^'")]+)\1\)/g, (_, q, f) => `url(${fontData('fonts/' + f)})`);
  return html;
};

for (const page of pages) {
  const depth = page.split('/').length - 1;
  let html = fs.readFileSync(path.join(dist, page), 'utf8');
  html = rewriteHtml(html, depth);
  if (page === 'index.html') {
    html = html.replace(/<title>[^<]*<\/title>/, '<title>Nanai Weddings</title>');
    // El visor pone su propio esqueleto: se publica el contenido de head y body.
    const head = html.match(/<head>([\s\S]*)<\/head>/)[1];
    const body = html.match(/<body>([\s\S]*)<\/body>/)[1];
    const title = head.match(/<title>[\s\S]*?<\/title>/)[0];
    const headRest = head.replace(title, '').replace(/<meta charset="utf-8"\s*\/?>/, '').replace(/<meta name="viewport"[^>]*>/, '');
    html = `${title}\n<script>document.documentElement.lang='es';document.documentElement.setAttribute('data-preview','');</script>\n${headRest}\n${body}`;
  } else {
    html = html.replace('<html lang="es">', '<html lang="es" data-preview>');
  }
  fs.mkdirSync(path.dirname(path.join(out, page)), { recursive: true });
  fs.writeFileSync(path.join(out, page), html);
}

// Recursos: los CSS llevan las fuentes dentro; el resto, tal cual.
for (const a of [...assets]) {
  const src = path.join(dist, a);
  if (!fs.existsSync(src)) { console.log('FALTA', a); continue; }
  const dest = path.join(out, a.replace(/^_astro\//, 'assets/'));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (a.endsWith('.css')) {
    let css = fs.readFileSync(src, 'utf8');
    css = css.replace(/url\((['"]?)\/fonts\/([^'")]+)\1\)/g, (_, q, f) => `url(${fontData('fonts/' + f)})`);
    css = css.replace(/url\((['"]?)\/(?!\/)([^'")]+)\1\)/g, (_, q, f) => `url(../${f})`);
    fs.writeFileSync(dest, css);
  } else fs.copyFileSync(src, dest);
}
console.log('pages', pages.length, 'assets', assets.size);
