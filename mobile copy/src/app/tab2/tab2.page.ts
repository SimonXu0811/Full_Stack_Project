import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable, Subject } from 'rxjs';
import { Patient } from '../patient';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    today: string;

  constructor(private patientService: PatientService,
              private http: HttpClient) {
      this.today = new Date(new Date().getTime() - 4 * 60 * 60 * 1000).toISOString().substr(0, 10);
  }
  patients: Observable<Patient[]>;
  lastupdatetime: string;
  check: boolean;
  array: string[];
  name: string;

  ngOnInit() {
      this.array = location.pathname.split('/');
      this.name = this.array[2];
      this.lastupdatetime = new Date(new Date().getTime() - 4 * 60 * 60 * 1000).toISOString().substr(0, 10);
      this.patientService.getPatient(this.name, this.lastupdatetime).subscribe(
          data => {this.patients = data;
          });
  }

  edit(patient) {
      this.lastupdatetime = new Date(new Date().getTime() - 4 * 60 * 60 * 1000).toISOString().substr(0, 10);
      // alert(patient.date.substr(0, 10) + patient.time + this.lastupdatetime);
      this.patientService.update(patient.id, patient.date.substr(0, 10), patient.time,
          patient.location, this.lastupdatetime).subscribe(data => {
          this.check = data;
          if (!this.check) {
              alert('Failed!');
          } else {
              alert('Succeed!');
              window.location.reload();
          }
      });
  }

}
