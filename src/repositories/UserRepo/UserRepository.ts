import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
    go(): void {
        console.log("GO")
    }
}