import { UserOwnerDTO } from "../../DTO/UserOwnerDTO";

export interface UserOwnerInterface {
    save (user:UserOwnerDTO): Promise <UserOwnerDTO>

}