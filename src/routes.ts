// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";

// * Importando rotas e autenticação
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";
import { createUserRootController } from "./useCases/Indexs/CreateUserRootIndex";
import { createUserOwnerController } from "./useCases/Indexs/CreateUserOwnerIndex";
import { createPropertyController } from "./useCases/Indexs/CreatePropertyIndex";


const router = Router(); // variavel com as rotas

// * ROTAS
// ? Rota de Criação de usuario root
router.post('/api/v1/user/root', async(req: Request, res: Response) => {
    return await createUserRootController.handle(req, res)
})

// ? Rota de Criação de usuario proprietario
router.post('/api/v1/user/owner',async (req: Request, res:Response) => {
    return await createUserOwnerController.handle(req, res)
})

// ? Rota de Criação de propriedade
router.post('/api/v1/property',async (req: Request, res:Response) => {
    return await createPropertyController.handle(req, res)
})

// ! Exportando as rotas para o app
export { router }