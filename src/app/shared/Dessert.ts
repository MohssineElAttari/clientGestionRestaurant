export class Dessert {
    constructor(
        public id?:number,
        public nom?: string,
        public type?: string,
        public info?: string,
        public prixRepas?: number,
        public durreCuisson?: number,
        public photo?: string
    ) {
    }
}