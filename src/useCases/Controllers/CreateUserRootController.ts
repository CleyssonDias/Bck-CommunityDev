import { Request, Response } from "express";
import { CreateUserRoot } from "../Services/CreateUserRootService";

export class CreateUserRootController {
  constructor(private createUserRoot: CreateUserRoot) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      if (!name || !email || !password)
        return res.status(400).json({ error: "Arguments are missing." });

      const user = await this.createUserRoot.execute({
        name,
        email: email.toLowerCase(),
        password,
      });

      return res.status(201).json({ user });
    } catch (error) {
      return res.status(error.code).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}
