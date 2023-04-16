En PlayGameCreator, 

1) Tiene sentido hacer:

const createGameCreator = new CreateGameCreator(gameRepo)
await createGameCreator.run(id, dau1, dau2)

en vez de directamente gameRpo.createGame() ???

2) Lo mismo con filterId,
Es preferible crear un servicio que invoque el repositorio
O mejor invocar al repositorio directamente desde el servicio

3) Por que el req.params.id llega como null en DeleteGamesCreator?
linia 14 
Debería usar await userRepo.filterId(req_id) en vez de :
const filterIdCreator = new FilterIdCreator(userRepo)
const id = await filterIdCreator.run(req_id)
