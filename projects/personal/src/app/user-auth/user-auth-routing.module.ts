import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { UserAuthWrapperComponent } from './user-auth-wrapper/user-auth-wrapper.component';

const routes: Routes = [
  {
    path: "",
    component: UserAuthWrapperComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "recovery", component: RecoveryComponent },
      { path: "reset", component: ResetComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
