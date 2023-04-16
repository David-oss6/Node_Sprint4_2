const { Game } = require('../database/models')

class GameRepoMysql {
    async deleteGames(id) {
        await Game.destroy({ where: { player: id } })
    }

    async createGame(id, dau1, dau2) {
        await Game.create({
            player: id,
            dau1: dau1,
            dau2: dau2,
            resultatPartida: dau1 + dau2 == 7 ? "win" : "loose",
        })
    }

    async getGames(id) {
        let result
        const partides = await Game.findAll({ where: { player: id } })
        partides.length == 0
            ? result = "Aquest jugador no ha jugat cap partida"
            : result = partides
        return result
    }

    async resetTable() {
        await Game.destroy({ truncate: true })
    }
}

module.exports = { GameRepoMysql }