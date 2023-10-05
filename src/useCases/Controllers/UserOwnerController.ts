import { Request, Response } from "express";
import { UserOwnerService } from "../Services/UserOwnerService";
export class UserOwnerController {
        private service: UserOwnerService
        constructor(service: UserOwnerService) {
                this.service = service
        }

        async createUser(req: Request, res: Response) {
                try {
                        const user = req.body
                        if (Object.keys(user).length == 0) return res.status(400).json({ mensage: "object is empty" })
                        await this.service.execute(user)
                        return res.status(201).json({ user })

                } catch (error) {
                        return res.status(error.code).json({
                                error: error.message || "Unexpected error.",
                        });
                }

        }
}