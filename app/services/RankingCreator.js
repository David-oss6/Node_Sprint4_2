class RankingCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run() {
        const rankingList = await this.repository.getRanking()
        let sendRanking = []
        let sendMitjana
        let mitjana = 0
        rankingList.forEach((ele) => {
            sendRanking.push(`${ele.name} prcentatge: ${ele.percentatgeExit}`)
            mitjana += ele.percentatgeExit
        })
        mitjana = (mitjana * sendRanking.length + 1) / 100
        sendMitjana = `Percentatge d exit mitjà: ${mitjana}`
        return { sendMitjana, sendRanking }
    }
}

module.exports = { RankingCreator }