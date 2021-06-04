import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SuppliersApiService } from '../suppliers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SupplierFormComponent } from '../supplier-form/supplier-form.component';


@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {

  constructor(
    private router: Router,
    private suppliersApi: SuppliersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('supplierFormComponentReference') supplierForm: SupplierFormComponent;

  navHeading: any[] = [
    { text: "All Suppliers", url: "/suite/suppliers/all-suppliers" },
    { text: "View Supplier", url: "/suite/suppliers/view-supplier" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.suppliersApi.getSingleSupplier()
      .subscribe(
        res => {
          console.log(res);
          this.supplierForm.supplierCode.val(res.supplier_code);
          this.supplierForm.supplierName.val(res.supplier_name);
          this.supplierForm.phone.val(res.phone);
          this.supplierForm.email.val(res.email);
          this.supplierForm.address.val(res.address);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveSupplier(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a supplier");

    var supplierData = {
      account: sessionStorage.getItem('shop_id'),
      supplier_code: this.supplierForm.supplierCode.val(),
      supplier_name: this.supplierForm.supplierName.val(),
      phone: this.supplierForm.phone.val(),
      email: this.supplierForm.email.val(),
      address: this.supplierForm.address.val(),
    }

    this.suppliersApi.putSupplier(supplierData)
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

    console.log(supplierData);
  }

  deleteSupplier(){
    console.log("dude... u are gonna delete the supplier?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.suppliersApi.deleteSupplier()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/supplier/all-supplier');
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
