import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/all');
  }

  getPatient(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/patient/' + name);
  }

  getnumber(name: string, lastUpdateTime: string): any {
    return this.http.get(`${this.baseUrl}` + '/number?name=' + name + '&lastUpdateTime=' + lastUpdateTime);
  }

}
