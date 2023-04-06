import { IUserRepository } from "../../../repositories/UserRepo/IUserRepository";
import { IEditPostDTO } from "./EditPostDTO";

export class EditPost {
    constructor(
        public userRepository: IUserRepository
    ) {}

    async execute(data: IEditPostDTO) {
        const post = await this.userRepository.editPost(data.id,data.message);
        return post
    }
}