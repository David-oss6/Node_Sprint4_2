const { userRepo } = require("../dependency-injection/dependency-injection")
const { FilterIdCreator } = require("./FilterIdCreator")

class DeleteGamesCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(req, req_id) {
        let message
        const filterIdCreator = new FilterIdCreator(userRepo)
        const id = await filterIdCreator.run(req_id)
        //const id = await userRepo.filterId(req_id)
        //console.log(id)
        if (id) {
            await this.repository.deleteGames(req.params.id)
            await userRepo.deleteGames(id)
            // const deleGamesCreator_user = new DeleteGamesCreator(userRepo)
            // await deleGamesCreator_user.run(id)
            message = `Partides eliminades`
        } else {
            message = `el id: ${req_id} no existe`
        }
        return message
    }
}

module.exports = { DeleteGamesCreator }