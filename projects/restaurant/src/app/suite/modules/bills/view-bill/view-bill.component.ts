import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { BillsApiService } from '../bills-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private billsApi: BillsApiService,
  ) { }

  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('billTypeReference') billType: jqxDropDownListComponent;
  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('orderDateReference') orderDate: jqxInputComponent;
  @ViewChild('sittingCodeReference') sittingCode: jqxInputComponent;
  @ViewChild('sittingDateReference') sittingDate: jqxInputComponent;
  @ViewChild('deliveryCodeReference') deliveryCode: jqxInputComponent;
  @ViewChild('deliveryDateReference') deliveryDate: jqxInputComponent;
  @ViewChild('customerNameReference') customerName: jqxInputComponent;
  @ViewChild('totalAmountReference') totalAmount: jqxInputComponent;
  @ViewChild('saveBillReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteBillReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Bills", url: "/suite/bills/all-bills" },
    { text: "View Bill", url: "/suite/bills/view-bill" },
  ];

  billTypeSource: any[] = ["Order", "Sitting", "Delivery"];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.billsApi.getSingleBill()
      .subscribe(
        res => {
          console.log(res);
          this.billCode.val(res.bill_code);
          this.billDate.val(res.bill_date);
          this.totalAmount.val(res.total_amount);
          this.billType.val(res.bill_type);
          this.orderCode.val(res.order.order_code);
          this.orderDate.val(res.order.order_date);
          this.sittingCode.val(res.sitting.sitting_code);
          this.sittingDate.val(res.sitting.sitting_date);
          this.deliveryCode.val(res.delivery.delivery_code);
          this.deliveryDate.val(res.delivery.delivery_date);
          this.customerName.val(res.customer_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // -------------------------------------------------------------------------------------------------

  saveBill(){
    let billData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      bill_code: this.billCode.val(),
      bill_date: this.billDate.val(),
    }

    this.billsApi.putBill(billData)
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

    console.log(billData);
  }

  deleteBill(){
    console.log("dude... u are gonna delete the bill?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.billsApi.deleteBill()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/bills/all-bills');
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
