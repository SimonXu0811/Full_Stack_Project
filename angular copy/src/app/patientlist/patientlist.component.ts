import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable, Subject } from 'rxjs';
import { Patient } from '../patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  constructor(private patientService: PatientService,
              private router: Router) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  patients: Observable<Patient[]>;

  ngOnInit() {
    this.dtOptions = {
      pageLength: 20,
      stateSave: true,
      lengthMenu: [20],
      processing: true,
      ordering: false
    };
    this.patientService.getPatientList().subscribe(data => {
    this.patients = data;
    this.dtTrigger.next();
    });
  }
  show(patient) {
    this.router.navigate(['all', patient.name]);
  }

  getStatus(patient) {
    const dateBegin = new Date(patient.lastUpdateTime .replace(/-/g, "/"));
    const dateEnd = new Date();
    const dateDiff = dateEnd.getTime() - dateBegin.getTime();
    const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
    if (dayDiff >= 2 && dayDiff < 3) {
      return 'middle';
    } else if (dayDiff >= 3) {
      return 'high';
    } else {
      return 'normal';
    }
  }
}
