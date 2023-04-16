class CreatePlayerCreator {
    constructor(repository) {
        this.repository = repository
    }
    async run(playerName) {
        let exist = null
        if (playerName === undefined) {
            playerName = "anonim"
        }
        if (playerName !== "anonim") {
            exist = await this.repository.playerExists(playerName)
        }
        if (exist === null) {
            await this.repository.createPlayer(playerName)
            return `${playerName} registrado como jugador`
        } else {
            return `El nombre ${playerName} ya existe`
        }
    }
}

module.exports = { CreatePlayerCreator }