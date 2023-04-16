class GetWinnerCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run() {
        const winner = await this.repository.getWinner()
        return winner
    }
}
module.exports = { GetWinnerCreator }