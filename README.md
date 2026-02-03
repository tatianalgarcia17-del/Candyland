# Comandos
``git- -version``
``node -v``
``npm -v``
## Inicializar un proyecto
``nmp init -y``
``npm install express``

## Manejo de git
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``
``git remote add origin https://github.com/tatianalgarcia17-del/Candyland.git``


# 📁 Estructura profesional de una API en Node.js
api-node
    |-src **Aquí vive todo el código real del proyecto**
        |-config **Configuración global**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediario de seguridad y validación**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Lógica del negocio**
        |-utils **Funciones reutilizables**
        |-app.js **Configuración de la aplicación**
        |-server.js **Punto de inicio**
