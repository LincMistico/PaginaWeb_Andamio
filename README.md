# PaginaWeb Andamio

Sitio web de **Andamio Labs** (laboratorio de ideas: exploración, I+D y prototipado) y
**Andamio Tech** (fábrica de software: consultoría y desarrollo a medida).

Landing de una sola página: Inicio, Servicios, Nosotros y Contacto.

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 8](https://vite.dev) (build y servidor de desarrollo)
- [Tailwind CSS v4](https://tailwindcss.com) con tokens de marca en `web/src/index.css`
- [Oxlint](https://oxc.rs) para lint
- Tipografía: Satoshi (Fontshare)

## Arranque rápido

Requiere Node.js 20 LTS o superior y pnpm.

```bash
cd web
pnpm install
pnpm dev
```

| Comando        | Qué hace                                  |
| -------------- | ----------------------------------------- |
| `pnpm dev`     | Servidor de desarrollo con recarga en vivo |
| `pnpm build`   | Typecheck (`tsc -b`) + build a `web/dist/` |
| `pnpm preview` | Sirve el build de producción localmente    |
| `pnpm lint`    | Lint con Oxlint                            |

Antes de entregar cualquier cambio, `pnpm build` tiene que pasar.

## Estructura

```
.
├── .docs/                      Documentación del proyecto (en español)
│   ├── RULES.md                Reglas de trabajo: léelas antes de tocar nada
│   ├── BITACORA.md             Registro de cada sesión de trabajo
│   ├── DEPLOY.md               Cómo desplegar (Netlify, Vercel, servidor propio)
│   ├── DESIGN.md               Referencia visual
│   ├── GIT.md                  Comandos de Git para el equipo
│   └── banner.json             Especificación de los banners publicitarios
└── web/                        Aplicación Vite + React
    ├── index.html
    ├── public/img/             Logos y fondos servidos tal cual
    └── src/
        ├── main.tsx            Punto de entrada
        ├── App.tsx             Compone el layout y las secciones
        ├── index.css           Tokens de marca (@theme), utilidades y animaciones
        ├── sections/           Una sección de la landing por archivo (Hero, Services, About, Contact)
        ├── components/
        │   ├── layout/         Header y Footer
        │   └── banners/        BannerRectangle (300×250) y BannerLeaderboard (970×250)
        └── data/               Contenido compartido: navegación, correo y marcas Labs/Tech
```

### Convenciones

- **Una sección = un archivo** en `src/sections/`. El contenido que solo usa esa sección vive ahí mismo.
- **Contenido que se usa en más de un lugar** (menú, correo, datos de cada marca) va en `src/data/`.
- **Banners:** un componente por formato. Labs y Tech son el mismo componente con `brand={brands.labs}` o `brand={brands.tech}`.
- **Colores:** siempre con los tokens de `index.css` (`bg-canvas`, `text-ink`, `text-tech`, ...). La paleta sale de los logos.
- Los acentos verdes de los banners Labs (`#00e50f`) son decisión de diseño. Ver `.docs/RULES.md` §3.

## Paleta

| Token        | Hex       | Uso                                  |
| ------------ | --------- | ------------------------------------ |
| `canvas`     | `#F8FAFB` | Fondo                                |
| `surface`    | `#EEF3F6` | Superficie secundaria                |
| `ink`        | `#0C314C` | Texto (navy del wordmark)            |
| `ink-soft`   | `#185A82` | Texto secundario                     |
| `tech`       | `#185A82` | Etiquetas de Andamio Tech            |
| `labs`       | `#2E6A24` | Verde legible para texto             |
| `brand-a..d` | `#0F4C86` → `#1A8BB8` → `#2EC4A8` → `#8ED64A` | Degradado de la "A" del logo |

## Documentación

- Reglas del proyecto: [.docs/RULES.md](.docs/RULES.md)
- Despliegue: [.docs/DEPLOY.md](.docs/DEPLOY.md)
- Git para el equipo: [.docs/GIT.md](.docs/GIT.md)
- Bitácora: [.docs/BITACORA.md](.docs/BITACORA.md)
