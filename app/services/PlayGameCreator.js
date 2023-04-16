const { gameRepo } = require("../dependency-injection/dependency-injection")
const { CreateGameCreator } = require("./CreateGameCreator")


class PlayGameCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(req) {
        const id = await this.repository.filterId(req.params.id)
        let win, loose, totales, percentatge, finalMessage
        if (id) {
            const player = await this.repository.getOnePlayer(id)
            const dau1 = Math.floor(Math.random(1) * 3)
            const dau2 = 5
            if (dau1 + dau2 === 7) {
                finalMessage = `${player.name} GANA la partida: ${dau1} y ${dau2}`
                win = player.partidesWin + 1
                loose = player.partidesLose
                totales = win + loose
                percentatge = (win * totales) / 100
            } else {
                finalMessage = `${player.name} PERD la partida: ${dau1 + dau2}`
                win = player.partidesWin
                loose = player.partidesLose + 1
                totales = win + loose
                percentatge = (win * totales) / 100
            }
            await this.repository.updatePlayer(win, loose, percentatge, id)
            const createGameCreator = new CreateGameCreator(gameRepo)
            await createGameCreator.run(id, dau1, dau2)
        } else {
            finalMessage = `el id: ${req.params.id} no existe`
        }
        return finalMessage
    }
}

module.exports = { PlayGameCreator }