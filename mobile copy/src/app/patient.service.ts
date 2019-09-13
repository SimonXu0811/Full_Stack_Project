import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from './patient';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  save(name: string, date: string, time: string, location: string, lastUpdateTime: string): any {
    // alert(name + date + time + location + lastUpdateTime);
    return this.http.post('http://localhost:8080/api/add', {name, date, time, location, lastUpdateTime});
  }

  getPatient(name: string, lastUpdateTime: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/report?name=' + name + '&lastUpdateTime=' + lastUpdateTime);
  }

  update(id: number, date: string, time: string, location: string, lastUpdateTime: string): any {
    return this.http.post('http://localhost:8080/api/update', { id, date, time, location, lastUpdateTime });
  }

  isExist(name: string): any {
    return this.http.post('http://localhost:8080/api/isExist?name=' + name, {name});
  }

  getnumber(name: string, lastUpdateTime: string): any {
    return this.http.get('http://localhost:8080/api/number?name=' + name + '&lastUpdateTime=' + lastUpdateTime);
  }
}
