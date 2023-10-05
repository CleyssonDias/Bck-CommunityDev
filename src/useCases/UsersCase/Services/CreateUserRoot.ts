import { UserRoot } from "../../../entities/UserRoot";
import { IRepository } from "../../../repositories/UserRepo/IRepository";
import { ICreateUserRootDTO } from "../IDTOs/ICreateUserRootDTO";

export class CreateUserRoot {
  constructor(
    public repository: IRepository
  ) { }

  async execute(data: ICreateUserRootDTO) {
    const userAlereadyExists = await this.repository.checkEmail(data.email)
    if (userAlereadyExists) throw { code: 409 ,message: 'Email already registered by another user.' }

    const user = new UserRoot(data.name,
      data.email,
      data.password)

    const result = await this.repository.save(user)

    return result
  }
}