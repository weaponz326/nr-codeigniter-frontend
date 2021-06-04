import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SuppliersApiService } from '../suppliers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SupplierFormComponent } from '../supplier-form/supplier-form.component';


@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {

  constructor(
    private router: Router,
    private suppliersApi: SuppliersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('supplierFormComponentReference') supplierForm: SupplierFormComponent;

  navHeading: any[] = [
    { text: "New Supplier", url: "/suite/suppliers/new-supplier" },
  ];

  ngOnInit(): void {
  }

  saveSupplier(){
    console.log('u are saving a new supplier');
    this.loadingSpinner.httpLoader.open();

    var supplierData = {
      account: sessionStorage.getItem('shop_id'),
      supplier_code: this.supplierForm.supplierCode.val(),
      supplier_name: this.supplierForm.supplierName.val(),
      phone: this.supplierForm.phone.val(),
      email: this.supplierForm.email.val(),
      address: this.supplierForm.address.val(),
    }

    console.log(supplierData);

    this.suppliersApi.postSupplier(supplierData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('supplier_id', res.data.id);
            this.router.navigateByUrl('/suite/suppliers/view-supplier');
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
