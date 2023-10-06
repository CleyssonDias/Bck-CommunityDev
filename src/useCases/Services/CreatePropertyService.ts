import { PropertyOfOwner } from "../../entities/PropertyOfOwner";
import { IPropertyRepository } from "../../repositories/PropertyRepo/IPropertyRepository"
import { ICreatePropertyDTO } from "../IDTOs/ICreatePropertyDTO"

export class CreatePropertyService {
  constructor(
    public repository: IPropertyRepository
  ) { }

  async execute(data: ICreatePropertyDTO) {
    try {
      const cheack = await this.repository.cheackCFR(data.crf)
      if(cheack) throw { code: 400, message: "property already register in the sistem" };

      const porperty = new PropertyOfOwner(
        data.cnpj,
        data.crf,
        data.state,
        data.county,
        data.address,
        data.coordinates,
        data.id_of_UserOwner
      );

      const result = await this.repository.save(porperty);

      return result
    } catch (error) {
      console.log(error)
      var me = "The owner id is invalid!"
      if(error.message == "property already register in the sistem") me = "property already register in the sistem" ;
      if(error.message.includes("(`cnpj`)")) me = "CNPJ of the property already registered!";
      throw { code: 400, message: me };
    }
    
  }
}