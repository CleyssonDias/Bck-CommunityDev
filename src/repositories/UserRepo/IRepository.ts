import { UserRoot } from "../../entities/UserRoot"
export interface IRepository {
    checkEmail(email: string): Promise<UserRoot>
    save(user: UserRoot): Promise<UserRoot>
}