import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RegisterRoutingModule } from './register-routing.module';
import { FormContainerModule } from 'projects/application/src/app/form-container/form-container.module';

import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterWrapperComponent } from './register-wrapper/register-wrapper.component';


@NgModule({
  declarations: [
    RegisterFormComponent, 
    RegisterSuccessComponent, 
    RegisterWrapperComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormContainerModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
