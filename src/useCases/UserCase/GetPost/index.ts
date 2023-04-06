
import { userRopsitory } from "../../../repositories/UserRepo";
import { GetPost } from "./GetPost";
import { GetPostController } from "./GetPostController";



const getPost = new GetPost(userRopsitory)
const getPostController = new GetPostController(getPost)

export { getPost, getPostController }