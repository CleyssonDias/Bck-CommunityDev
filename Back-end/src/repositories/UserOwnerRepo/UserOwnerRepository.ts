import { UserOwner } from "../../entities/UserOwner";
import { IUserOwnerRepository } from "./IUserOwnerRepository";

export  class UserOwnerRepository implements IUserOwnerRepository {
    save(user: UserOwner): Promise<UserOwner> {
        
        throw new Error("Method not implemented.");
    }  
}