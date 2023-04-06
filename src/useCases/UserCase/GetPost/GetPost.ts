import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { IGetPostDTO } from "./IGetPostDTO";



export class GetPost {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IGetPostDTO) {
   const post = await this.userRepository.getPosts(data.email)
    return post
  }

}