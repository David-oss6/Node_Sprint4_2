


class ChangeNameCreator {
    constructor(repository) {
        this.repository = repository
    }

    async run(req) {
        const id = await this.repository.filterId(req.params.id)
        let result
        if (id) {
            let newName = req.body.name
            let exists = await this.repository.playerExists(newName)
            if (!exists) {
                await this.repository.changeName(newName, id)
                result = `Nombre cambiado a ${newName}`
            } else {
                result = `El nombre: ${newName} ya esta en uso`
            }
        } else {
            result = `El id:${id}, no existe`
        }
        return result
        //res.send(`El id:${id}, no existe`)


    }

}

module.exports = { ChangeNameCreator }