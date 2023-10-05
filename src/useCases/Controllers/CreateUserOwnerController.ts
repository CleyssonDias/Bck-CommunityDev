import { Request, Response } from "express";
import { CreateUserOwnerService } from "../Services/CreateUserOwnerService";
export class CreateUserOwnerController {
  constructor(public service: CreateUserOwnerService) {}

  async handle(req: Request, res: Response) {
    try {
      const user = req.body;
      if (Object.keys(user).length == 0)
        return res.status(400).json({ mensage: "object is empty" });

      await this.service.execute(user);

      return res.status(201).json({ user });
    } catch (error) {
      return res.status(error.code).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}
