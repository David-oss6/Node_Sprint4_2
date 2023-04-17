class GetGamesCreator {
    constructor(repository, user_repo) {
        this.repository = repository
        this.secondary_repo = user_repo
    }

    async run(req_id) {
        const id = await this.secondary_repo.filterId(req_id)
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