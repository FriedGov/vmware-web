import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../service/login.service";
import {SessionService} from "../service/session.service";
import {LocalstorageService} from "../service/localstorage.service";
import LoginInfo from "../models/LoginInfo";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm : FormGroup = new FormGroup(
    {uname : new FormControl("", Validators.required),
    pword : new FormControl('', Validators.required)}
  );
  loginService : LoginService;
  sessionService : SessionService;
  error : string | undefined;


  constructor(private http : HttpClient, private storageService : LocalstorageService ) {
    this.loginService = new LoginService(http);
    this.sessionService =  new SessionService(storageService);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let uname = this.loginForm.get('uname')?.value;
    let pword = this.loginForm.get('pword')?.value;
    const loginInfo : LoginInfo = {username : uname, password : pword};
      console.log(loginInfo);
      const d = this.sessionService.getToken();

      if(d == "") {

        this.loginService.login(loginInfo).subscribe({
          next: res => {
            this.sessionService.setToken(res.sessionId);

          }, error: err => {
            this.error = err;
            console.error((this.error))
          }
        });
      }
      else{
        console.log("Got from storage " + d);
      }
      }
}
