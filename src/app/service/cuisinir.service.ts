import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Cuisinir } from '../shared/Cuisinir';

@Injectable()
export class CuisinirService {
    constructor(private http: HttpClient) { }

    getCuisinirs(): Observable<any> {
        return this.http.get(API_URLS.Cuisinir_URL);
    }
    addCuisinir(cuisinir: Cuisinir): Observable<any> {
        return this.http.post(API_URLS.Cuisinir_URL + `/add`, cuisinir);
    }

    updateCuisinir(cuisinir: Cuisinir): Observable<any> {
        return this.http.put(API_URLS.Cuisinir_URL + `/update`, cuisinir);
    }

    deleteCuisinir(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.Cuisinir_URL + `/delete` + `/${id}`);
    }
}