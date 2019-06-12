import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Table } from '../shared/Table';

@Injectable()
export class TableService {
    constructor(private http: HttpClient) { }
    getTable(): Observable<any> {
        return this.http.get(API_URLS.TABLE_URL);
    }
    addTable(table: Table): Observable<any> {
        return this.http.post(API_URLS.TABLE_URL + `/add`, table);
    }
    updateTable(table: Table): Observable<any> {
        return this.http.put(API_URLS.TABLE_URL+`/update`, table);
    }
    deleteTable(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.TABLE_URL + `/delete/${id}`);
    }

}