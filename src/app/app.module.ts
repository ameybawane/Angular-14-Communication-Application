import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { DocsManagementComponent } from './docs-management/docs-management.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // importing forms module
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessfulComponent,
    UsersManagementComponent,
    GroupChatComponent,
    DocsManagementComponent,
    LogoutComponent,
    LoginSuccessfulComponent,
    EditUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // forms module
    HttpClientModule,
    ReactiveFormsModule // reactive forms module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
