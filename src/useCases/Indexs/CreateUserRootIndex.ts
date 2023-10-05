
import { userRepository } from "../../repositories/UserRepo";
import { CreateUserRoot } from "../Services/CreateUserRootService";
import { CreateUserRootController } from "../Controllers/CreateUserRootController";

const createUserRoot = new CreateUserRoot(userRepository)
const createUserRootController = new CreateUserRootController(createUserRoot)

export { createUserRootController }