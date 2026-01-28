# DevTask Tracker

Gestor de tareas FullStack para desarrolladores, construido exclusivamente con estándares web nativos y Node.js.

## Tecnologías Utilizadas

- **Frontend**: HTML5 Semántico, CSS3 Moderno (Vanilla), JavaScript Vanilla (ES6+).
- **Backend**: Node.js, Express.
- **Base de Datos**: MongoDB Atlas (Mongoose).

## Requisitos del Proyecto (PDF)

- Aplicación SPA (Single Page Application).
- Conexión segura a MongoDB Atlas.
- API REST con endpoints:
  - `GET /api/tasks`: Obtener todas las tareas.
  - `POST /api/tasks`: Crear una nueva tarea.
  - `DELETE /api/tasks/:id`: Eliminar una tarea y moverla al backlog visual.
- Interfaz dinámica sin recarga de página (Fetch API).

## Cómo empezar

### 1. Configurar el Backend
1. Entra en la carpeta `Backend`: `cd Backend`
2. Instala las dependencias: `npm install`
3. Configura el archivo `.env` con tu URI de MongoDB Atlas:
   ```env
   PORT=3000
   MONGO_URI=tu_cadena_de_conexion
   ```
4. Inicia el servidor: `npm run dev`

### 2. Abrir el Frontend
No necesitas un servidor para el frontend, simplemente abre el archivo `Frontend/Index.html` en tu navegador favorito.

---
**Desarrollado para la actividad "El Monolito Artesanal" - Febrero 2026.**