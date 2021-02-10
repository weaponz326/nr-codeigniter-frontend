import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CustomersApiService } from '../customers-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { CustomerFormComponent } from '../customer-form/customer-form.component'


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('customerFormComponentReference') customerForm: CustomerFormComponent;

  ngOnInit(): void {
  }

  saveCustomer(){
    console.log('u are saving a new customer');
    this.loadingSpinner.httpLoader.open();

    var customerData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      first_name: this.customerForm.firstNameInput.val(),
      last_name: this.customerForm.lastNameInput.val(),
      sex: this.customerForm.sexDropDownList.val(),
      phone: this.customerForm.phoneInput.val(),
      email: this.customerForm.emailInput.val(),
      address: this.customerForm.addressInput.val(),
      state: this.customerForm.stateInput.val(),
      city: this.customerForm.cityInput.val(),
      post_code: this.customerForm.postCodeInput.val(),
      customer_code: this.customerForm.customerCodeInput.val(),
      religion: this.customerForm.religionInput.val(),
      allergies: this.customerForm.allergiesInput.val(),
      preferences: this.customerForm.preferencesInput.val(),
    }

    console.log(customerData);

    this.customersApi.postCustomer(customerData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
