export class Commande {
    constructor(
        public id?:number,
        public date?: any,
        public heure?: number,
        public etat?: string,
        public categorie?: string,
        public livration?: any,
        public client?: any
    ) {
    }
}