import { User } from "../../entities/User";
import { IUserRepository } from "./IUserRepository";
import { PrismaClient } from "@prisma/client";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

type ITokenData = {
  id: number;
  pass: string;
  time: string;
};

export class UserRopsitory implements IUserRepository {
  
  private prisma: PrismaClient = new PrismaClient();
  private crypt: Function = hash;
  private gToken: Function = sign;
  private verifyP: Function = compare;

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async findByUser(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where:{
        id:id
      }
    })
    return user;
  }

  async save(user: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      },
    });

    return result;
  }

  async encryptpass(password: string): Promise<string> {
    const result = await this.crypt(password, 1);

    return result;
  }

  async generateToken(data: ITokenData): Promise<string> {
    const token = await this.gToken({ userID: data.id }, data.pass, {
      subject: `${data.id}`,
      expiresIn: data.time,
    });

    return token;
  }

  async verifyPass(pass: string, passU: string): Promise<any> {
    const passw = await this.verifyP(pass, passU);
    return passw;
  }

  async savePost(email: string, message: string): Promise<any> {
      const user = await this.findByEmail(email);
      if (user) {
        const post = await this.prisma.post.create({
          data: {
            message,
            authorId: user.id,
          },
        });

        return post;
      }
      
      return {err:"error in saved post"}
  }

  async getPosts(email: string): Promise<any> {
    
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email
        },
        include: {
          posts: true,
        },
      })

      return user;
    } catch (err) {
      return {err:"error in get post"}
    }
      
    
    
     
  }

  async deletePost(id: number): Promise<any> {
    
    try {
      const post = await this.prisma.post.delete({
        where: {
          id
        }
      })
      return post
    } catch (err) {
      return {err:"error in delete post"}
    }

    


  }

  async editPost(id: number, message: string): Promise<any> {
    try {
      const post = await this.prisma.post.update({
        where: {
          id
        },
        data: {
          message
        }
      })
      return post
    } catch (err) {
      return {err:"error in edit post"}
    }
  }
}