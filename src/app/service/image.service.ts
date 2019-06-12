import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Image } from '../shared/Image';

@Injectable()
export class ImageService {
    constructor(private http: HttpClient) { }
    getImages(): Observable<any> {
        return this.http.get(API_URLS.TEST_URL);
    }
    addImage(fromData: FormData): Observable<any> {
        return this.http.post(API_URLS.TEST_URL + `/add`, fromData);
    }
    updateImage(imageFile: Image): Observable<any> {
        return this.http.put(API_URLS.TEST_URL + `/update`, imageFile);
    }
    deleteImage(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.TEST_URL + `/delete/${id}`);
    }

}