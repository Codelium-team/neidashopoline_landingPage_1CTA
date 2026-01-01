# 🌐 Página de Aterrizaje para [@neidashopoline](https://www.instagram.com/neidashopoline/)

¡Bienvenido al repositorio de la página de aterrizaje creada especialmente para [neidashopoline](https://www.instagram.com/neidashopoline/), el ganador de nuestro concurso! 🎉 El equipo de Codelium ha diseñado esta landing page para ayudar a impulsar su negocio o proyecto.

## ✨ Características

- **📱 Diseño Responsive:** Optimizada para dispositivos móviles y de escritorio.
- **🖱️ Call to Action (CTA) Personalizado:** Botón de WhatsApp en cada producto del carrusel.
- **🧹 Código Limpio y Documentado:** Facilita la comprensión y modificación futura.
- **🔍 Optimización SEO:** Implementación de buenas prácticas para mejorar la visibilidad en buscadores.
- **📸 Carrusel de Productos:** Con soporte para embeds de Instagram y fallback a imágenes locales.

## 🛠️ Tecnologías

- **React 18** + **Vite**
- **React Router DOM** para navegación SPA
- **Bootstrap 5** para estilos base
- **SweetAlert2** para notificaciones
- **Font Awesome** para iconos

## 🚀 Desarrollo Local

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Codelium-team/neidashopoline_landingPage_1CTA.git

# Entrar a la carpeta del frontend
cd neidashopoline_landingPage_1CTA/frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Build de Producción

```bash
cd frontend
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

## 🌐 Configuración de Despliegue

### Dominio de producción
- **URL:** `https://neidashop.codelium.cl`

### Estructura en el servidor

```
/neidashop.codelium.cl/
├── index.html          ← Frontend (build de Vite)
├── assets/             ← JS, CSS, imágenes compiladas
└── public/             ← Backend PHP
    ├── submit_email.php
    ├── submit_contact.php
    ├── instagram_embed.php
    └── urls.json
```

### Variables de entorno

La configuración del backend se encuentra en `src/config/constants.js`:

| Entorno | URL Base |
|---------|----------|
| Desarrollo | `http://localhost:8000` |
| Producción | `https://neidashop.codelium.cl/public` |

## 📁 Estructura del Proyecto

```
frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   │   └── products/    # Imágenes de productos (fallback)
│   ├── components/      # Componentes React
│   │   ├── pages/       # Páginas de la aplicación
│   │   └── routes/      # Configuración de rutas
│   ├── config/          # Configuración (endpoints, constantes)
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── docs/                # Documentación adicional
└── package.json
```

## 📝 Páginas Disponibles

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Home | Página principal |
| `/about` | Acerca de | Información sobre Neida Shop |
| `/categories` | Categorías | Categorías de productos |
| `/store` | Tienda | Carrusel de productos destacados |
| `/contact` | Contacto | Formulario de contacto |

## 🔧 Funcionalidades Implementadas

### Carrusel de Productos (Tienda)
- Carga embeds de Instagram desde el backend PHP
- Fallback automático a imágenes locales si el backend no está disponible
- Botón CTA "Contactar" que abre WhatsApp directamente

### Sección Acerca de
- Foto circular con efectos de hover
- Círculos decorativos que no se superponen al contenido
- Formulario de newsletter

### WhatsApp Flotante
- Botón flotante en todas las páginas
- Redirige a WhatsApp con mensaje predefinido

## 👥 Equipo

Desarrollado por **Codelium Team** 💜

## 📄 Licencia

Este proyecto fue creado para [@neidashopoline](https://www.instagram.com/neidashopoline/) como parte del concurso de Codelium.
