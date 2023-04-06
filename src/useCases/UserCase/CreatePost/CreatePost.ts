import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { ICreatePostDTO } from "./ICreatePostDTO";


export class CreatePost {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: ICreatePostDTO) {
   const post = await this.userRepository.savePost(data.email, data.text)
    return post
  }

}