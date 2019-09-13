import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getusername(uuid: string): any {
    return this.http.get('http://localhost:8080/api/mobileuser?uuid=' + uuid);
  }

  savemobile(username: string, uuid: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/addmobile', { username, uuid });
  }
}
