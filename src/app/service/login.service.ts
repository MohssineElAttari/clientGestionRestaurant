import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Client } from '../shared/Client';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    
}