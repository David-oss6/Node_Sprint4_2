class GetPlayerCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run() {
        const users = await this.repository.getPlayers()
        return users
    }
}

module.exports = { GetPlayerCreator }