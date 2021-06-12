// routing between all signup pages
// all form pages are witihin form container

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { FormContainerModule } from 'projects/application/src/app/form-container/form-container.module';
import { UserAuthApiService } from './user-auth-api.service';

import { UserAuthRoutingModule } from './user-auth-routing.module';

import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';
import { UserAuthWrapperComponent } from './user-auth-wrapper/user-auth-wrapper.component';


@NgModule({
  declarations: [
    SignupComponent,
    RegisterComponent,
    LoginComponent,
    RecoveryComponent,
    ResetComponent,
    UserAuthWrapperComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormContainerModule
  ],
  exports: [
    UserAuthWrapperComponent
  ],
  providers: [
    UserAuthApiService
  ]
})
export class UserAuthModule { }
