import { userOwnerRepository } from "../../repositories/UserOwnerRepo"
import { CreateUserOwnerController } from "../Controllers/CreateUserOwnerController";
import { CreateUserOwnerService } from "../Services/CreateUserOwnerService"

const createUserOwner = new CreateUserOwnerService(userOwnerRepository);
const createUserOwnerController = new CreateUserOwnerController(createUserOwner);

export { createUserOwnerController }