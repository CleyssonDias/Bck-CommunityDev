
import { userRopsitory } from "../../../repositories/UserRepo";
import { CreatePost } from "./CreatePost";
import { CreatePostController } from "./CreatePostController";


const createPost = new CreatePost(userRopsitory)
const createPostController = new CreatePostController(createPost)

export { createPost, createPostController }