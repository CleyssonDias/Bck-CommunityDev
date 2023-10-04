import { Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

export function AuthenticateVerify(req: Request, res: Response, next:NextFunction) {
    const auth = req.headers.authorization

    if(!auth) return res.status(400).json({error:"Token Invalid."});

    const [,token] = auth.split(" ")

    try {
        const { sub } = verify(token, '44321623819');

        req.body.userID = sub
        
        next()
    } catch (
    error) {
        res.status(400).json({error:"Token Expired."})
    }
}