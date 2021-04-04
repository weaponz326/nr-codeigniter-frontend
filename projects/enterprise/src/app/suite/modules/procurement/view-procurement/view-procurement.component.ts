import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ProcurementApiService } from '../procurement-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ProcurementFormComponent } from '../procurement-form/procurement-form.component'


@Component({
  selector: 'app-view-procurement',
  templateUrl: './view-procurement.component.html',
  styleUrls: ['./view-procurement.component.css']
})
export class ViewProcurementComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private procurementApi: ProcurementApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('procurementFormComponentReference') procurementForm: ProcurementFormComponent;

  navHeading: any[] = [
    { text: "All Procurement", url: "/suite/procurement/all-procurement" },
    { text: "View Procurement", url: "/suite/procurement/view-procurement" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.procurementApi.getSingleProcurement()
      .subscribe(
        res => {
          console.log(res);
          this.procurementForm.orderCode.val(res.order_code);
          this.procurementForm.orderType.val(res.order_type);
          this.procurementForm.orderDate.val(res.order_date);
          this.procurementForm.description.val(res.description);
          this.procurementForm.project.val(res.project);
          this.procurementForm.recepient.val(res.recepient);
          this.procurementForm.vendor.val(res.vendor);
          this.procurementForm.vendorPhone.val(res.vendor_phone);
          this.procurementForm.vendorEmail.val(res.vendor_email);
          this.procurementForm.vendorAddress.val(res.vendor_address);
          this.procurementForm.orderStatus.val(res.order_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveProcurement(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a procurement");

    var procurementData = {
      enterprise_id: sessionStorage.getItem('enterprise_id'),
      order_code: this.procurementForm.orderCode.val(),
      order_type: this.procurementForm.orderType.val(),
      order_date: this.procurementForm.orderDate.val(),
      description: this.procurementForm.description.val(),
      project: this.procurementForm.project.val(),
      recepient: this.procurementForm.recepient.val(),
      vendor: this.procurementForm.vendor.val(),
      vendor_phone: this.procurementForm.vendorPhone.val(),
      vendorEmail: this.procurementForm.vendorEmail.val(),
      vendorAddress: this.procurementForm.vendorAddress.val(),
      orderStatus: this.procurementForm.orderStatus.val(),
    }

    this.procurementApi.putProcurement(procurementData)
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

    console.log(procurementData);
  }

  deleteProcurement(){
    console.log("dude... u are gonna delete the procurement?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.procurementApi.deleteProcurement()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/procurement/all-procurement');
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
