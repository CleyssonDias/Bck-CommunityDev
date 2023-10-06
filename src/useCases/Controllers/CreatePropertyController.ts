import { Request, Response } from "express";
import { CreatePropertyService } from "../Services/CreatePropertyService";

export class CreatePropertyController {
  constructor(public service: CreatePropertyService) {}

  async handle(req: Request, res: Response) {
    try {
      const user = req.body;
      const resultop = ["cnpj", "crf", "state", "county", "address" , "coordinates", "id_of_UserOwner"]
      if(this.saoArraysDiferentes(Object.keys(user), resultop)) return res.status(400).json({ error: "Arguments are missing." });
      
      const response = await this.service.execute(user);

      return res.status(201).json({response});
    } catch (error) {
      return res.status(error.code).json({
        error: error.message || "Unexpected error.",
      });
    }
  }

  saoArraysDiferentes(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
      return true; // Os arrays têm tamanhos diferentes, então são diferentes.
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return true; // Elementos diferentes encontrados, os arrays são diferentes.
      }
    }
  
    return false; // Todos os elementos são iguais, os arrays são iguais.
  }
  
}
