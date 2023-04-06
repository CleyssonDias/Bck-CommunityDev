import { User } from "../../entities/User"

type ITokenData = {
  id: number,
  pass: string,
  time: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findByUser(id: number): Promise<User>
  save(user: User): Promise<User>
  encryptpass(password: string): Promise<string>
  verifyPass(pass: string, passU:string): Promise<any>
  generateToken(data: ITokenData): Promise<string>
  savePost(email:string, message: string): Promise<any>
  getPosts(email:string): Promise<any>
  deletePost(id: number): Promise<any>
  editPost(id: number, message: string): Promise<any>
}