import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';

import { InvoiceApiService } from '../invoice-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
  ) { }

  @ViewChild("invoiceNumberReference")invoiceNumber: jqxInputComponent;
  @ViewChild("invoiceDateReference") invoiceDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("customerContactReference") customerContact: jqxInputComponent;
  @ViewChild("dueDateReference") dueDate: jqxDateTimeInputComponent;

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Invoice", url: "/suite/invoice/all-invoice" },
    { text: "View Invoice", url: "/suite/invoice/view-invoice" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.invoiceApi.getSingleInvoice()
      .subscribe(
        res => {
          console.log(res);
          this.invoiceNumber.val(res.invoice_number);
          this.invoiceDate.val(res.invoice_date);
          this.customerName.val(res.customer_name);
          this.customerContact.val(res.customer_contact);
          this.dueDate.val(res.due_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveInvoice(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a invoice");

    var invoiceData = {
      account: sessionStorage.getItem('shop_id'),
      invoice_number: this.invoiceNumber.val(),
      invoice_date: this.invoiceDate.val(),
      customer_name: this.customerName.val(),
      customer_contact: this.customerContact.val(),
      due_date: this.dueDate.val(),
    }

    this.invoiceApi.putInvoice(invoiceData)
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

    console.log(invoiceData);
  }

  deleteInvoice(){
    console.log("dude... u are gonna delete the invoice?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.invoiceApi.deleteInvoice()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/invoice/all-invoice');
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
