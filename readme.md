# Proyecto Ecommerce con Django REST Framework y React.js
Este es un proyecto de ejemplo de un ecommerce desarrollado utilizando Django REST Framework para la parte del backend y React.js para el frontend.

## Funcionalidades
* Registro de Usuarios: Los usuarios pueden registrarse para crear una cuenta en la plataforma.
* Inicio de Sesión: Los usuarios administrativos registrados pueden iniciar sesión en sus cuentas.
* Explorar Productos: Los usuarios pueden explorar una variedad de productos disponibles en la tienda.
* Agregar al Carrito: Los usuarios pueden agregar productos a su carrito de compras.
Realizar Compras: Los usuarios pueden realizar compras utilizando la información de su carrito de compras.
* Perfil de Usuario: Los usuarios pueden ver y actualizar su información de perfil.
## Tecnologías Utilizadas

* Django REST Framework: Utilizado para desarrollar el backend del proyecto, proporcionando una API RESTful para el intercambio de datos.
* React.js: Utilizado para desarrollar el frontend del proyecto, proporcionando una experiencia de usuario dinámica e interactiva.
* TailwindCSS: Utilizado para el diseño y la maquetación de la interfaz de usuario, garantizando una apariencia atractiva y responsiva.
* Flowbite: Utilizando un cátalogo de componentes para agilizar el desarrollo del diseño.
* JWT: Para aumentar la seguridad de la autenticación se utilizan Json Web Tokens.
* SQLite: Base de datos por defecto de Django, utilizada para almacenar la información del ecommerce en el backend.
* Vite: Para compilar el proyecto de ReactJS.
## Configuración del Entorno de Desarrollo
### Backend (Django REST Framework)
#### Clona este repositorio: git clone https://github.com/ShtoCode/ecommerce-djangorf-react.git
#### Crea un entorno virtual: python -m venv env#
#### Activa el entorno virtual:
* En Windows: env\Scripts\activate
* En macOS y Linux: source env/bin/activate
#### Instala las dependencias: pip install -r requirements.txt
#### Realiza las migraciones de la base de datos: python manage.py migrate
#### Inicia el servidor: python manage.py runserver
### Frontend (React.js)
#### Navega al directorio del frontend: cd frontend
#### Instala las dependencias: npm install
#### Inicia la aplicación: npm start
## Revisar ENDPOINTS
#### Para obtener las rutas de la aplicación shop, ingresa a la ruta de /api