import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';

import { InvoiceApiService } from '../invoice-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
  ) { }

  @ViewChild("newInvoiceReference") newInvoice: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("invoiceNumberReference")invoiceNumber: jqxInputComponent;
  @ViewChild("invoiceDateReference") invoiceDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("customerContactReference") customerContact: jqxInputComponent;
  @ViewChild("dueDateReference") dueDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newInvoice.open();
  }

  saveInvoice(){
    this.loadingSpinner.httpLoader.open();

    let invoiceData = {
      shop: localStorage.getItem('shop_id'),
      invoice_number: this.invoiceNumber.val(),
      invoice_date: this.invoiceDate.val(),
      customer_name: this.customerName.val(),
      customer_contact: this.customerContact.val(),
      due_date: this.dueDate.val(),
    }

    this.invoiceApi.postInvoice(invoiceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/invoice/view-invoice');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(invoiceData);
  }

}
