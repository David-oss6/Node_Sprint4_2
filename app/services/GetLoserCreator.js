class GetLoserCreator {
    constructor(repository) {
        this.repository = repository
    }
    async run() {
        const looser = await this.repository.getLoser()
        return looser
    }
}
module.exports = { GetLoserCreator }