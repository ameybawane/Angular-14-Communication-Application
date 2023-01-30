import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import forms library
import { ActivatedRoute, Router } from '@angular/router';
import { SAllFunctionService } from '../s-all-function.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editUserForm!: FormGroup; // property form 
  users: any;
  editUser: any;
  id: any;
  editUserInfo = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
  constructor(private fb: FormBuilder,
    private fn: SAllFunctionService,
    private rt: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { // method
    this.fn.userAuth();
    // get user id from url (routing with parameter)
    this.id = Number(this.rt.snapshot.paramMap.get('id'));
    this.editUser = this.fn.getUserInfoById(this.id);
    this.editUserForm = this.fb.group({
      fullName: [this.editUser.fullName, [Validators.required]],
      Email: [this.editUser.email, [Validators.required, Validators.email]]
    });
  }

  updateUser() {
    let newEmail = this.editUserForm.get('Email')?.value;
    let newFullName = this.editUserForm.get('fullName')?.value;
    for (let i = 0; i < this.editUserInfo.length; i++) {
      if (this.editUserInfo[i].id == this.editUser.id) {
        this.editUserInfo[i].fullName = newFullName;
        this.editUserInfo[i].email = newEmail;
        break;
      }
    }
    localStorage.setItem('regUserLocalStorage', JSON.stringify(this.editUserInfo));

    if (this.fn.getUser()[0]['logedInUserId'] == this.id) {
      // to replicate updated user name
      let loggedInUser = {
        logedInUserName: newFullName,
        logedInUserEmail: newEmail,
        logedInUserId: this.fn.getUser()[0]['logedInUserId']
      }
      localStorage.setItem('logedInUser', JSON.stringify(loggedInUser));
    }

    this.router.navigate(['/usermgt']);
  }
}
