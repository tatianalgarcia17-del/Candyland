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

``npm install dotenv sequelize mysql2 pg pg-hstore``
``npm install nodemon --save-dev``
crear .env a nivel de src
```

DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api98
DB_USER=root
DB_PASSWORD=
PORT=3000

```
```
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=node_api98
DB_USER=postgres
DB_PASSWORD=mypassword
PORT=3000

```

📁 src/config/database.js

📁 src/server.js

configuramos package.json ``"start": "node src/server.js",``
ejecutamos el servidor con ``npm start``
ajustamos a app.js 

```
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor activo")
}); */
module.exports = app;
```

📁 src/models/usuario.model.js
📁 src/services/usuario.service.js
📁 src/controller/usuario.controller.js