# Bitácora de trabajo — Andamio Labs

Registro cronológico del trabajo realizado en este proyecto. Una sección por sesión.

---

## 2026-10-23 — Sesión 1: Git, GitHub y corrección de banners

**Participantes:** Guillermo Barrera (dueño del proyecto) + OpenCode (agente).

### Repositorio y GitHub

- Se inicializó Git en la raíz del proyecto (`git init`) y se renombró la rama a `main`.
- Se creó `.gitignore` en la raíz: excluye `node_modules/`, `dist/`, logs, `.env`, archivos de editor y cachés de Vite.
- Se revisó la identidad de Git configurada: Guillermo Barrera `<guillebarrera2@gmail.com>`.
- Primer commit local (`f28fd64`): 32 archivos, ~3.800 líneas, incluyendo el proyecto `web/` (Vite + React + TypeScript + Tailwind v4) y la documentación `.docs/`.
- Se creó el repositorio remoto en GitHub y se conectó como `origin`:
  https://github.com/LincMistico/PaginaWeb_Andamio (privado).
- El remoto tenía un commit inicial con `README.md` generado por GitHub; se integró con `git pull --rebase origin main` sin conflictos.
- Se realizó el primer push y `main` quedó siguiendo a `origin/main`.

### Documentación

- Se creó `.docs/GIT.md` (commit `49d26f5`): guía de comandos esenciales para el equipo (monitorizar cambios, guardar cambios, ramas, fusionar a `main`, salvavidas, rutina diaria y notas técnicas de arranque del proyecto).

### Corrección de banners (sección Nosotros)

**Problema:** los 4 archivos de banners en `web/src/components/` exportaban los mismos nombres de función (`BannerLeaderboard` y `BannerRectangle` duplicados), y en la sección Nosotros la columna de Andamio Tech renderizaba el banner de Andamio Labs (logo equivocado).

**Cambios (commit `f580648`):**

- `BannerRectangle_tech.tsx`: la exportación pasó de `BannerRectangle` a `BannerRectangleTech`.
- `BannerLeaderboard_Tech.tsx`: la exportación pasó de `BannerLeaderboard` a `BannerLeaderboardTech`. Corregidos `aria-label` y `alt` que decían "Andamio Labs".
- `App.tsx`: añadido el import de `BannerRectangleTech`. Columna 1 (Andamio Labs) usa `<BannerRectangle />` (logo Labs); columna 2 (Andamio Tech) usa `<BannerRectangleTech />` (logo Tech).
- Verificación: `npm run build` OK (tsc + Vite).

### Iteración de diseño propia de Guillermo

- Guillermo editó los banners directamente (con el servidor dev y HMR de Vite): colores verdes `#00e50f` en materiales de Andamio Labs, textos "Ideas que Escalan" / "Innovación, prototipado y soluciones listas para el mercado" en `BannerRectangle.tsx`, marco del leaderboard Tech a cyan `#00E5D9`, y `BannerRectangleTech` también en la sección Banners (300×250).
- OpenCode verificó compilación y los subió (commit `0cc2b6f`).

### Pruebas locales

- Servidor de desarrollo (`npm run dev`, Vite v8.3.5) activo durante la sesión en `http://localhost:5173`; detenido al cerrar el día.

### Decisiones tomadas

- Visibilidad del repositorio: privado; colaboradores se invitarán manualmente desde la web de GitHub.
- Push a Git solo cuando Guillermo lo pida explícitamente.
- Los colores verdes de los banners Labs NO se corrigen: son decisión de diseño final.

### Pendientes

- Desplegar la web. Recomendación: Netlify (plan gratuito funciona con repos privados, deploy automático en cada push, previews por Pull Request). Ver `.docs/DEPLOY.md` (Opción A). Vercel vale igual; GitHub Pages descartada (repo privado requiere GitHub Pro).
- Redactar/mejorar el `README.md` raíz como página de bienvenida del proyecto.

---

## 2026-10-23 — Sesión 2: paleta de marca, estructura React y documentación

**Participantes:** Isaac Cruz + Claude Code (agente). Sin commits: todo queda en local
hasta que se ordene subirlo (RULES.md §1).

### Paleta de colores

- `DESIGN.md` era la referencia de otro sitio (paleta arena/bronce) y no venía de la
  marca. Se reemplazó por una paleta tomada de los logos: fondo `#F8FAFB`, texto navy
  `#0C314C`, Tech `#185A82` y el degradado de marca `#0F4C86 → #1A8BB8 → #2EC4A8 → #8ED64A`.
- Tokens semánticos en `web/src/index.css` (`canvas`, `ink`, `tech`, `labs`, `brand-a..d`).
- Los verdes de los banners Labs (`#00e50f`, `#00e549`) quedaron intactos (RULES.md §3).

### Correcciones del front

- Logo del hero: el PNG de 9.1 MB se cambió por `logo-andamio-labs-hero.png` (1400px, 0.8 MB).
- El logo del hero ahora es el `<h1>` de la página, con `alt`.
- En Servicios había texto en blanco sobre fondo claro (invisible); se corrigió.
- Se quitaron los enlaces a `#banners`, una sección que ya no existía.
- El banner de Labs se anunciaba como "Andamio Tech" (`aria-label` y `alt`); se corrigió.
- Animaciones: 600ms con curva ease-out, hover solo en dispositivos con mouse y
  `active:scale` en los botones de los banners.
- Ortografía: Exploración, Escríbenos, Cuéntanos.

### Estructura del proyecto

- `App.tsx` se dividió en `src/sections/` (Hero, Services, About, Contact),
  `src/components/layout/` (Header, Footer) y `src/data/` (site.ts, brands.ts).
- Los 4 banners duplicados quedaron en 2 componentes (`BannerRectangle`,
  `BannerLeaderboard`) con la prop `brand`.
- `banner.json` se movió a `.docs/`.
- Se borró el boilerplate de Vite (`web/README.md`, `favicon.svg`, `icons.svg`, `src/assets/`).
- `README.md` raíz reescrito: stack, comandos, estructura, convenciones y paleta.

### Gestor de paquetes

- Se adoptó **pnpm**: se borró `package-lock.json` y queda `pnpm-lock.yaml`.
  DEPLOY.md, RULES.md y GIT.md se actualizaron con los comandos de pnpm.

### Menú móvil (paso 3)

- `Header.tsx` tiene ahora un botón "Menú / Cerrar" por debajo de `md`, que abre un panel
  con las secciones. Usa `useState`; se cierra al elegir un enlace o con Escape, y en ese
  caso el foco vuelve al botón. Accesibilidad: `aria-expanded`, `aria-controls` e
  `inert` cuando está cerrado.
- Transición de 200ms (opacidad + 8px) con ease-out; sin desplazamiento si el usuario
  pidió reducir el movimiento.
- En móvil se oculta "Hablar con nosotros ↗", porque Contacto ya está en el menú.

### Decisiones tomadas

- El sitio se queda en React y se usará el framework para funcionalidad real
  (menú móvil, formulario, ES/EN), no solo como plantilla.
- Estructura de carpetas: react.dev no impone una. Se agrupa por tipo
  (secciones, componentes, datos) con un máximo de 3 niveles.

### Pendientes

- Favicon cuadrado y versión vectorial fiel de los logos (el SVG actual no es fiel).
- Aclarar la visibilidad del repo: RULES.md §4 dice público y la sesión 1 dice privado.
- Decidir si se conservan los banners Leaderboard (970×250), que no se usan en la página.
- Paso 3: formulario de contacto o versión ES/EN.
