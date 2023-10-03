// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";

// * Importando rotas e autenticação
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";
import { createUserController } from "./useCases/UserCase/CreateUser";


const router = Router(); // variavel com as rotas

// * ROTAS
// ? Rota de Criação de usuario
router.post('/api/v1/user', async(req: Request, res: Response) => {
    return await createUserController.handle(req, res)
})

// ! Exportando as rotas para o app
export { router }