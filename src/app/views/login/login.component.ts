import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials = {
    username: '',
    password: ''
  };
  constructor(private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required,Validators.minLength(3)],
      password: ['', Validators.required,Validators.minLength(3)]
    })
  }
  login() {
    this.appService.authenticate(this.credentials, ()=> {
      if (!this.appService.authenticated) {
        console.log('hello');
        this.router.navigateByUrl('/dashboard');
      }
      else {
        console.log('error');
        this.router.navigateByUrl('/login');
      }

    });
  }
  register(){
    this.router.navigateByUrl('/register');
  }
}
