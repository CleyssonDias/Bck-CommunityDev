export class PropertyOfOwner {
    constructor(
        public cnpj: string,
        public crf: string,
        public state: string,
        public county: string,
        public address: string,
        public coordinates: string,
        public id_of_UserOwner: number
    ) {}
}