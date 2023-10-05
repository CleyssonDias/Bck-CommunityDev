import { UserOwnerRepository } from "../../repositories/UserOwnerRepo/UserOwnerRepository";
import { UserOwnerController } from "../Controllers/UserOwnerController";
import { UserOwnerService } from "../Services/UserOwnerService";

const repo = new UserOwnerRepository;
const serviceOwner = new UserOwnerService(repo);
const  userOwnerController = new UserOwnerController(serviceOwner);

export {userOwnerController}