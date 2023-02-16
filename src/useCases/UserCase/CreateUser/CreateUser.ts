import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { ICreateUserCTO } from "./ICreateUserCTO";

export class CreateUser {
    constructor(
        public userRepository: IUserRepository
    ) {}

    async execute(data: ICreateUserCTO) {
        const user = new User(
            data.name,
            data.email,
            data.password
        );
        return user
    }
}