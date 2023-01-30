import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import forms library
import { Router } from '@angular/router';
import { IUser } from '../iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // property form 
  users: any;
  logedInUser: any;
  getItemFromLocalStorage: any;
  login: IUser[] = [];
  constructor(private fb: FormBuilder, private router: Router) { } // fb - form builder

  ngOnInit(): void { // method
    this.login = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    })
  }

  checkLogin() {
    let email = this.loginForm.value.Email;
    let password = this.loginForm.value.Password;
    for (let i = 0; i < this.login.length; i++) {
      // to verify user email and password
      if (this.login[i].email == email && this.login[i].password == password) {
        // alert("Login is successful");
        // logedInUser objects object
        this.logedInUser = {
          logedInUserName: this.login[i].fullName,
          logedInUserEmail: this.login[i].email,
          logedInUserId: this.login[i].id
        }
        localStorage.setItem('logedInUser', JSON.stringify(this.logedInUser));
        this.router.navigate(['/login-success']); // redirect
        return;
      }
    }
  }
}
