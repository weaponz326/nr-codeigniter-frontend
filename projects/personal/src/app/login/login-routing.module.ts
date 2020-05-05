// routing between all login pages
// all form pages are witihin form container

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginWrapperComponent } from './login-wrapper/login-wrapper.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { RecoveryAwaitComponent } from './recovery-await/recovery-await.component';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { RecoverySuccessComponent } from './recovery-success/recovery-success.component';


const routes: Routes = [
  {
    path: "",
    component: LoginWrapperComponent,
    children: [
      { path: "", component: LoginFormComponent },
      { path: "login", component: LoginFormComponent },
      { path: "success", component: LoginSuccessComponent },
      { path: "recovery", component: RecoveryFormComponent },
      { path: "await", component: RecoveryAwaitComponent },
      { path: "reset", component: ResetFormComponent },
      { path: "recsuccess", component: RecoverySuccessComponent },
      { path: "**", component: LoginFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
