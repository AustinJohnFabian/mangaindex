import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor (private usrservice : UserService){}

  //constructor(private router: Router){}
 //constructor(private http: HttpClient){}

  userData : any;
  userName : string ="";
  pswd : string ="";
  user : any = {};
  errMsg: string = "";

  ngOnInit(): void {

    this.usrservice.getUser().subscribe(response => {
      console.log(response);
    })
  }



 /* loadData(){
    this.http.get("http://localhost:5246/api/User").subscribe(
      response => {
        this.userData = response;   
      },
      err => {
        console.log(err);
      }
    );
  }

  validateLogin(){
    let url = "http://localhost:5246/api/User?UserName=" + this.userName;
    this.http.get(url).subscribe(
      (response : any)=>{
        if(response.length > 0){
          this.user = response[0];
          if (this.user.UserName == this.userName && this.user.Password == this.pswd){
            this.errMsg ="Login Success";
          }
          else{
            this.errMsg = "Invalid Credentials";
          }
        }
        else{
          this.errMsg = "User Not Found";
        }
      },
      err => {
        this.errMsg = "User Not Found";
      }
    );
  }*/

}
