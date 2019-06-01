import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
    public authenticated: boolean = false;
    constructor() {

    }
    authenticate(credentials, callback) {
        if (credentials.username == "user" && credentials.password == "pass") {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    }
}