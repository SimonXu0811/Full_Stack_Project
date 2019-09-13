import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  check: Observable<boolean>;
  exist: Observable<boolean>;

  constructor( private router: Router,
               private userService: UserService,
               private  activeRouter: ActivatedRoute) { }
  ngOnInit() {}

  login() {

    if (this.user.username == null || this.user.password == null) {
      alert('Please Enter Username and Password');
      return;
    }

    this.userService.exist(this.user.username).subscribe( data => {
      this.exist = data;
      if (this.exist) {
        this.userService.login(this.user.username, this.user.password).subscribe(data => {
          this.check = data;
          if (this.check) {
            this.router.navigate(['all']);
          } else {
            alert('Please Enter the Correct Password');
          }
        });
      } else {
        alert('Please Enter the right username !');
      }
    });

  }

}
