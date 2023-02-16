// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";

import { createUserController } from "./useCases/UserCase/CreateUser";

const router = Router(); // variavel com as rotas

// * ROTAS

// ? Rota de Criação de usuario
router.post('/api/v1/createuser', async (req: Request, res: Response) => {
    return await createUserController.handle(req, res)
})

// ! Exportando as rotas para o app
export { router }