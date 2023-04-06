import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      if (!name || !email || !password)
        return res.status(400).json({ error: "Arguments are missing." });

      const user = await this.createUser.execute({ name, email: email.toLowerCase(), password });

      return res.status(201).json({ user });
    } catch (error) {
      return res.status(421).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}
