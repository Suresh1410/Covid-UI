import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: any;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      emailId:'',
      password:''
    });
  }


}
