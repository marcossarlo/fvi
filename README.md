# 🚀 Fondo Verde Institute (FVI)

Este es el repositorio oficial de la actualización del sitio web [fondoverdeinstitute.com](https://fondoverdeinstitute.com) a **Astro**.

**Fondo Verde Institute** utiliza como base el potente template **[AstroWind](https://github.com/onwidget/astrowind)**, un tema de código abierto para crear sitios web usando **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**.

- ✅ **Optimización de Rendimiento:** Siguiendo las mejores prácticas de Astro.
- ✅ **Diseño Responsivo:** Basado en Tailwind CSS con soporte para modo oscuro.
- ✅ **Estructura Modular:** Uso de widgets reutilizables para una gestión de contenido eficiente.
- ✅ **Migración de Contenidos:** Transición del sitio original en Joomla a una arquitectura moderna y rápida.

<br>

![Fondo Verde Institute Website](/public/images/fvi-screenshot.webp)

## 📋 Estado del Proyecto (Menú "El Instituto")

Actualmente nos encontramos migrando las páginas principales:
- [x] \`/conocenos\` — Conócenos
- [x] \`/director\` — Carta del Director
- [x] \`/consejo-academico-internacional\` — Consejo Académico
- [x] \`/comite-direccion\` — Comité de Dirección
- [x] \`/profesorado-investigacion\` — Profesorado e Investigación
- [x] \`/acreditacion-reconocimiento\` — Acreditación y Reconocimiento
- [x] \`/fondo-verde-accion-social\` — Fondo Verde Acción Social
- [ ] \`/empleo-instituto\` — Empleo en el Instituto (Pendiente)

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [🚀 Fondo Verde Institute (FVI)](#-fondo-verde-institute-fvi)
  - [📋 Estado del Proyecto (Menú "El Instituto")](#-estado-del-proyecto-menú-el-instituto)
  - [Inicio Rápido](#inicio-rápido)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Comandos principales](#comandos-principales)
  - [Créditos y Template Base](#créditos-y-template-base)

</details>

<br>

## Inicio Rápido

Para levantar el proyecto localmente:

\`\`\`shell
npm install
npm run dev
\`\`\`

## Estructura del Proyecto

Basada en la arquitectura de AstroWind:

\`\`\`
/
├── public/           # Archivos estáticos
├── src/
│   ├── assets/       # Imágenes, estilos y favicons
│   ├── components/
│   │   ├── widgets/  # Componentes principales (Hero, Content, etc.)
│   │   ├── ui/       # Componentes de interfaz base
│   ├── layouts/      # Layouts principales (PageLayout.astro)
│   ├── pages/        # Rutas y páginas del sitio
│   └── navigation.ts # Configuración de menús
\`\`\`

### Comandos principales

| Comando           | Acción                                             |
| :---------------- | :------------------------------------------------- |
| \`npm run dev\`     | Inicia el servidor de desarrollo en \`localhost:4321\`|
| \`npm run build\`   | Genera el sitio para producción en \`./dist/\`        |
| \`npm run preview\` | Previsualiza la build localmente                   |

## Créditos y Template Base

Este proyecto ha sido desarrollado sobre el template **AstroWind**, creado por [onwidget](https://github.com/onwidget). Mantener el remoto \`upstream\` configurado permite recibir las últimas actualizaciones de la base técnica.

---
© 2024 Fondo Verde Institute.
