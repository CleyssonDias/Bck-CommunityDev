
import { userRopsitory } from "../../../repositories/UserRepo";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const createUser = new CreateUser(userRopsitory)
const createUserController = new CreateUserController(createUser)

export { createUser, createUserController }