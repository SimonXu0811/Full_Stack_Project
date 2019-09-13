import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable, Subject } from 'rxjs';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent implements OnInit {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  n5: number;
  n6: number;
  n7: number;

  time1: string;
  time2: string;
  time3: string;
  time4: string;
  time5: string;
  time6: string;
  time7: string;
  title: string;
  type: string;
  columnNames: string[];
  options: any;
  width: number;
  height: number;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.name = String (params['name']);
    });

    this.time1 = new Date(new Date().getTime() - 4 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time2 = new Date(new Date().getTime() - 28 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time3 = new Date(new Date().getTime() - 52 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time4 = new Date(new Date().getTime() - 76 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time5 = new Date(new Date().getTime() - 100 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time6 = new Date(new Date().getTime() - 124 * 60 * 60 * 1000).toISOString().substr(0, 10);
    this.time7 = new Date(new Date().getTime() - 148 * 60 * 60 * 1000).toISOString().substr(0, 10);

    this.patientService.getnumber(this.name, this.time1).subscribe(
      data => {
        this.n1 = data;
      });
    this.patientService.getnumber(this.name, this.time2).subscribe(
      data => {this.n2 = data;
      });
    this.patientService.getnumber(this.name, this.time3).subscribe(
      data => {this.n3 = data;
      });
    this.patientService.getnumber(this.name, this.time4).subscribe(
      data => {this.n4 = data;
      });
    this.patientService.getnumber(this.name, this.time5).subscribe(
      data => {this.n5 = data;
      });
    this.patientService.getnumber(this.name, this.time6).subscribe(
      data => {this.n6 = data;
      });
    this.patientService.getnumber(this.name, this.time7).subscribe(
      data => {this.n7 = data;
      });
  }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  patients: Observable<Patient[]>;
  name: string;

ngOnInit() {
    this.dtOptions = {
      pageLength: 10,
      stateSave: true,
      lengthMenu: [[10], [10]],
      processing: true
    };
    this.route.params.subscribe(params => {
      this.patientService.getPatient(String (params['name'])).subscribe(data => {this.patients = data; this.dtTrigger.next();
      });
  });

    this.title = '7 days report';
    this.type = 'BarChart';
    this.columnNames = ['days', 'amount'];
    this.options = {};
    this.width = 500;
    this.height = 400;

}
back() {
    history.back();
  }


}

