import {Component, OnInit} from '@angular/core';
import { PatientService } from '../patient.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {reset} from '@angular-devkit/core/src/terminal';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private datenow: string;
  private timenow: string;
  private lastUpdateTime: string;
  private today: string;
  name: string;
  check: Observable<boolean>;
  location: string;
  array: string[];

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
    this.datenow = new Date(new Date().getTime()).toISOString();
    this.timenow = new Date(new Date().getTime()).toISOString();
    this.today = new Date(new Date().getTime()).toISOString();
  }

  ngOnInit() {
    this.array = location.pathname.split('/');
    this.name = this.array[2];
  }

  submit() {
      if (this.location == null) {
        alert('Select your location!');
        return;
      }
      this.datenow = new Date(new Date(this.datenow).getTime() - 4 * 60 * 60 * 1000).toISOString();
      this.datenow = this.datenow.substr(0, 10);

      this.timenow = new Date(new Date(this.timenow).getTime() - 4 * 60 * 60 * 1000).toISOString();
      this.timenow = this.timenow.substr(11, 8);

      this.lastUpdateTime = new Date(new Date().getTime() - 4 * 60 * 60 * 1000).toISOString().substr(0, 10);
      this.patientService.save(this.name, this.datenow, this.timenow, this.location, this.lastUpdateTime).subscribe(data => {
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

