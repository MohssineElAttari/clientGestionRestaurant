import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';

@Injectable({
    providedIn: 'root'
})
export class TableServeurService {

    constructor(private http: HttpClient) { }

    getTableServeur(): Observable<any> {
        return this.http.get(API_URLS.TABLESERVEUR_URL);
    }

    getTableById(id: number): Observable<any> {
        return this.http.get(API_URLS.TABLESERVEUR_URL + `/${id}`);
    }

    addTableServeur(table: any, serveur: any, dateDebut: any, dateFin: any): Observable<any> {
        let params = new HttpParams();
        params = params.set('table', table);
        params = params.set('serveur', serveur);
        params = params.set('dateDebut', dateDebut);
        params = params.set('dateFin', dateFin);
        return this.http.post(API_URLS.TABLESERVEUR_URL, params);
    }

    updateTableServeur(table: any, serveur: any, dateDebut: any, dateFin: any): Observable<any> {
        let params = new HttpParams();
        params = params.set('table', table);
        params = params.set('serveur', serveur);
        params = params.set('dateDebut', dateDebut);
        params = params.set('dateFin', dateFin);
        return this.http.put(API_URLS.TABLESERVEUR_URL, params);
    }

    deleteTableServeur(table: any,serveur:any,dateFin:any): Observable<any> {
        console.log("iciiiii " + table);
        return this.http.delete(API_URLS.TABLESERVEUR_URL + `/${table}/${serveur}/${dateFin}`);
    }
}