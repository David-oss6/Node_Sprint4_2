# Entrega 4.2

## Requerimientos

    * Para usar base de datos MYSQL:*
        - Se necesita tener instalado algun plicación (como MYSQL Workbench) con un schema creado con el nombre: juego_dados
        - En app/config/config.json: introduce tu username, contraseña y databsae

    * Para usar base de datos MongoDb:*
        - Necesitarás tener instalado MongoDb Compass con una base de datos creada con el nombre: juego_dados

## Funcionamiento
    - npm i para instalar las dependencias necesarias

    - npm run mysql para ejecutar la aplicación con base de datos MYSQL
    - npm run mongodb para ejecutar la aplicación con base de datos MONGODB

    - importar: entrega_42.postman_collection.json en POSTMAN

### Dependencias instaladas:
    - express
    - sequelize sqlite3
    - mysql2
    - sequelize-cli
    - fs
    - path
    - dotenv



```
app/src
    backend
            - dependency-inyection
            - router
            - server
            - app
            - db-config
    users
        - application
            - use-cases
        - domain
            - entities
                - user
        - infrastructure
            - controllers
            - userRepository
    games
        - application
            - use-cases
                - gameCreator
                - gameUpdater
        - domain
            - entities
                - game
            - value-objects
                - userId
                - dice
        - infrastructure
            - controllers
            - gameRepository
```
