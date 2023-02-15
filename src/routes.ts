// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";

const router = Router(); // variavel com as rotas

router.get('/Test', (req: Request, res: Response) => {
    res.json({ message: "Ok!" })
})

// ! Exportando as rotas para o app
export { router }