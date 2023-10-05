import { PrismaClient } from "@prisma/client";
import { UserOwner } from "../../entities/UserOwner";
import { IUserOwnerRepository } from "./IUserOwnerRepository";

export  class UserOwnerRepository implements IUserOwnerRepository {
  
    private db = new PrismaClient;
    async save(user: UserOwner): Promise<UserOwner> {

        const res = await this.db.userOwner.create({
            data: {
                propretyId: user.propretyId,
                email: user.email,
                password: user.password,
                name: user.name,
                birthDay: user.birthDay,
                ownerNumber: user.ownerNumber,
                maritialState: user.maritialState,
                phoneNumber: user.phoneNumber,
                CPF: user.CPF,
                ownerPicture: user.ownerPicture
            }
        })

        return res;

    }
    async verifyUserAlreadyExist(CPF: string): Promise<boolean> {
        const user = await this.db.userOwner.findUnique({
          where:{
            CPF,
          }
        })
        if(user == undefined){
            return false
        }
        return true;
    }
}
