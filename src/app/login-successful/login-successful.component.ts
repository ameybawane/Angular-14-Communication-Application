import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SAllFunctionService } from '../s-all-function.service';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {

  constructor(private fn: SAllFunctionService) { }

  loginUser: any;
  ngOnInit(): void {
    this.fn.userAuth();
    this.loginUser = this.fn.getUser();
  }

}
