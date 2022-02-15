# Crear nuevo schema instalarlo etc.

Paso 1:
-El schema se crea en db/models
    -Templante de un schema db-models-schema.js
-En la misma carpeta importar el modelo y su configuraicon en index.js en db/models
-Si nuestro modelo tiene una asociacion (relacion con otra tabla) usar el Customer.associate(sequelize.models); en db/models de index.js
-Crear schema en models
-Crear el controller en db/models donde estaran el CRUD para zequlize
-Crear routes
-Crear la contruccion de la tabla en db/migrations, ejecutar el comando: npm run migrations:generate create-custumers
-Añadir su direccion en router/index

Clase:
https://platzi.com/clases/2507-backend-nodejs-postgres/41559-relaciones-uno-a-uno/

Imagen de clase:
https://static.platzi.com/media/user_upload/Screen%20Shot%202021-10-25%20at%2013.25.34-0aa425c8-d2c0-4cba-ae01-f214e9604c14.jpg



# Sumar totales como campo virtual sequalize
En caso de un total se ocupa reduce en las ordenes de comrpas:
https://platzi.com/clases/2507-backend-nodejs-postgres/41565-resolviendo-relaciones-muchos-a-muchos/

# Paginacion
se ocupa el limit y el offset que seria como el skip de mongodb


# Comando de migraciones:
npm run migrations:generate = "sequelize-cli migration:generate --name",
npm run migrations:run = "sequelize-cli db:migrate",
npm run migrations:revert = "sequelize-cli db:migrate:undo",
npm run migrations:delete = "sequelize-cli db:migrate:undo:all"
