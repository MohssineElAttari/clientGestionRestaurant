import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Client } from '../shared/Client';

@Injectable()
export class ClientService {
    constructor(private http: HttpClient) { }

    getClients(): Observable<any> {
        return this.http.get(API_URLS.CLIENT_URL);
    }
    addClient(client: Client): Observable<any> {
        return this.http.post(API_URLS.CLIENT_URL + `/add`, client);
    }

    updateClient(client: Client): Observable<any> {
        return this.http.put(API_URLS.CLIENT_URL + `/update`, client);
    }

    deleteClient(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.CLIENT_URL + `/delete` + `/${id}`);
    }
}