import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterWrapperComponent } from './register-wrapper/register-wrapper.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';


const routes: Routes = [
  {
    path: "",
    component: RegisterWrapperComponent,
    children: [
      { path: "", component: RegisterFormComponent },
      { path: "register", component: RegisterFormComponent },
      { path: "success", component: RegisterSuccessComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
