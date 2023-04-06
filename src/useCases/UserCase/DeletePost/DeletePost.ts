import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { IDeletePostDTO } from "./IDeletePostDTO";


export class DeletePost {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IDeletePostDTO) {
   const post = await this.userRepository.deletePost(data.id)
    return post
  }

}