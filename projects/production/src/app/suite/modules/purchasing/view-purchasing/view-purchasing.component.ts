import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { PurchasingApiService } from '../purchasing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';



@Component({
  selector: 'app-view-purchasing',
  templateUrl: './view-purchasing.component.html',
  styleUrls: ['./view-purchasing.component.css']
})
export class ViewPurchasingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private purchasingApi: PurchasingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("purchasingCodeReference") purchasingCode: jqxInputComponent;
  @ViewChild("purchasingDateReference") purchasingDate: jqxDateTimeInputComponent;
  @ViewChild("supplierNameReference") supplierName: jqxComboBoxComponent;
  @ViewChild("supplierContactReference") supplierContact: jqxInputComponent;

  navHeading: any[] = [
    { text: "All Purchasing", url: "/suite/purchasing/all-purchasing" },
    { text: "View Purchasing", url: "/suite/purchasing/view-purchasing" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.purchasingApi.getSinglePurchasing()
      .subscribe(
        res => {
          console.log(res);
          this.purchasingCode.val(res.purchasing_code);
          this.purchasingDate.val(res.purchasing_date);
          this.supplierName.val(res.supplier_name);
          this.supplierContact.val(res.supplier_contact);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  savePurchasing(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a purchasing");

    var purchasingData = {
      account: sessionStorage.getItem('production_id'),
      purchasing_code: this.purchasingCode.val(),
      purchasing_date: this.purchasingDate.val(),
      supplier_name: this.supplierName.val(),
      supplier_contact: this.supplierContact.val(),
    }

    this.purchasingApi.putPurchasing(purchasingData)
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

    console.log(purchasingData);
  }

  deletePurchasing(){
    console.log("dude... u are gonna delete the purchasing?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.purchasingApi.deletePurchasing()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/purchasing/all-purchasing');
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
