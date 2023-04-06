import { Request, Response } from "express";
import { DeletePost } from "./DeletePost";

export class DeletePostController {
  constructor(private createUser: DeletePost) {}

  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!id)
        return res.status(400).json({ error: "Arguments are missing." });

      const post = await this.createUser.execute({ id: id });

      return res.status(201).json({ post });
    } catch (error) {
      return res.status(421).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}