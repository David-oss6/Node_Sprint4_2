class CreateGameCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(id, dau1, dau2) {
        this.repository.createGame(id, dau1, dau2)
    }
}

module.exports = { CreateGameCreator }