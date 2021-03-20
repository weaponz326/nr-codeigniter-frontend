import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CustomersApiService } from '../customers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { CustomerFormComponent } from '../customer-form/customer-form.component'


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('customerFormComponentReference') customerForm: CustomerFormComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/suite/customers/all-customers" },
    { text: "View Customer", url: "/suite/customers/view-customer" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.customersApi.getSingleCustomer()
      .subscribe(
        res => {
          console.log(res);
          this.customerForm.firstNameInput.val(res.first_name);
          this.customerForm.lastNameInput.val(res.last_name);
          this.customerForm.sexDropDownList.val(res.sex);
          this.customerForm.phoneInput.val(res.phone);
          this.customerForm.emailInput.val(res.email);
          this.customerForm.addressInput.val(res.address);
          this.customerForm.stateInput.val(res.state);
          this.customerForm.cityInput.val(res.city);
          this.customerForm.postCodeInput.val(res.post_code);
          this.customerForm.customerCodeInput.val(res.customer_code);
          this.customerForm.religionInput.val(res.religion);
          this.customerForm.allergiesInput.val(res.allergies);
          this.customerForm.preferencesInput.val(res.preferences);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveCustomer(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a customer");

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
      custtomer_code: this.customerForm.customerCodeInput.val(),
      religion: this.customerForm.religionInput.val(),
      allergies: this.customerForm.allergiesInput.val(),
      preferences: this.customerForm.preferencesInput.val(),
    }

    this.customersApi.putCustomer(customerData)
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

    console.log(customerData);
  }

  deleteCustomer(){
    console.log("dude... u are gonna delete the customer?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.customersApi.deleteCustomer()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/customers/all-customers');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
