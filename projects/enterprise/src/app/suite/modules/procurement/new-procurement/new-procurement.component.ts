import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ProcurementApiService } from '../procurement-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ProcurementFormComponent } from '../procurement-form/procurement-form.component'


@Component({
  selector: 'app-new-procurement',
  templateUrl: './new-procurement.component.html',
  styleUrls: ['./new-procurement.component.css']
})
export class NewProcurementComponent implements OnInit {

  constructor(
    private router: Router,
    private procurementApi: ProcurementApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('procurementFormComponentReference') procurementForm: ProcurementFormComponent;

  navHeading: any[] = [
    { text: "New Procurement", url: "/suite/procurement/new-procurement" },
  ];

  ngOnInit(): void {
  }

  saveProcurement(){
    console.log('u are saving a new procurement');
    this.loadingSpinner.httpLoader.open();

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

    console.log(procurementData);

    this.procurementApi.postProcurement(procurementData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('procurement_id', res.procurement_id);
            this.router.navigateByUrl('/suite/procurement/view-procurement');
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
