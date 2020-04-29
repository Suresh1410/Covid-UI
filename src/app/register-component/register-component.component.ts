import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
 registerForm: any;
  showPass = 0;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,private commonService:CommonService,
    private router:Router) { }

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
    this.registerForm = this.formBuilder.group({
      name:'',
      phoneNo:'',
      emailId: '',
      password: '',
      confirmpassword: ''
    });
  }
  validateEmailAndPassword(event) {
    let pattern = (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/);
    let emailId = this.registerForm.controls.emailId.value;
    let password = this.registerForm.controls.password.value;
    if (!pattern.test(emailId) || emailId === null || emailId === '') {
      document.getElementById('emailValidator').className = "wrap-input100 validate-input alert-validate";
    } else {
      document.getElementById('emailValidator').className = "wrap-input100 validate-input";
    }
    if (password === null || password === '') {
      document.getElementById('passValidator').className = "wrap-input100 validate-input alert-validate";
    } else {
      document.getElementById('passValidator').className = "wrap-input100 validate-input";
    }


  }

  createUser(){
    this.errorMessage="";
    if(this.registerForm.controls.password.value == this.registerForm.controls.confirmpassword.value){
      let request:RegisterModel=new RegisterModel();
      request.userName=this.registerForm.controls.name.value;
      request.contactNo=this.registerForm.controls.phoneNo.value;
      request.emailId=this.registerForm.controls.emailId.value;
      request.password=this.registerForm.controls.password.value;
      request.roleType="user";
      this.commonService.createUser(request).subscribe( (res)=> {
        this.router.navigateByUrl("/login");
        
      }, err => {
        if(err.status == 200){
          this.router.navigateByUrl("/login");
        }else if(err.status == 401){
          this.errorMessage="Email already exists";
        }
      } );
    }else{
      this.errorMessage="Password does not match";
    }
  


  }

  


}

export class RegisterModel{

userName : string
roleType : string
userType :string
memberSince :string
password : string
emailId : string
contactNo : string
addLine1:string
}
