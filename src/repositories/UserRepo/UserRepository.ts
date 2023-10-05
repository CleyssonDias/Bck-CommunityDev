import { UserRoot } from "../../entities/UserRoot";
import { IUserRepository } from "./IUserRepository";
import { PrismaClient } from "@prisma/client";
export class UserRepository implements IUserRepository {

    private Banco = new PrismaClient();

    async checkEmail(email: string): Promise<UserRoot> {
        const user = await this.Banco.root.findUnique({
            where: {
              email,
            }
        });

        return user
    }
    async save(user: UserRoot): Promise<UserRoot> {
        const result = await this.Banco.root.create({
            data: {
              nome: user.nome,
              email: user.email,
              password: user.password
            },
          });
      
          return result;
    }
  
}