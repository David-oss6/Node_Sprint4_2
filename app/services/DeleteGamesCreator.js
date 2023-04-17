class DeleteGamesCreator {
    constructor(game_repo, user_repo) {
        this.repository = game_repo
        this.secondaryRepo = user_repo

    }

    async run(req, req_id) {
        let message
        const id = await this.secondaryRepo.filterId(req_id)
        if (id) {
            await this.repository.deleteGames(req.params.id)
            await this.secondaryRepo.deleteGames(id)
            message = `Partides eliminades`
        } else {
            message = `el id: ${req_id} no existe`
        }
        return message
    }
}

module.exports = { DeleteGamesCreator }