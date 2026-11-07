# Despliegue — Andamio Labs

Sitio estático construido con **Vite + React + TypeScript + Tailwind CSS v4**.

Código fuente: carpeta `web/`.

---

## Requisitos

- [Node.js](https://nodejs.org/) **20 LTS** o superior
- [pnpm](https://pnpm.io/installation) (`npm i -g pnpm`)

Comprobar versiones:

```bash
node -v
pnpm -v
```

---

## Desarrollo local

```bash
cd web
pnpm install
pnpm dev
```

Abrí la URL que imprime Vite (por defecto `http://localhost:5173`).

---

## Build de producción

```bash
cd web
pnpm install
pnpm build
```

Salida: carpeta `web/dist/` (HTML, CSS y JS listos para servir).

Vista previa local del build:

```bash
cd web
pnpm preview
```

---

## Opción A — Netlify (recomendado)

1. Creá una cuenta en [Netlify](https://www.netlify.com/).
2. **Add new site → Import an existing project** (o arrastrá `web/dist` en *Deploy manually*).
3. Si conectás el repo:
   - **Base directory:** `web`
   - **Build command:** `pnpm build`
   - **Publish directory:** `web/dist`
4. Deploy. Netlify asigna una URL `*.netlify.app`.

CLI (opcional):

```bash
cd web
pnpm build
pnpm dlx netlify deploy --prod --dir=dist
```

---

## Opción B — Vercel

1. Instalá la CLI o usá el dashboard de [Vercel](https://vercel.com/).
2. Configuración del proyecto:
   - **Root Directory:** `web`
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
3. Deploy.

CLI:

```bash
cd web
pnpm dlx vercel --prod
```

---

## Opción C — GitHub Pages

1. En `web/vite.config.ts`, definí la base del repo (ejemplo si el repo se llama `dominio-y-web`):

```ts
export default defineConfig({
  base: '/dominio-y-web/',
  plugins: [react(), tailwindcss()],
})
```

2. Build:

```bash
cd web
pnpm build
```

3. Publicá el contenido de `web/dist` en la rama `gh-pages`, o usá una Action que ejecute el build y publique `dist`.

4. Activá Pages en el repo: **Settings → Pages → Deploy from branch/folder**.

---

## Opción D — Servidor propio / hosting compartido

1. Generá el build (`pnpm build` dentro de `web`).
2. Subí **todo** el contenido de `web/dist/` a la raíz del sitio (o a un subdirectorio) vía FTP/SFTP/cPanel.
3. Asegurate de que el servidor sirva `index.html` para rutas desconocidas si más adelante agregás React Router.

Ejemplo con nginx:

```nginx
server {
  listen 80;
  server_name tu-dominio.com;
  root /var/www/andamio-labs;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## Dominio personalizado

1. Desplegá primero en Netlify, Vercel o tu VPS.
2. En el panel del proveedor, agregá el dominio (ej. `andamio.labs` o `www.tuempresa.com`).
3. En el DNS del registrador, apuntá:
   - **A / ALIAS** o **CNAME** según indique el proveedor (Netlify/Vercel muestran los registros exactos).
4. Esperá la propagación DNS (minutos a 48 h) y activá HTTPS (automático en Netlify/Vercel).

---

## Checklist post-despliegue

- [ ] La home carga con tipografía Satoshi y fondo `#F8FAFB`
- [ ] El logo aparece en el hero y en los banners de Labs y Tech (sección Nosotros)
- [ ] Enlaces del menú (`#servicios`, `#nosotros`, `#contacto`) hacen scroll
- [ ] HTTPS activo en el dominio final

---

## Estructura relevante

Ver la sección **Estructura** del [README.md](../README.md) en la raíz.

---

## Comandos útiles

| Acción              | Comando                          |
|---------------------|----------------------------------|
| Instalar dependencias | `cd web && pnpm install`        |
| Desarrollo          | `cd web && pnpm dev`          |
| Build               | `cd web && pnpm build`        |
| Preview del build   | `cd web && pnpm preview`      |
