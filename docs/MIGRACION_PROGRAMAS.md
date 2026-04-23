# Flujo de Trabajo para Migración de Programas (Doctorados y Maestrías)

Este documento describe el procedimiento estandarizado para migrar programas académicos desde el sitio antiguo de Joomla a la nueva plataforma en Astro. Debe ser consultado por el asistente de IA antes de iniciar la migración masiva de Maestrías u otros programas.

## Criterios Editoriales y Adaptación de Contenido

Durante el proceso de vuelco de información hacia los componentes `.astro`, la IA debe aplicar un criterio estricto de síntesis y adaptación basado en las siguientes reglas:

1. **No inventar información (Strict Fact-Grounding):** Absolutamente todo el contenido debe basarse en el texto original extraído. Si un dato no existe en la fuente original (ej. horas exactas, requisitos específicos), no se debe alucinar; simplemente se omite el widget o la métrica.
2. **Limpieza de Ruido:** Eliminar redundancias, textos repetitivos o frases de relleno ("filler text") típicos de webs antiguas. Mantener el mensaje directo y profesional.
3. **Adaptación al Diseño (Widgets):** AstroWind utiliza componentes basados en títulos cortos, subtítulos y listados concisos (ej. `Features2`, `Content`). El texto original debe desglosarse y estructurarse lógicamente para encajar en estas propiedades (`title`, `description`, `items`), en lugar de pegarse como grandes bloques de párrafos.
4. **Mejora de Redacción:** Corregir faltas ortográficas o gramaticales heredadas del sitio antiguo. Estandarizar el tono para que sea académico, persuasivo y formal.
5. **Consistencia:** Mantener la misma estructura de pestañas e id visual (iconos `tabler:`, colores) entre todos los programas de un mismo nivel (todas las maestrías deben verse idénticas en estructura al igual que los doctorados).

## Fases del Flujo de Trabajo

### 1. Extracción automatizada (Scraping)
Se utiliza un script de Python temporal (`extract.py`) para consumir la URL del programa original e identificar las pestañas (tabs) y acordeones.
- Se debe extraer usando `BeautifulSoup` buscando clases como `tab-pane` y `accordion-item`.
- El resultado se guarda en un archivo de texto limpio (ej. `temp_data.txt`).

### 2. Estructuración y Tipado (Generación de TypeScript)
El contenido curricular suele requerir transformación a arrays y objetos TypeScript.
- Se crea otro script temporal en Python (`fix_ts.py`) que usa expresiones regulares para leer `temp_data.txt` y generar el código TS.
- Se debe exportar un objeto que cumpla con la interfaz requerida (ej. `ProgramCurriculum`, `ResearchCurriculum`) hacia un archivo en `src/data/masters/` o `src/data/phd/`.

### 3. Mapeo del Profesorado
- Leer la sección de "Profesorado" extraída.
- Cruzar los nombres de los docentes con los IDs existentes en `src/data/faculty.ts`.
- Anotar los IDs (`'angel-guillemes'`, `'juan-silva'`, etc.) para inyectarlos iterativamente en el componente Astro.

### 4. Construcción de la Página Astro (`.astro`)
- Crear el componente en `src/pages/[categoria]/[nombre-del-programa].astro`.
- Utilizar el **Layout principal** (`Layout`) y los **Widgets** estándar de AstroWind:
  - `HeroPrograms`: Para el encabezado, título, imagen y *tagline*.
  - `StatsData`: Para los datos estadísticos generales.
  - `ProgramTOC`: Para la tabla de contenidos lateral.
  - `Content` y `Features2` / `Features`: Para las secciones de objetivos, beneficios, campos de acción, etc.
  - `HeroSection`, `ProgramCurriculum`, `ResearchCurriculum`: Para volcar la tabla de asignaturas del archivo TS.
  - `FacultyMember`: Iterando sobre los IDs cruzados en el Paso 3.
  - Snippets de matrícula (`Scholarship`, `Admission`, `Payments`, etc.).

### 5. Validación y Limpieza
- Ejecutar terminal: `npm run build`.
- Si existen errores (ej. un `tabler:icon` que no existe o un property undefined), solucionarlos mediante `sed` o reeditando el archivo.
- Una vez que la build es existosa (Exit Code 0), **eliminar** obligatoriamente los archivos `.py` y `.txt` temporales creados en los pasos 1 y 2.

## Notas importantes para la IA
- **Nunca hacer copy-paste manual a ciegas** para partes extensas como la malla curricular, siempre utilizar código para estructurarlo y evitar errores humanos.
- Mantener los estilos de color dictados en `copilot-instructions.md`.
- Cada página del programa debe contar con los metadatos (`title`, `description`, `keywords`).