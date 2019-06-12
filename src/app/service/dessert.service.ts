import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Dessert } from '../shared/dessert';

@Injectable()
export class DessertService {
    constructor(private http: HttpClient) { }
    getDessert(): Observable<any> {
        return this.http.get(API_URLS.DESSERT_URL);
    }
    addDessert(formData: FormData): Observable<any> {
        return this.http.post(API_URLS.DESSERT_URL + `/add`,formData);
    }
    updateDessert(dessert: Dessert): Observable<any> {
        return this.http.put(API_URLS.DESSERT_URL+`/update`,dessert);
    }
    deleteDessert(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.DESSERT_URL + `/delete`+`/${id}`);
    }

}