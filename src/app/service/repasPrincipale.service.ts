import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { RepasPrincipale } from '../shared/RepasPrincipale';

@Injectable()
export class RepasPrincipaleService {
    constructor(private http: HttpClient) { }
    getRepasPrincipale(): Observable<any> {
        return this.http.get(API_URLS.REPAS_PRINCIPALE_URL);
    }
    addRepasPrincipale(repasPrincipale: FormData): Observable<any> {
        return this.http.post(API_URLS.REPAS_PRINCIPALE_URL + `/add`, repasPrincipale);
    }
    updateRepasPrincipale(repasPrincipale: RepasPrincipale): Observable<any> {
        return this.http.put(API_URLS.REPAS_PRINCIPALE_URL+`/update`, repasPrincipale);
    }
    deleteRepasPrincipale(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.REPAS_PRINCIPALE_URL + `/delete/${id}`);
    }

}