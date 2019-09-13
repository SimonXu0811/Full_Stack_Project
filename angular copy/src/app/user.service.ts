import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): any {
    return  this.http.post(`${this.baseUrl}` + '/login?username=' + username + '&password=' + password, { username, password} );
  }
  exist(username: string): any {
    return this.http.get( `${this.baseUrl}` + '/exist?username=' + username);
  }
}
