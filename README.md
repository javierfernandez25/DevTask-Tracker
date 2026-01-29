# DevTask Tracker

Gestor de tareas FullStack para desarrolladores, construido exclusivamente con estándares web nativos y Node.js.

##  Tecnologías Utilizadas

- **Frontend**: HTML5 Semántico, CSS3 Moderno (Vanilla), JavaScript Vanilla (ES6+).
- **Backend**: Node.js, Express.
- **Base de Datos**: MongoDB Atlas (Mongoose).

##  Requisitos del Proyecto

- Aplicación SPA (Single Page Application).
- Conexión segura a MongoDB Atlas.
- API REST con endpoints:
  - `GET /api/tasks`: Obtener todas las tareas.
  - `POST /api/tasks`: Crear una nueva tarea.
  - `PUT /api/tasks/:id`: Actualizar el estado de una tarea.
  - `DELETE /api/tasks/:id`: Eliminar una tarea de forma permanente.
- Interfaz dinámica sin recarga de página (Fetch API).

##  Cómo empezar

### Prerrequisitos
- Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o una instancia local de MongoDB.

### 1. Configurar el Backend
1. Navega a la carpeta del backend:
   ```bash
   cd Backend
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Configura el archivo `.env` en la raíz de la carpeta `Backend`:
   ```env
   PORT=3000
   MONGO_URI=tu_cadena_de_conexion_mongodb
   ```
4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

### 2. Abrir el Frontend
El frontend es estático, por lo que no requiere instalación de dependencias ni un servidor dedicado:
1. Simplemente abre el archivo `Frontend/Index.html` en tu navegador.
2. Asegúrate de que el backend esté corriendo en `http://localhost:3000` para que las tareas se carguen correctamente.

---
**Desarrollado para el proyecto DevTask Tracker.**