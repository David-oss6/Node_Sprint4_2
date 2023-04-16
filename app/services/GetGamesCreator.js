const { userRepo } = require("../dependency-injection/dependency-injection")
const { FilterIdCreator } = require("./FilterIdCreator")


class GetGamesCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(req_id) {
        const filterIdCreator = new FilterIdCreator(userRepo)
        const id = await filterIdCreator.run(req_id)
        if (id) {
            let result
            const games = await this.repository.getGames(id)
            games.length == 0
                ? result = "Aquest jugador no ha jugat cap partida"
                : result = games
            return games
        } else {
            return `el id: ${req_id} no existe`
        }
    }
}

module.exports = { GetGamesCreator }