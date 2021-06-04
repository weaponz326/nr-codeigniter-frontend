import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { PurchasingApiService } from '../purchasing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-purchasing',
  templateUrl: './new-purchasing.component.html',
  styleUrls: ['./new-purchasing.component.css']
})
export class NewPurchasingComponent implements OnInit {

  constructor(
    private router: Router,
    private purchasingApi: PurchasingApiService,
  ) { }

  @ViewChild("newPurchasingReference") newPurchasing: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("purchasingCodeReference") purchasingCode: jqxInputComponent;
  @ViewChild("purchasingDateReference") purchasingDate: jqxDateTimeInputComponent;
  @ViewChild("supplierNameReference") supplierName: jqxComboBoxComponent;
  @ViewChild("supplierContactReference") supplierContact: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newPurchasing.open();
  }

  closeWindow(){
    this.newPurchasing.close();
  }

  savePurchasing(){
    this.loadingSpinner.httpLoader.open();

    let purchasingData = {
      account: sessionStorage.getItem('production_id'),
      supplier_name: this.supplierName.val(),
      supplier_contact: this.supplierContact.val(),
      purchasing_code: this.purchasingCode.val(),
      purchasing_date: this.purchasingDate.val(),
    }

    this.purchasingApi.postPurchasing(purchasingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('purchasing_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/purchasing/view-purchasing');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(purchasingData);
  }

}
