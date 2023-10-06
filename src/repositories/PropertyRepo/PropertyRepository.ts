import { PrismaClient } from "@prisma/client";
import { IPropertyRepository } from "./IPropertyRepository";
import { PropertyOfOwner } from "../../entities/PropertyOfOwner";

export  class PropertyRepository implements IPropertyRepository {
    private db = new PrismaClient();
    async cheackCFR(cfr: string): Promise<boolean> {
       const pro = await this.db.propertyOfOwner.findUnique({
        where: {
            crf: cfr
        }
       })

       if(pro) {
        return true
       }
       return false
    }
    async save(property: PropertyOfOwner): Promise<PropertyOfOwner> {
        const savee = await this.db.propertyOfOwner.create({
            data: {
              cnpj: property.cnpj,
              crf: property.crf,
              address: property.address,
              coordinates: property.coordinates,
              county: property.county,
              state: property.state,
              id_of_UserOwner: property.id_of_UserOwner
            },
        })

        return savee

    }

}
