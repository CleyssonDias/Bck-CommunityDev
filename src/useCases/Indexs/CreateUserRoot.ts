
import { repository } from "../../repositories/UserRepo";
import { CreateUserRoot } from "../Services/CreateUserRoot";
import { CreateUserRootController } from "../Controllers/CreateUserRootController";

const createUserRoot = new CreateUserRoot(repository)
const createUserRootController = new CreateUserRootController(createUserRoot)

export { createUserRootController }