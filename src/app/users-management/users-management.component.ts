import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../iuser';
import { SAllFunctionService } from '../s-all-function.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  userList: IUser[] = []; // property
  messageList!: any[];
  users!: IUser;
  name: any;
  username: string = "";
  deletionId: any;
  getItemFromLocalStorage: any;
  constructor(private fn: SAllFunctionService) { }

  ngOnInit(): void {
    this.fn.userAuth();
    this.name = this.fn.getUser()[0]['logedInUserId'];
    this.userList = JSON.parse(localStorage.getItem('regUserLocalStorage')!);
    this.messageList = JSON.parse(localStorage.getItem('userChatLocalStorage')!);
  }

  getDeleteUserId(id: number, name: string): void {
    this.deletionId = id;
    this.username = name;
  }

  confirmDelete() {
    // this.deletionId = caputerd id on button click (x.id = IUser.id)
    this.userList = this.userList.filter(x => x.id !== this.deletionId);
    localStorage.setItem('regUserLocalStorage', JSON.stringify(this.userList));

    this.messageList = this.messageList.filter(y => y.userName !== this.username);
    localStorage.setItem('userChatLocalStorage', JSON.stringify(this.messageList));
    this.ngOnInit();
  }

}
