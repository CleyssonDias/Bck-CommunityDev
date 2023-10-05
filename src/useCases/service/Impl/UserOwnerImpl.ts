import { UserOwnerDTO } from "../../DTO/UserOwnerDTO";
import { UserOwnerInterface } from "../Interface/UserOwnerInterface";

export class UserOwnerImpl implements UserOwnerInterface{
    save(user: UserOwnerDTO): Promise<UserOwnerDTO> {
        throw new Error("Method not implemented.");
    }  
}