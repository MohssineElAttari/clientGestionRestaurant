import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Livreur } from '../shared/Livreur';

@Injectable()
export class LivreurService {
    constructor(private http: HttpClient) { }

    getLivreurs(): Observable<any> {
        return this.http.get(API_URLS.Livreur_URL);
    }
    addLivreur(livreur: Livreur): Observable<any> {
        return this.http.post(API_URLS.Livreur_URL + `/add`, livreur);
    }

    updateLivreur(livreur: Livreur): Observable<any> {
        return this.http.put(API_URLS.Livreur_URL + `/update`, livreur);
    }

    deleteLivreur(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.Livreur_URL + `/delete` + `/${id}`);
    }
}