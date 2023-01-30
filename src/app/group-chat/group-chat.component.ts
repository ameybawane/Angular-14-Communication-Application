import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import forms library
import { IGroupChat } from '../igroup-chat';
import { SAllFunctionService } from '../s-all-function.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {

  groupChatForm!: FormGroup; // property 
  chatBox: IGroupChat[] = [];
  getItemFromLocalStorage: any;
  chatList!: IGroupChat;
  allMessages: IGroupChat[] = [];
  name: any;
  constructor(private fb: FormBuilder,
    private fn: SAllFunctionService) { }

  ngOnInit(): void {// method
    this.fn.userAuth();
    this.allMessages = JSON.parse(localStorage.getItem('userChatLocalStorage')!);
    this.groupChatForm = this.fb.group({
      Message: ['', [Validators.required]]
    })
    this.name = this.fn.getUser();
  }

  saveGroupChat(): void {
    this.chatList = {
      'dateTime': (new Date()).toString(),
      'userName': this.name[0]['logedInUserName'],
      'message': this.groupChatForm.value.Message
    };

    this.getItemFromLocalStorage = JSON.parse(localStorage.getItem('userChatLocalStorage')!);
    this.chatBox = this.getItemFromLocalStorage ? this.getItemFromLocalStorage : [];
    this.chatBox.push(this.chatList);
    localStorage.setItem("userChatLocalStorage", JSON.stringify(this.chatBox));
    this.ngOnInit();
  }

}
