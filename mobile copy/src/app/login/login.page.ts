import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PatientService} from '../patient.service';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string;
  uuid: string;
  check: Observable<boolean>;
  user: User;
  succe: Observable<boolean>;
  constructor(private route: Router, private patientService: PatientService, private userService: UserService) {
      this.uuid = '987654';
      this.userService.getusername(this.uuid).subscribe( data => {
          this.user = data;
          if (this.user != null) {
              return this.route.navigate(['tabs', this.user.username]);
          }
      });
  }


    login(username) {
      if (this.username == null) {
      alert('Username cannot be empty');
      return;
    }
      this.patientService.isExist(this.username).subscribe(data => {
        this.check = data;
        if (!this.check) {
            this.userService.savemobile(this.username, this.uuid).subscribe( data => {
                this.succe = data;
                if (this.succe) {
                    this.route.navigate(['tabs', username]);
                }
            });
        } else {
          alert('Username already exists');
        }
      });
  }


}
