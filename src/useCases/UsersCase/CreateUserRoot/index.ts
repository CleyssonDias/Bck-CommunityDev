
import { repository } from "../../../repositories/UserRepo";
import { CreateUserRoot } from "./CreateUserRoot";
import { CreateUserRootController } from "./CreateUserRootController";

const createUserRoot = new CreateUserRoot(repository)
const createUserRootController = new CreateUserRootController(createUserRoot)

export { createUserRootController }