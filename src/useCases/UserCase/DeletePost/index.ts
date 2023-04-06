import { userRopsitory } from "../../../repositories/UserRepo"
import { DeletePost } from "./DeletePost"
import { DeletePostController } from "./DeletePostController"

const deletePost = new DeletePost(userRopsitory)
const deletePostController = new DeletePostController(deletePost)

export { deletePost, deletePostController }