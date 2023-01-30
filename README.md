# Angular-14-Communication-Application

Project - Communication Application 

1. Create below Components and UI ready

Welcome
Login 
LoginSuccessful
Register 
RegisterSuccessful
UsersManagement 
GroupChat 
DocsManagement
Logout 

2. All Form Validation using Reactive Form

Register, Login, EditUsers, SendChat, Edit Upload, Add upload ...

Empty field Validation
Email validation 
Password and Confirm password field validation 

3. When users register, insert data in to localstorage (users), When same user register again, then display error message users already exist

For example, insder array of object below inside users localstorage

[
    {
        id: 1,
        fullname: 'Anne Hunter',
        email: 'anne.hunter@gmail.com',
        password: 'anne123'
    }
]

4. On Login page, when user enter email and password and click on login, check weather user email and password exist inside localstorage or not.

if exist redirect to LoginSuccessful page else stay on the same page with proper error message.

When use login store loggedIn user information inside local storage

For example, loggedIn user detail below 

{
    fullname: 'Anne Hunter',
    email: 'anne.hunter@gmail.com',
}

For navigation use angular routing

Chat Management 

5. When use type message and click on send button, store chat information inside chats localstorage

chats 

[
    {
        date: '23-11-2022',
        fullname: 'Anne',
        message: 'Hi'
    }
]

6. On Chat page, display chat information from localstorage along with loggedIn username.

chats localstorage
loggedIn localstorage

7. When user click on refresh button refresh chat area, for example incase you are using div refresh div only 

Users Management

8. Display users from users localstorage.

9. When user click on edit, allow users to edit page, use reactive form approach.

10. When user click on delete, delete user from users localstorage.

Manage documents 

11. Display list of uploads from uploads localstorage
12. Allow users to edit upload using localstorage.
13. When user click on delete upload, delete from uploads localstorage.
14. When user click on logout remove loggedIn users from localstorage. 
15. Only logged in user can access internal pages else redirect to login page.
16. Implement Angular routing feature.

Note:

User Angular Reactive Form 
Angular Routing 
Angular Guard
Component 
User service 
Use interface for data type 
Try to use angular lifecycle 
SCSS for styles
