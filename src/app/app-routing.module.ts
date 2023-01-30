import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsManagementComponent } from './docs-management/docs-management.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GaurdUserGuard } from './gaurd-user.guard';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { RegisterComponent } from './register/register.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'register-success', component: RegisterSuccessfulComponent
  },
  {
    path: 'login-success', component: LoginSuccessfulComponent
  },
  {
    path: 'docmgt', component: DocsManagementComponent
  },
  {
    path: 'edit/:id', canActivate: [GaurdUserGuard], component: EditUserComponent
  },
  {
    path: 'groupchat', component: GroupChatComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'usermgt', component: UsersManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
