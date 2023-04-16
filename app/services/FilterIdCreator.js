class FilterIdCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(reqParamsId) {
        const id = await this.repository.filterId(reqParamsId)
        return id
    }
}

module.exports = {
    FilterIdCreator
}