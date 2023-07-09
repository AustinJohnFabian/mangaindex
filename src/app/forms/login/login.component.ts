import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData: any;
  userName: string = "";
  pswd: string = "";
  user: any = {};
  errMsg: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  validateLogin() {
    let url = "https://retoolapi.dev/pY3LON/userdetails?username=" + this.userName;
    this.http.get(url).subscribe(
      (response: any) => {
        if (response.length > 0) {
          this.user = response[0];
          if (this.user.username === this.userName && this.user.password === this.pswd) {
            this.userService.setUser(this.user); // Set user profile in UserService

            this.showWelcomeAlert();

            this.router.navigate(['/home']);

          } else {
            this.errMsg = "Invalid Credentials";
          }
        } else {
          this.errMsg = "User Not Found";
        }
      },
      err => {
        this.errMsg = "User Not Found";
      }
    );
  }

  showWelcomeAlert() {
    window.alert('Welcome back ' + this.userName + ' - Login Successful');
  }
}
