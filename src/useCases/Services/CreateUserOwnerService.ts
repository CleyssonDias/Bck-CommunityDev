import { ICreateUserOwnerDTO } from "../IDTOs/ICreateUserOwnerDTO";
import { UserOwner } from "../../entities/UserOwner";
import { IUserOwnerRepository } from "../../repositories/UserOwnerRepo/IUserOwnerRepository";

export class CreateUserOwnerService {
  constructor(public userRepo: IUserOwnerRepository) {}

  async execute(user: ICreateUserOwnerDTO) {
    const existUser = await this.userRepo.verifyUserAlreadyExist(user.CPF);
    if (existUser)
      throw { code: 400, message: "user already register in the sistem" };

    const res = new UserOwner(
      user.email,
      user.password,
      user.name,
      user.birthDay,
      user.ownerNumber,
      user.maritialState,
      user.phoneNumber,
      user.CPF,
      user.ownerPicture
    );
    
    const data = await this.userRepo.save(res);
  }
}
