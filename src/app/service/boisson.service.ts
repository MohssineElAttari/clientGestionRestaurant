import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Boisson } from '../shared/Boisson';

@Injectable()
export class BoissonService {
    constructor(private http: HttpClient) { }
    getBoisson(): Observable<any> {
        return this.http.get(API_URLS.BOISSON_URL);
    }
    addBoisson(boisson: Boisson): Observable<any> {
        return this.http.post(API_URLS.BOISSON_URL + `/add`, boisson);
    }
    updateBoisson(boisson: Boisson): Observable<any> {
        return this.http.put(API_URLS.BOISSON_URL+`/update`, boisson);
    }
    deleteBoisson(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.BOISSON_URL + `/delete/${id}`);
    }

}