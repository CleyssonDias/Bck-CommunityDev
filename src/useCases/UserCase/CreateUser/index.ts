
import { userRepository } from "../../../repositories/UserRepo";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const createUser = new CreateUser(userRepository)
const createUserController = new CreateUserController(createUser)

export { createUser, createUserController }