# Instrucciones para GitHub Copilot — Fondo Verde Institute (FVI)

## Contexto del proyecto

Este proyecto es la **actualización del sitio web** [fondoverdeinstitute.com](https://fondoverdeinstitute.com) (actualmente en Joomla) a **Astro** usando el template **AstroWind**.

- **Repo/framework:** Astro + Tailwind CSS + TypeScript
- **Template base:** [AstroWind](https://astrowind.vercel.app/)
- **Web de referencia (Joomla antigua):** https://fondoverdeinstitute.com

## Reglas de desarrollo

### Siempre que se cree una nueva página:
1. **Consultar el contenido original** en `https://fondoverdeinstitute.com<ruta>` usando `fetch_webpage` para obtener el contenido real.
2. **Usar los layouts existentes:** `~/layouts/PageLayout.astro` como layout principal para páginas internas.
3. **Reutilizar los widgets disponibles** en `src/components/widgets/` — nunca crear componentes nuevos si uno existente sirve.
4. **Seguir el patrón** de las páginas ya creadas: `conocenos.astro`, `director.astro`.

### Usar Widgets disponibles (en `src/components/widgets/`):

### Usar Utils disponibles en `src/utils/`:

### Navegación (menú principal — `src/navigation.ts`):
El menú **"El Instituto"** incluye las siguientes páginas (en orden de desarrollo):
1. `/conocenos` ✅ Creada
2. `/director` ✅ Creada
3. `/consejo-academico-internacional` ✅ Creada
4. `/comite-direccion` — pendiente
5. `/profesorado-investigacion` — pendiente
6. `/acreditacion-reconocimiento` — pendiente
7. `/empleo-instituto` — pendiente
8. `/fondo-verde-accion-social` — pendiente

### Convenciones de código:
- **Regla de Migración Masiva:** Para migrar Maestrías y otros programas futuros, seguir estrictamente el flujo documentado en `docs/MIGRACION_PROGRAMAS.md` (Scraping -> Tipado TS -> Astro -> Build/Clean).
- **Tagline** del Hero siempre: `"El Instituto"` para las páginas del menú "El Instituto".
- **Metadatos:** siempre incluir `title`, `description` y `keywords` en el frontmatter.
- **Imágenes locales:** guardar en `src/assets/images/` con formato `.webp` y referenciar con `~/assets/images/`.
- **Imágenes externas temporales:** pueden referenciarse directamente de `fondoverdeinstitute.com` mientras se migran.
- **Idioma:** todo el contenido en **español**.
- **Iconos:** usar siempre de la librería `tabler:` (ej. `tabler:leaf`, `tabler:certificate`).

### Colores y estilo:
- Color primario: verde (`text-primary`, `text-accent`)
- Color secundario: anaranjado (`text-secondary`) usado en el nombre "Institute" del logo y subtítulos
- **Modo Oscuro (Dark Mode):**
  - Fondo base: `bg-page` (Midnight Blue original: `rgb(3 6 32)`).
  - Fondo elevado (cajas, secciones): `bg-pageDark` (Slate-900: `rgb(15 23 42)`).
  - **REGLA CRÍTICA:** Nunca definir colores como números sueltos en `CustomStyles.astro`. Usar siempre el formato completo `rgb(...)` para evitar errores de renderizado (fondo blanco).
- Fondos alternos en secciones: `bg-blue-50 dark:bg-pageDark`.

## Estructura del proyecto
```
src/
  pages/          # Páginas Astro (.astro)
  components/
    widgets/      # Widgets reutilizables (Hero, Content, Features, etc.)
    ui/           # Componentes UI base
    common/       # Utilidades comunes
  layouts/        # Layouts principales
  assets/images/  # Imágenes locales (.webp preferido)
  navigation.ts   # Definición de menús de navegación
  config.yaml     # Configuración general del sitio
```
