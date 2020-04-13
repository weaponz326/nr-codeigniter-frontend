// contains all form login pages

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';

import { LoginWrapperComponent } from './login-wrapper/login-wrapper.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { RecoveryAwaitComponent } from './recovery-await/recovery-await.component';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { RecoverySuccessComponent } from './recovery-success/recovery-success.component';
import { FormContainerModule } from 'projects/application/src/app/form-container/form-container.module';

@NgModule({
  declarations: [
    LoginFormComponent, 
    LoginWrapperComponent, 
    LoginSuccessComponent, 
    RecoveryFormComponent, 
    RecoveryAwaitComponent, 
    ResetFormComponent, 
    RecoverySuccessComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    FormContainerModule
  ]
})
export class LoginModule { }
