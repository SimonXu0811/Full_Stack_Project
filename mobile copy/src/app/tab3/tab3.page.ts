import {Component, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {Observable} from 'rxjs';
import {Patient} from '../patient';
import {contentTemplate} from '@angular-devkit/schematics';
import {loadRules} from 'tslint';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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
  data: (string|number)[][];
  columnNames: string[];
  options: any;
  width: number;
  height: number;
  array: string[];
  name: string;

  constructor(private patientService: PatientService) {
    this.array = location.pathname.split('/');
    this.name = this.array[2];
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


    this.title = '7 days report';
    this.type = 'BarChart';
    this.columnNames = ['days', 'N'];
    this.options = {};
    this.width = 375;
    this.height = 475;
  }
  ngOnInit( ) {

  }


}
