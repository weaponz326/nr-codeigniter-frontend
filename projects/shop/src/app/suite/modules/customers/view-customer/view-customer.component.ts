import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CustomersApiService } from '../customers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { CustomerFormComponent } from '../customer-form/customer-form.component';


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
          this.customerForm.customerCode.val(res.customer_code);
          this.customerForm.customerName.val(res.customer_name);
          this.customerForm.phone.val(res.phone);
          this.customerForm.email.val(res.email);
          this.customerForm.address.val(res.address);
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
      shop_id: sessionStorage.getItem('shop_id'),
      customer_code: this.customerForm.customerCode.val(),
      customer_name: this.customerForm.customerName.val(),
      phone: this.customerForm.phone.val(),
      email: this.customerForm.email.val(),
      address: this.customerForm.address.val(),
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

            this.router.navigateByUrl('/suite/customer/all-customer');
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
