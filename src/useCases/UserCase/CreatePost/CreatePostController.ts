import { Request, Response } from "express";
import { CreatePost } from "./CreatePost";

export class CreatePostController {
  constructor(private createUser: CreatePost) {}

  async handle(req: Request, res: Response) {
    const { email, message } = req.body;
    
    try {
      if (!email || !message)
        return res.status(400).json({ error: "Arguments are missing." });

      const post = await this.createUser.execute({ email: email.toLowerCase(), text:message });

      return res.status(201).json({ post });
    } catch (error) {
      return res.status(421).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}