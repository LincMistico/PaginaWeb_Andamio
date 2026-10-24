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
