import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: any;
  showPass = 0;
  constructor(private formBuilder: FormBuilder,
    private commonService:CommonService,
    private router: Router ) { }

  ngOnInit(): void {
    this.createForm();

  }

  changeVisibility(event) {
    if (this.showPass == 0) {
      document.getElementById("password").setAttribute('type', 'text');
      document.getElementById("eye").className = 'zmdi zmdi-eye-off';
      this.showPass = 1;
    }
    else {
      document.getElementById("password").setAttribute('type', 'password');
      document.getElementById("eye").className = 'zmdi zmdi-eye';
      this.showPass = 0;
    }
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      emailId: '',
      password: ''
    });
  }
  validatePassword(event) {
    let password = this.loginForm.controls.password.value;
    if (password === null || password === '') {
      document.getElementById('passValidator').className = "wrap-input100 validate-input alert-validate";
    } else {
      document.getElementById('passValidator').className = "wrap-input100 validate-input";
    }


  }
  validateEmail(event) {
    let pattern = (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/);
    let emailId = this.loginForm.controls.emailId.value;
    if (!pattern.test(emailId) || emailId === null || emailId === '') {
      document.getElementById('emailValidator').className = "wrap-input100 validate-input alert-validate";
    } else {
      document.getElementById('emailValidator').className = "wrap-input100 validate-input";
    }

  }

  checkCredentials(){
    let request ={
      email : this.loginForm.controls.emailId.value,
      password: this.loginForm.controls.password.value
    }
    this.commonService.checkLogin(request).subscribe( (res)=> {
      this.commonService.loggedInUser=res;
      this.router.navigateByUrl("/home");
      
    }, err => {
      console.log("Un authourized")
    } );

  }

  


}
