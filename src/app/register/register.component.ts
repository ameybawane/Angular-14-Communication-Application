import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import forms library
import { Router } from '@angular/router';
import { IUser } from '../iuser';
import { SAllFunctionService } from '../s-all-function.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup; // property form 
  users!: IUser;
  getUser: IUser[] = [];
  getItemFromLocalStorage: any;

  constructor(private fb: FormBuilder,
    private fn: SAllFunctionService,
    private router: Router) { }

  ngOnInit(): void { // method
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  save(): void {
    // either you can call service here or write logic to insert in localstorage or api

    // to match password with confirm password
    let userExist = this.fn.matchPassword(this.registerForm.value.Password, this.registerForm.value.confirmPassword);
    let checkUserAlreadyExist = this.fn.checkUserAlreadyExist(this.registerForm.value.Email);
    this.users = {
      id: Number(new Date()),
      'fullName': this.registerForm.value.Name,
      'email': this.registerForm.value.Email,
      'password': this.registerForm.value.Password
    };

    if (userExist == 0) {
      // if password dis not match throw alert
      alert("Password did not match.");
    } else if (checkUserAlreadyExist) {
      alert("User already exists!");
    } else {
      // if password matches store in regUserLocalStorage and redirect to register-success page
      this.getItemFromLocalStorage = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
      this.getUser = this.getItemFromLocalStorage ? this.getItemFromLocalStorage : []; // ternary operator
      this.getUser.push(this.users);
      localStorage.setItem("regUserLocalStorage", JSON.stringify(this.getUser));
      this.router.navigate(['/register-success']);
    }
  }
}
