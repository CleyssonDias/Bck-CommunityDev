import { Request, Response } from "express";
import { GetPost } from "./GetPost";

export class GetPostController {
  constructor(private createUser: GetPost) {}

  async handle(req: Request, res: Response) {
    const { email } = req.params;
    try {
      if (!email)
        return res.status(400).json({ error: "Arguments are missing." });

      const post = await this.createUser.execute({ email: email.toLowerCase() });

      return res.status(201).json({ post });
    } catch (error) {
      return res.status(421).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}