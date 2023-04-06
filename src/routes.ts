// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";
import { createPostController } from "./useCases/UserCase/CreatePost";

import { createUserController } from "./useCases/UserCase/CreateUser";
import { deletePostController } from "./useCases/UserCase/DeletePost";
import { editPostController } from "./useCases/UserCase/EditPost";
import { getPostController } from "./useCases/UserCase/GetPost";
import { getUserController } from "./useCases/UserCase/GetUser";

const router = Router(); // variavel com as rotas

// * ROTAS

// ? Rota de Criação de usuario
router.post('/api/v1/user', async (req: Request, res: Response) => {
    return await createUserController.handle(req, res)
})

// ? Rota para buscar o usuario
router.get('/api/v1/user/:email/:password', async (req, res) => {
    return await getUserController.handle(req, res)
})

// ? Rota de Criação de Post
router.post('/api/v1/posts', AuthenticateVerify, async (req: Request, res: Response) => {
    return await createPostController.handle(req, res)
})

// ? Rota de exclusão de Post
router.post('/api/v1/posts/update', AuthenticateVerify, async (req: Request, res: Response) => {
    return await editPostController.handle(req, res)
})

// ? Rota de exclusão de Post
router.delete('/api/v1/posts', AuthenticateVerify, async (req: Request, res: Response) => {
    return await deletePostController.handle(req, res)
})



// ? Rota para buscar o posts
router.get('/api/v1/posts/:email', AuthenticateVerify,async (req, res) => {
    return await getPostController.handle(req, res)
})
// ! Exportando as rotas para o app
export { router }