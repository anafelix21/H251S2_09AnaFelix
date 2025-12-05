# Hackathon Web - Sistema de Registro de Equipos

## 📋 Descripción

Sistema web para registrar, gestionar y dar seguimiento al mantenimiento de equipos de computación. Incluye un formulario interactivo con validación en tiempo real y una base de datos relacional.

## 🗂️ Estructura del Proyecto

```
Hackathom_web/
├── app.py                          # Aplicación principal de Flask
├── database.sql                    # Script para crear la base de datos
├── package.json                    # Dependencias del proyecto
├── templates/
│   ├── index.html                 # Página principal con formulario
│   └── equipos.html               # Página para ver equipos
├── static/
│   ├── css/
│   │   ├── input.css              # CSS original (Tailwind)
│   │   ├── output.css             # CSS compilado
│   │   └── style.css              # CSS optimizado con comentarios
│   ├── js/
│   │   └── formulario.js          # Lógica del formulario (comentado)
│   └── image/
│       ├── fondovg.jpg            # Imagen de fondo
│       └── logovg.jpg             # Logo de la aplicación
```

## ⚙️ Instalación

### 1. Requisitos Previos
- Python 3.8+
- MySQL 5.7+
- pip (gestor de paquetes de Python)

### 2. Instalar Dependencias

```bash
pip install flask flask-mysqldb
```

### 3. Configurar Base de Datos

```bash
mysql -u root -p < database.sql
```

O ejecutar el script SQL en tu cliente MySQL directamente.

### 4. Configurar Conexión a Base de Datos

Editar `app.py` y actualizar las credenciales:

```python
app.config['MYSQL_HOST'] = 'tu_host'
app.config['MYSQL_USER'] = 'tu_usuario'
app.config['MYSQL_PASSWORD'] = 'tu_contraseña'
app.config['MYSQL_DB'] = 'hackaton'
```

## 🚀 Ejecutar la Aplicación

```bash
python app.py
```

La aplicación estará disponible en: **http://localhost:5000**

## 📝 API Endpoints

### GET /
- **Descripción**: Página principal con formulario
- **Respuesta**: HTML del formulario

### GET /equipos
- **Descripción**: Página con lista de equipos registrados
- **Respuesta**: HTML con tabla de equipos

### POST /api/equipos
- **Descripción**: Registrar un nuevo equipo
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "codigo": "EQ001",
  "tipo": "Laptop",
  "marcas": "HP",
  "modelo": "HP 15-ef1xxx",
  "so": "Windows 11",
  "almacenamiento": 256,
  "ram": 8,
  "estado": "Activo",
  "mantenimiento": "2025-12-20",
  "fecha_registro": "2025-12-05"
}
```
- **Respuesta Exitosa** (200):
```json
{
  "ok": true,
  "mensaje": "Equipo registrado exitosamente"
}
```
- **Respuesta Error** (400/500):
```json
{
  "ok": false,
  "error": "Descripción del error"
}
```

## 📊 Estructura de Base de Datos

### Tabla: equipos
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INT | Identificador único |
| codigo | VARCHAR(50) | Código único del equipo |
| tipo | VARCHAR(50) | Tipo de equipo |
| marcas | VARCHAR(50) | Marca del equipo |
| modelo | VARCHAR(100) | Modelo específico |
| so | VARCHAR(50) | Sistema operativo |
| almacenamiento | INT | Almacenamiento en GB |
| ram | INT | RAM en GB |
| estado | VARCHAR(50) | Estado del equipo |
| mantenimiento | DATE | Fecha de próximo mantenimiento |
| fecha_registro | DATE | Fecha de registro |
| created_at | TIMESTAMP | Timestamp de creación |

### Tabla: tipos_equipo
Contiene valores predefinidos: Laptop, Desktop, Servidor, Impresora

### Tabla: marcas
Contiene valores predefinidos: HP, Dell, Lenovo, ASUS, Apple

### Tabla: sistemas_operativos
Contiene valores predefinidos: Windows 10, Windows 11, macOS, Linux

### Tabla: mantenimiento
Registro histórico de mantenimientos realizados a los equipos

## 🎨 Características del Formulario

- ✅ Validación en tiempo real
- ✅ Carga dinámica de modelos según marca
- ✅ Llenado automático de RAM y almacenamiento
- ✅ Animaciones suaves al cargar
- ✅ Mensajes de éxito/error
- ✅ Responsive design (mobile friendly)
- ✅ Efecto glassmorphism en el contenedor
- ✅ Gradientes y efectos hover

## 🔧 Archivos Clave

### app.py
Aplicación Flask principal que:
- Define rutas HTTP
- Maneja conexión a MySQL
- Procesa solicitudes POST para guardar equipos

### formulario.js
Script JavaScript que:
- Carga modelos dinámicamente por marca
- Rellena especificaciones automáticamente
- Valida y envía datos al servidor
- Muestra mensajes de confirmación

### style.css
Estilos CSS optimizados que:
- Define animaciones (slide, bounce)
- Aplica gradientes
- Implementa diseño responsive
- Proporciona efectos visuales

### database.sql
Script SQL que:
- Crea estructura de base de datos
- Inserta valores iniciales
- Define índices para optimización
- Establece relaciones entre tablas

## 📱 Navegadores Soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔐 Notas de Seguridad

- ⚠️ Cambiar credenciales de base de datos antes de producción
- ⚠️ Usar variables de entorno para datos sensibles
- ⚠️ Implementar autenticación antes de desplegar
- ⚠️ Validar entrada en servidor también

## 📈 Mejoras Futuras

- Agregar autenticación de usuarios
- Implementar paginación de equipos
- Agregar filtros y búsqueda
- Dashboard con estadísticas
- Exportar datos a Excel/PDF
- Notificaciones de mantenimiento

## 🤝 Contribuciones

Para contribuir al proyecto:
1. Crear rama para tu feature
2. Hacer commit de cambios
3. Push a la rama
4. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 👨‍💻 Autor

Desarrollo realizado para hackathon web 2025.
