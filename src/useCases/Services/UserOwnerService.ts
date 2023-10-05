import { UserOwnerRepository } from "../../repositories/UserOwnerRepo/UserOwnerRepository";
import { UserOwnerDTO } from "../IDTOs/UserOwnerDTO";
import { UserOwner } from "../../entities/UserOwner";


export class UserOwnerService {
    private userRepo: UserOwnerRepository;
    constructor(userRepo: UserOwnerRepository,) {
        this.userRepo = userRepo
    }

    async execute(user: UserOwnerDTO){
        const existUser = await this.userRepo.verifyUserAlreadyExist(user.CPF)
        if(existUser) throw {code: 400, message: "user already register in the sistem"}
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
        )
        let stringOfRes = Object.keys(res).toString
        console.log(stringOfRes.toString)
        const data = await this.userRepo.save(res)
    }
}