
import { repository } from "../../../repositories/UserRepo";
import { CreateUserRoot } from "../services/CreateUserRoot";
import { CreateUserRootController } from "../Controllers/CreateUserRootController";

const createUserRoot = new CreateUserRoot(repository)
const createUserRootController = new CreateUserRootController(createUserRoot)

export { createUserRootController }