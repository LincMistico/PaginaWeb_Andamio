# RULES — Reglas del proyecto Andamio Labs

Pautas acordadas con el dueño del proyecto (Guillermo Barrera) durante el desarrollo.
Vigencia: permanente hasta que se indique lo contrario. Cualquier agente o colega que
trabaje en este repositorio debe respetarlas.

---

## 1. Git sub versión solo bajo orden explícita

Nunca se ejecutan comandos de Git (add, commit, push, merge, rebase, branch, o
cualquier otro) salvo que Guillermo lo ordene de forma explícita en la conversación.

- Cuando Guillermo diga "sube cambios a git" (o similar): el agente puede hacer
  `git add`, `git commit` con un mensaje descriptivo y `git push`.
- Antes de commitear: revisar el `git diff`. Si aparece trabajo del dueño, es válido;
  el mensaje del commit debe describir exactamente ese contenido.
- Fuera de esa orden, las modificaciones al código quedan solo en local.

## 2. Alcance exacto de las órdenes

Cada orden se ejecuta tal cual se pide, sin ampliarla. Si pide un comando concreto,
se ejecuta ese comando y nada más. No encadenar acciones derivadas (commits, pushes,
edits extra) no pedidas.

## 3. Diseño de banners: los verdes son definitivos

Los colores verdes (`#00e50f`, y variantes vistas como `#00e549`) en los banners y
textos de Andamio Labs NO se corrigen. Fue decisión de diseño del dueño, confirmada
dos veces. No proponer el reemplazo por el cyan `#00E5D9` de `banner.json` ni tocar
esos estilos.

## 4. Repositorio y visibilidad

- Lugar: https://github.com/LincMistico/PaginaWeb_Andamio
- Visibilidad: publico

## 5. Flujo de trabajo

- Rama de trabajo: `main` (pull → trabajar → commit → push, solo si se ordena).
- Verificación mínima antes de cualquier entrega de código: compilar con
  `cd web && pnpm build` (tsc + Vite). Si el build no pasa, no está listo.
- Documentación del proyecto en `.docs/` (DEPLOY.md, DESIGN.md, GIT.md, BITACORA.md,
  RULES.md). Toda documentación nueva va ahí, en español.

## 6. Registro asesor

Cuando surjan decisiones permanentes (que vayan más allá de esta conversación), se dejan
escritas en RULES.md y/o BITACORA.md.

En BITACORA.md se registra cada sesión de trabajo: fecha, participantes, acciones,
commits, decisiones y pendientes.

## 7. Entorno

- Desarrollo local: `cd web && pnpm dev` → `http://localhost:5173`
- Producción: `cd web && pnpm build` → salida en `web/dist/`
- Node.js 20 LTS o superior.
