import { UserRoot } from "../../entities/UserRoot"
export interface IUserRepository {
    checkEmail(email: string): Promise<UserRoot>
    save(user: UserRoot): Promise<UserRoot>
}