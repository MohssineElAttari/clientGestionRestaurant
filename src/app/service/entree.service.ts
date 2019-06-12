import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entree } from '../shared/Entree';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EntreeService {
    constructor(private http: HttpClient) { }
    getEntree(): Observable<any> {
        return this.http.get(API_URLS.ENTREE_URL);
    }
    addEntree(entree: FormData): Observable<any> {
        return this.http.post(API_URLS.ENTREE_URL + `/add`, entree);
    }
    updateEntree(entree: Entree): Observable<any> {
        return this.http.put(API_URLS.ENTREE_URL + `/update`, entree);
    }
    deleteEntree(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.ENTREE_URL + `/delete/${id}`);
    }
}