import { userRopsitory } from "../../../repositories/UserRepo";
import { EditPost } from "./EditPost";
import { EditPostController } from "./EditPostController";

const editPost = new EditPost(userRopsitory);
const editPostController = new EditPostController(editPost);

export {editPost, editPostController}
