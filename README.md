# Entrega 4.2

- npm i express
- npm i sequelize sqlite3
- npm i mysql2
- npm i sequelize-cli
- npm i fs
- npm i path
- npm i dotenv

- npm install express sequelize sqlite3 mysql2 sequelize-cli fs path dotenv

## Requerimientos

- En app/config/config.json: introduce tu username, contraseña y databsae

## Funcionamiento

- npm run start para ejecutar server express en una termnial

  - npm run mysql para ejecutar server sequelize en otra terminal
    o
  - npm run mongodb para ejecutar server mongoDB en otra terminal

- importar: sequelize_postman_collection.json en POSTMAN

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
