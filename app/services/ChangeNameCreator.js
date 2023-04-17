class ChangeNameCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(req_id, newName) {
        const id = await this.repository.filterId(req_id)
        let result
        if (id) {
            let exists = await this.repository.playerExists(newName)
            if (!exists) {
                await this.repository.changeName(newName, id)
                result = `Nombre cambiado a ${newName}`
            } else {
                result = `El nombre: ${newName} ya esta en uso`
            }
        } else {
            result = `El id:${req_id}, no existe`
        }
        return result
    }

}

module.exports = { ChangeNameCreator }