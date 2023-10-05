import { UserOwner } from "../../entities/UserOwner";
export interface IUserOwnerRepository {
    save (user: UserOwner): Promise <UserOwner>

}