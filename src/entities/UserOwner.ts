export class UserOwner {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public birthDay: number,
        public ownerNumber: number,
        public maritialState: string,
        public phoneNumber: number,
        public CPF: string,
        public ownerPicture : string | null
    ) {}
}