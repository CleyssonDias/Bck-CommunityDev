import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { IGetUserDTO } from "./IGetUserDTO";

export class GetUser {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: IGetUserDTO) {
    const user:any = await this.userRepository.findByEmail(data.email)
    if (!user) throw new Error("Invalid email or password.")
    const verifyPass = await this.userRepository.verifyPass(data.password,user.password)
    if (!verifyPass) throw new Error("Invalid email or password.")

    const token = await this.userRepository.generateToken({id:user.id, pass:"LOLI", time:'7d'})
    return {user, token}
  }
}