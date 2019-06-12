import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../shared/Commande';

@Injectable()
export class CommandeService {
    constructor(private http: HttpClient) { }
    getCommande(): Observable<any> {
        return this.http.get(API_URLS.BOISSON_URL);
    }
    getRepasNames(name: any): Observable<any> {
        return this.http.get(API_URLS.COMMANDEREPAS_URL + `/names?name=` + name);
    }

    getRepasCounts(name: any): Observable<any> {
        return this.http.get(API_URLS.COMMANDEREPAS_URL + `/counts?name=` + name);
    }


    addCommande(commande: Commande): Observable<any> {
        return this.http.post(API_URLS.BOISSON_URL + `/add`, commande);
    }
    updateCommande(commande: Commande): Observable<any> {
        return this.http.put(API_URLS.BOISSON_URL + `/update`, commande);
    }
    deleteCommande(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.BOISSON_URL + `/delete/${id}`);
    }

}