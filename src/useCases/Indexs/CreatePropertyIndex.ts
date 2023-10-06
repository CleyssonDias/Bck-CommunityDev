import { propertyRepository } from "../../repositories/PropertyRepo"
import { CreatePropertyController } from "../Controllers/CreatePropertyController"
import { CreatePropertyService } from "../Services/CreatePropertyService"

const createPropertyService = new CreatePropertyService(propertyRepository)
const createPropertyController = new CreatePropertyController(createPropertyService)

export { createPropertyController }