import { Request, Response } from "express";
import { EditPost } from "./EditPost";

export class EditPostController {
  constructor(private createUser: EditPost) {}

  async handle(req: Request, res: Response) {
    const { id, message } = req.body;
    try {
      if (!id || !message) 
        return res.status(400).json({ error: "Arguments are missing." });

      const post = await this.createUser.execute({ id: id, message: message });

      return res.status(201).json({ post });
    } catch (error) {
      return res.status(421).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}