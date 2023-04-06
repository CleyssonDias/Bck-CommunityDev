import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUser {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlereadyExists = await this.userRepository.findByEmail(data.email)
  
    if (userAlereadyExists) return {error:'Email already registered by another user.'}

    const user = new User(
      1,
      data.name,
      data.email,
      await this.userRepository.encryptpass(data.password)
    ) 

    const result = await this.userRepository.save(user)

    return result
  }
}