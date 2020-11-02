// routing between all signup pages
// all form pages are witihin form container

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupWrapperComponent } from './signup-wrapper/signup-wrapper.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { VerificationAwaitComponent } from './verification-await/verification-await.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

const routes: Routes = [
  {
    path: "",
    component: SignupWrapperComponent,
    children: [
      { path: "", component: ProfileFormComponent },
      { path: "profile", component: ProfileFormComponent },
      { path: "account", component: AccountFormComponent },
      { path: "await", component: VerificationAwaitComponent },
      { path: "success", component: SignupSuccessComponent },
      { path: "**", component: ProfileFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
