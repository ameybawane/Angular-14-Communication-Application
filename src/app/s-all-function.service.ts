import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SAllFunctionService {

  constructor(private router: Router) { }

  // get user information by user id to edit user info
  getUserInfoById(id: number): any[] {
    let users = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
    return [];
  }

  // to match password 
  matchPassword(pass: string, confirmPass: string): number {
    if (pass == confirmPass) {
      // return true
      return 1;
    }
    // return false
    return 0;
  }

  // to check user already exist of same email
  checkUserAlreadyExist(email: string): boolean {
    let users = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          return true;
        }
      }
      return false;
    } 
    return false;
  }

  // To get active user
  getUser(): any[] {
    let logedInUser = JSON.parse(localStorage.getItem('logedInUser')!);
    if (logedInUser == null) {
      return [];
    } else {
      return [logedInUser];
    }
  }

  // get document information by doc id to edit doc info
  getDocInfoById(id: number): any {
    let docs = JSON.parse(localStorage.getItem('docsMngtLocalStorage')!);
    for (let i = 0; i < docs.length; i++) {
      if (docs[i].id === id) {
        return docs[i];
      }
    }
    return [];
  }

  // authenticate loged in user only
  userAuth() {
    let logedInUserAuth = JSON.parse(localStorage.getItem('logedInUser')!);
    if (logedInUserAuth == null) {
      this.router.navigate(['/welcome']);
    }
  }

}
