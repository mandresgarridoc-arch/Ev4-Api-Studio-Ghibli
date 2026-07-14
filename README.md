# 🎬 Explorador de Películas de Studio Ghibli

Este proyecto es una SPA (Single Page Application) desarrollada con React y TypeScript que consume la API pública de Studio Ghibli, permitiendo a los usuarios explorar, buscar y guardar sus películas favoritas en una colección local.

## 🚀 Tecnologías Utilizadas
* React 18
* TypeScript
* Vite
* CSS nativo (Inline styles)

## 📡 API Utilizada
Se utilizó un clon estable de la API pública de Studio Ghibli: `https://ghibliapi.vercel.app/films`. Esta API no requiere autenticación ni credenciales privadas, entregando un arreglo de objetos con información de las películas (título, director, año, imagen, descripción).

## ⚙️ Instrucciones de Instalación
Para ejecutar este proyecto de manera local, sigue estos pasos:

1. Clona el repositorio.
2. Abre la terminal en la carpeta del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Ejecuta `npm run dev` para levantar el servidor de desarrollo.
5. Abre el enlace local 

## ✨ Funcionalidades Principales
1. **Consumo de API:** Carga asíncrona de películas con manejo de estados (`cargando`, `error`).
2. **Búsqueda en Tiempo Real:** Filtrado de películas por título sin recargar la página.
3. **Colección Personal (Local Storage):** Funciones CRUD para agregar a favoritos, leer la lista guardada, editar una nota personal por película y eliminar registros de la colección.
4. **Diseño Modular:** Arquitectura basada en componentes funcionales (`Buscador`, `ListaElementos`, `ElementoCard`, `Favoritos`).

## 🤖 Anexo de IA (Uso Responsable)
* **Herramienta utilizada:** Gemini.
* **Uso principal:** Asistencia en la estructuración de la arquitectura de componentes, validación de errores de TypeScript (ej. ts(1484) verbatimModuleSyntax) y optimización del CRUD con Local Storage.
* **Prompts destacados:** - "Ayúdame a modelar una interfaz en TypeScript para consumir la API de Valorant/Ghibli que cumpla con 4 propiedades útiles."
  - "Dame una estructura para implementar un CRUD en Local Storage usando useEffect."
* **Modificaciones realizadas:** Se adaptó el código base generado para cumplir estrictamente con los requerimientos de la evaluación (sin uso de librerías externas para CSS, separación manual de 4 componentes, traducción de etiquetas de la interfaz).