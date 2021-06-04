import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CustomersApiService } from '../customers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { CustomerFormComponent } from '../customer-form/customer-form.component';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('customerFormComponentReference') customerForm: CustomerFormComponent;

  navHeading: any[] = [
    { text: "Add Customer", url: "/suite/customers/add-customer" },
  ];

  ngOnInit(): void {
  }

  saveCustomer(){
    console.log('u are saving a new customer');
    this.loadingSpinner.httpLoader.open();

    var customerData = {
      account: sessionStorage.getItem('shop_id'),
      customer_code: this.customerForm.customerCode.val(),
      customer_name: this.customerForm.customerName.val(),
      customer_type: this.customerForm.customerType.val(),
      phone: this.customerForm.phone.val(),
      email: this.customerForm.email.val(),
      address: this.customerForm.address.val(),
    }

    console.log(customerData);

    this.customersApi.postCustomer(customerData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('customer_id', res.data.id);
            this.router.navigateByUrl('/suite/customers/view-customer');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
