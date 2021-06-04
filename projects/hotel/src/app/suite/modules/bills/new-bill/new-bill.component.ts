import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { BillsApiService } from '../bills-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectGuestComponent } from '../select-guest/select-guest.component'


@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  constructor(
    private router: Router,
    private billsApi: BillsApiService,
  ) { }

  @ViewChild("newBillReference") newBill: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("billCodeReference") billCode: jqxInputComponent;
  @ViewChild("billDateReference") billDate: jqxDateTimeInputComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectGuestComponentReference") selectGuest: SelectGuestComponent;

  guestIdStore;

  ngOnInit(): void {
  }

  openWindow(){
    this.newBill.open();
  }

  closeWindow(){
    this.newBill.close();
  }

  guestSelected(guest: any){
    console.log(guest);
    this.guestName.val(guest.guest_name);
    this.guestCode.val(guest.guest_code);
    this.guestIdStore = guest.id;
  }

  saveBill(){
    this.loadingSpinner.httpLoader.open();

    let billData = {
      account: sessionStorage.getItem('hotel_id'),
      bill_code: this.billCode.val(),
      bill_date: this.billDate.val(),
      guest: this.guestIdStore,
    }

    this.billsApi.postBill(billData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('bill_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/bills/view-bill');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(billData);
  }

}
