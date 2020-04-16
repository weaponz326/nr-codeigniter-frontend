// routing between all signup pages
// all form pages are witihin form container

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { SignupRoutingModule } from './signup-routing.module';
import { FormContainerModule } from 'projects/application/src/app/form-container/form-container.module';

import { SignupWrapperComponent } from './signup-wrapper/signup-wrapper.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { VerificationAwaitComponent } from './verification-await/verification-await.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { VerificationFormComponent } from './verification-form/verification-form.component';
import { SignupApiService } from './signup-api.service';

@NgModule({
  declarations: [
    SignupWrapperComponent, 
    ProfileFormComponent, 
    AccountFormComponent, 
    VerificationAwaitComponent, 
    SignupSuccessComponent, 
    VerificationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SignupRoutingModule,
    FormContainerModule
  ],
  exports: [
    SignupWrapperComponent
  ],
  providers: [
    SignupApiService
  ]
})
export class SignupModule { }
