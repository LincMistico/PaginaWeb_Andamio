# 📘 GIT.md — Guía de comandos esenciales

> Repositorio: `PaginaWeb_Andamio` (rama principal: `main`)
> Guía rápida para el día a día del equipo en este proyecto.

---

## 📥 Monitorizar cambios (actualizar tu copia local)

```bash
git status            # Ver qué archivos han cambiado en tu carpeta
git pull              # Descargar y fusionar los cambios que subieron tus colegas
git fetch             # Descargar cambios sin fusionar (solo "mirar" lo nuevo)
git log --oneline -10 # Ver los últimos 10 commits del proyecto
git diff              # Ver el detalle de lo que has modificado (línea a línea)
```

---

## ✍️ Guardar tus cambios

```bash
git add nombreArchivo.tsx   # Añadir un archivo específico
git add .                   # Añadir TODOS los archivos modificados/nuevos
git status                  # Revisa que lo añadido sea lo correcto
git commit -m "Añado sección de contacto"   # Guardar con un mensaje descriptivo
git push                    # Subir tus commits a GitHub
```

**Buenas prácticas para los mensajes de commit:**
- Corto y descriptivo: qué cambio y por qué.
- Imperativo: *"Añade…"*, *"Corrige…"*, *"Refactoriza…"*.
- Nada de "cambios", "arreglos", "asdf".

---

## 🌿 Ramas (trabajo sin romper la versión estable)

```bash
git switch -c feature-banners   # Crear una rama nueva y cambiarte a ella
git switch main                 # Volver a la rama principal
git branch                      # Listar ramas y ver en cuál estás
git branch -d feature-banners   # Borrar una rama ya fusionada

# Cuando acabas tu trabajo en esa rama:
git add . && git commit -m "Terminados los banners"
git push -u origin feature-banners   # Primer push de la rama
                                     # (las siguientes veces: git push)

# Cuando entran cambios de otros mientras trabajas:
git switch main && git pull     # Actualizar main primero
git switch feature-banners
git rebase main                 # Integrar los cambios nuevos en tu rama
```

**Nombres recomendados de ramas:**
- `feature/nombre` — funcionalidad nueva
- `fix/nombre` — corrección de un bug
- `docs/nombre` — documentación

---

## 🔀 Fusionar a `main`

**Opción A — desde la terminal:**

```bash
git switch main
git merge feature-banners       # Traer tu trabajo a main
git push
```

**Opción B — recomendada en equipo:** crear un **Pull Request** en la web de GitHub
(desde la rama `feature-...` hacia `main`) para que el resto del equipo revise el
código antes de fusionarlo.

---

## 🧯 Salvavidas

```bash
git restore nombreArchivo      # Descartar cambios de un archivo
git restore .                  # Descartar TODOS los cambios no guardados (¡cuidado!)
git commit --amend             # Corregir el mensaje del último commit (si aún no hay push)
git reset --soft HEAD~1        # Deshacer el último commit (sin perder los cambios)
```

---

## 💡 La rutina de cada día

```bash
git pull                  # 1. Antes de empezar: traer lo de tus colegas
# ... trabajas ...
git status                # 2. Mirar qué has tocado
git add .                 # 3. Preparar tus cambios
git commit -m "..."       # 4. Guardar
git pull --rebase         # 5. Si alguien subió algo mientras trabajabas
git push                  # 6. Compartir con el equipo
```

---

## 📦 Proyecto (nota técnica)

Este proyecto usa **Vite + React** dentro de la carpeta `web/`. Tras clonar:

```bash
cd web
npm install   # Instalar dependencias (crea node_modules, ignorado por git)
npm run dev   # Servidor de desarrollo local
npm run build # Compilar producción (genera dist/, ignorado por git)
```

`node_modules/` y `dist/` **no se suben a GitHub** (están en `.gitignore`);
cada persona los genera localmente con `npm install` y `npm run build`.
