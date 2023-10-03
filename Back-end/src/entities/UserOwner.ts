export class UserOwner {
    constructor(
        public id: number,
        public propretyId : number,
        public email: string,
        public password: string,
        public name: string,
        public birthDay: number,
        public ownerNumber: number,
        public maritialState: string,
        public phoneNumber: number,
        public CPF: number,
        public ownerPicture : File
    ) {}
}