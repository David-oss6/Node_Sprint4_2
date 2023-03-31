const { Game } = require('../models')

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
        const partides = await Game.findAll({ where: { player: id } })
        return partides
    }

    async resetTable() {
        await Game.destroy({ truncate: true })
    }
}

module.exports = { GameRepoMysql }