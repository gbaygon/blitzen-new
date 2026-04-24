# Blitzen Insights - Landing Page

## Stack
- **Astro 5** (static output) + **Tailwind CSS v4** (via `@tailwindcss/vite`) + TypeScript
- Font: Inter (self-hosted via `@fontsource/inter`)
- Formulario: Formspree (`xwpkjqvl`) -> paula@blitzeninsights.com
- Analytics: Google Analytics G-910LX0KGER
- Deploy target: Vercel/Netlify/GitHub Pages (100% static)

## Comandos
- `npm run dev` — dev server (puerto 4321)
- `npm run build` — genera `dist/` con archivos estaticos
- `npm run preview` — preview del build

## Estructura
```
src/
  components/
    layout/    BaseLayout.astro, Header.astro, Footer.astro
    sections/  Hero, About, Services, Differentiators, Methodology, Results, Contact
    ui/        Logo.astro, Button.astro, Card.astro, SectionHeading.astro, WhatsAppFab.astro
  pages/       index.astro (ensambla todo)
  styles/      global.css (Tailwind v4 @theme tokens + animaciones)
  lib/         constants.ts (datos empresa, servicios, nav, stats)
public/        favicon.svg, robots.txt
```

## Paleta de colores (definida en global.css @theme)
- **Brand (azul):** brand-50 (#eff6ff) a brand-900 (#070e1a). Principal: brand-500 (#2563eb), oscuro: brand-800 (#0a1628)
- **Acento (amber):** amber-400 (#fbbf24), amber-500 (#f59e0b), amber-600 (#d97706)
- **Neutros:** slate de Tailwind

## Logo
SVG minimalista de faro geometrico en `Logo.astro`. Props: `variant` (mark|horizontal|vertical), `size` (sm|md|lg), `dark` (boolean). Mismo SVG como favicon en `public/favicon.svg`.

## Secciones (orden en index.astro)
1. **Header** — sticky, transparente->blur on scroll, hamburguesa mobile
2. **Hero** — full viewport, bg oscuro con grid CSS, 2 CTAs, stats bar
3. **About** (#nosotros) — 2 columnas, SVG abstracto decorativo
4. **Services** (#servicios) — 6 cards dark con iconos SVG inline
5. **Differentiators** (#diferenciadores) — 3 cards light
6. **Methodology** (#metodologia) — timeline 4 pasos
7. **Results** (#resultados) — contadores animados + 3 testimonios placeholder
8. **Contact** (#contacto) — form Formspree + info contacto
9. **Footer** — 4 columnas, logo vertical, copyright 2026
10. **WhatsAppFab** — boton flotante verde, wa.me/5491131845820

## Animaciones
- `.fade-in-up` + `.visible` — IntersectionObserver en index.astro
- `.stagger-children` — delay escalonado para grids
- `.hero-grid` — patron de lineas CSS en hero
- Contadores animados — script en Results.astro con IntersectionObserver

## Datos de contacto
- Email: paula@blitzeninsights.com
- Telefono: (011) 3184-5820
- WhatsApp: 5491131845820
- Ubicacion: Buenos Aires, Argentina

## Pendientes / mejoras posibles
- Reemplazar testimonios placeholder con reales
- Agregar OG image real (`public/og-image.png`)
- Optimizar fonts (solo cargar subsets latin/latin-ext, no cyrillic/greek/vietnamese)
- Agregar sitemap.xml
- Verificar Formspree ID real (`xwpkjqvl` es placeholder, confirmar con Paula)
- Test mobile exhaustivo
- Lighthouse audit y optimizaciones
- Considerar agregar pagina de gracias post-formulario
