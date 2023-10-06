import { PropertyOfOwner } from "../../entities/PropertyOfOwner"

export interface IPropertyRepository {
    cheackCFR(cfr: string): Promise<boolean>
    save(property: PropertyOfOwner): Promise<PropertyOfOwner>
}