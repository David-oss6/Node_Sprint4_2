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