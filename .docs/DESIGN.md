# DESIGN — Referencia visual de Andamio

> Laboratorio y fábrica de software: técnico, claro, confiable. La marca se apoya en
> el navy del wordmark y en el degradado azul → verde de la "A" del logo.

**Tema:** claro. Los tokens viven en `web/src/index.css` (bloque `@theme`) y se usan
como clases de Tailwind (`bg-canvas`, `text-ink`, `text-tech`, ...). No se escriben
hex sueltos en los componentes, salvo los banners (ver Excepciones).

La paleta sale de los logos (`web/public/img/logo-andamio-labs*.png`,
`logo-andamio-tech.png`). La versión anterior de este archivo era una referencia de
otro sitio (paleta arena/bronce) y se reemplazó el 2026-10-23.

---

## Colores

| Token        | Hex       | Rol                                                    | Contraste sobre `canvas` |
| ------------ | --------- | ------------------------------------------------------ | ------------------------ |
| `canvas`     | `#F8FAFB` | Fondo de la página (el blanco frío del logo)           | —                        |
| `surface`    | `#EEF3F6` | Superficie secundaria, bandas de sección               | —                        |
| `ink`        | `#0C314C` | Texto principal (navy del wordmark "ANDAMIO")          | 12.9 : 1                 |
| `ink-soft`   | `#185A82` | Texto secundario                                       | 7.1 : 1                  |
| `tech`       | `#185A82` | Etiquetas de Andamio Tech                              | 7.1 : 1                  |
| `labs`       | `#2E6A24` | Verde de Labs en texto (el verde del logo no alcanza)  | 6.3 : 1                  |
| `brand-a`    | `#0F4C86` | Degradado de marca, inicio                             | decorativo               |
| `brand-b`    | `#1A8BB8` | Degradado de marca; hover de enlaces                   | 3.7 : 1 (solo grande)    |
| `brand-c`    | `#2EC4A8` | Degradado de marca                                     | decorativo               |
| `brand-d`    | `#8ED64A` | Degradado de marca, final                              | decorativo               |

**Reglas de uso**
- Texto normal: solo `ink`, `ink-soft`, `tech` o `labs` (todos pasan WCAG AA 4.5:1).
- `brand-a..d` son decorativos: franja superior (`.brand-stripe`) y degradado del hero.
  No usarlos para texto de cuerpo.
- Un solo acento de marca por vista. El degradado aparece en la franja superior y en
  el rombo del header; no repetirlo en tarjetas ni botones.

### Excepciones: banners

Los banners (`web/src/components/banners/`) siguen `.docs/banner.json` y llevan sus
colores en `web/src/data/brands.ts`:

- Fondo `#2B2D2F`, imagen sobre `#ACBCCB`.
- Acento Labs `#00e50f` (y `#00e549` en el corte del leaderboard): **decisión del dueño,
  no se cambia** (RULES.md §3).
- Acento Tech `#00E5D9`.

---

## Tipografía

**Satoshi** (Fontshare, pesos 400 / 500 / 700) en toda la página. Los banners usan
Arial Black / Roboto / Arial según `banner.json`.

| Token              | Tamaño | Uso                                     |
| ------------------ | ------ | --------------------------------------- |
| `text-caption`     | 14px   | Etiquetas, nav, footer (mayúsculas con tracking) |
| `text-body-sm`     | 16px   | Enlaces secundarios                     |
| `text-body`        | 18px   | Párrafos (line-height 1.5, máx. ~42ch)  |
| `text-subheading`  | 24px   | Títulos de tarjeta (h3)                 |
| `text-heading-sm`  | 26px   | Correo de contacto                      |
| títulos de sección | `clamp(36px, 6vw, 75px)` | h2, peso 500, tracking -0.03em |

---

## Layout

- Página de una columna, alineada a la izquierda, con `px-6` (móvil) / `px-10` (desktop).
- Secciones separadas por `.hairline` (1px `ink` al 15%) y 60–80px de aire.
- Grids: 3 columnas en Servicios (`md:`), 2 en Nosotros (`lg:`). En móvil, todo apilado.

---

## Movimiento

Criterio: rápido y discreto. Es un sitio corporativo, no un juego.

| Elemento                  | Valor                                                 |
| ------------------------- | ----------------------------------------------------- |
| Entrada de hero/secciones | `rise-in` 600ms `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`), desplazamiento 12px |
| Escalonado                | 160ms entre elementos                                 |
| Hover de enlaces          | 160ms `ease`, solo con `@media (hover: hover) and (pointer: fine)` |
| Botones (CTA)             | `active:scale-[0.97]`, 150ms ease-out                 |

- Animar solo `transform` y `opacity`.
- Nunca `ease-in` en UI, nunca entrar desde `scale(0)`.
- Respetar `prefers-reduced-motion` (ya está en `index.css`).

---

## Imágenes

- Logo del hero: `logo-andamio-labs-hero.png` (1400px, ~0.8 MB). No usar
  `Logo Andamio Labs 4K.png` (9 MB) en la página; es el original de archivo.
- `logo-andamio-labs.svg` **no es fiel** al logo (tipografía y figura distintas); no usarlo
  hasta que se redibuje.
- Siempre con `alt` descriptivo; el logo del hero es el `<h1>` de la página.

---

## Pendientes de diseño

- Favicon cuadrado con la "A" del logo (hoy es el logo horizontal y a 16px no se distingue).
- Versión vectorial fiel de ambos logos.

