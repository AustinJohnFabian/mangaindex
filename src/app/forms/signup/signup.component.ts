import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  name: string = ""
  userName: string = "";
  email: string = "";
  mobile: string = "";
  pswd: string = "";
  cPswd: string = "";
  nameMsg: string = "";
  usrNameMsg: string = "";
  emailMsg: string = "";
  pswdMsg: string = "";
  cPswdMsg: string = "";
  mblMsg: string = "";
  msg: string="";

  nameValidate: string ="";
  usrNameValidate: string ="";
  emailValidate: string ="";
  pswdValidate: string ="";
  cPswdValidate: string ="";




  constructor(private http: HttpClient) { }

  nameVal() {
    let nPtrn = /^[a-z A-Z]{3,20}$/;
    let npn = nPtrn.test(this.name);

    if (npn == true) {
      this.nameMsg = "";
      this.nameValidate = "valid";
      console.log(this.nameValidate);
    }
    else {
      this.nameMsg = "*Name must be long than 3 characters and contain only Alphabetical Characters";
    }

  }

  unVal() {
      let unPtrn = /^[a-z0-9_]{3,15}$/;
      let unpn = unPtrn.test(this.userName);
  
      if (unpn == true) {
          this.usrNameMsg = "Valid Username";
          this.usrNameValidate = "valid";
      console.log(this.usrNameValidate);
      }
      else {
          this.usrNameMsg ="*Enter a valid username";
      }
  }
  
  
  mblVal() {  
      let mblPtrn = /^[6-9][0-9]{9}$/;
      let mblpn = mblPtrn.test(this.mobile);
  
      if (mblpn == true) {
          this.mblMsg = "";
      }
      else {
        this.mblMsg = "*Enter a valid mobile number";
      }
  }
  
  
  emailVal() {
  
      let ePtrn = /^[a-z._0-9]+@+[a-z]+[.]+[a-z]{2,3}$/;
      let epn = ePtrn.test(this.email);
  
      if (epn == true) {
          this.emailMsg = "Valid Email";
          this.emailValidate = "valid";
      console.log(this.emailValidate);
      }
      else {
        this.emailMsg = "*Enter a valid Email";
      }
  }
  
  pswdVal() {
  
      let pPtrn = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;
  
      let ppn = pPtrn.test(this.pswd);
      if (ppn == true) {
          this.pswdMsg = "Strong and Valid Password";
          this.pswdValidate = "valid";
      console.log(this.pswdValidate);
      }
      else {
        this.pswdMsg = "*Password must be atleast 8 characters long. And must contain a Uppercase and a lowercase Character, a number and a special character";
      }
  }
  
  cPswdVal() {  
      if (this.pswd == this.cPswd) {
          this.cPswdMsg = "Password Matched";
          this.cPswdValidate = "valid";
      console.log(this.cPswdValidate);
      }
      else {
        this.cPswdMsg = "*Enter the same password without any changes";
      }
  }
  
  
  signUp() {
    
      if (this.nameValidate && this.usrNameValidate && this.emailValidate && this.pswdValidate && this.cPswdValidate == "valid") {                
          this.registerUser();
      }
      else {
          alert("Invalid Detials Please check and fill the required detials");
      }
  
  }


  registerUser() {
    let url = "https://retoolapi.dev/pY3LON/userdetails";
    let reqObj = {
      name: this.name,
      username: this.userName,
      email: this.email,
      mobile: this.mobile,
      password: this.pswd
    };
    this.http.post(url, reqObj).subscribe(
      () => {
        this.msg = "User Registerd Successfully";
        this.resetUser();
      },
      err => {
        this.msg = "Error Occured... please try again later!"
        this.resetUser();
      }
    );
  }

  resetUser() {
    this.name = "";
    this.userName = "";
    this.email = "";
    this.mobile = "";
    this.pswd = "";
    this.cPswd = "";
  }
}
