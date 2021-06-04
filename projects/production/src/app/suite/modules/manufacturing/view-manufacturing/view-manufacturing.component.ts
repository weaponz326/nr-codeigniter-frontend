import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ManufacturingApiService } from '../manufacturing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ManufacturingFormComponent } from '../manufacturing-form/manufacturing-form.component';


@Component({
  selector: 'app-view-manufacturing',
  templateUrl: './view-manufacturing.component.html',
  styleUrls: ['./view-manufacturing.component.css']
})
export class ViewManufacturingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private manufacturingApi: ManufacturingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('manufacturingFormComponentReference') manufacturingForm: ManufacturingFormComponent;

  navHeading: any[] = [
    { text: "All Manufacturing", url: "/suite/manufacturing/all-manufacturing" },
    { text: "View Manufacturing", url: "/suite/manufacturing/view-manufacturing" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.manufacturingApi.getSingleManufacturing()
      .subscribe(
        res => {
          console.log(res);
          this.manufacturingForm.manufacturingCode.val(res.manufacturing_code);
          this.manufacturingForm.description.val(res.description);
          this.manufacturingForm.startDate.val(res.start_date);
          this.manufacturingForm.endDate.val(res.end_date);
          this.manufacturingForm.productName.val(res.product_name);
          this.manufacturingForm.productCode.val(res.product_code);
          this.manufacturingForm.quantity.val(res.quantity);
          this.manufacturingForm.manufacturingStatus.val(res.manufacturingStatus);
          this.manufacturingForm.remarks.val(res.remarks);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveManufacturing(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a manufacturing");

    var manufacturingData = {
      account: sessionStorage.getItem('production_id'),
      manufacturing_code: this.manufacturingForm.manufacturingCode.val(),
      description: this.manufacturingForm.description.val(),
      start_date: this.manufacturingForm.startDate.val(),
      end_date: this.manufacturingForm.endDate.val(),
      quantity: this.manufacturingForm.quantity.val(),
      manufacturing_status: this.manufacturingForm.manufacturingStatus.val(),
      remarks: this.manufacturingForm.remarks.val(),
    }

    this.manufacturingApi.putManufacturing(manufacturingData)
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

    console.log(manufacturingData);
  }

  deleteManufacturing(){
    console.log("dude... u are gonna delete the manufacturing?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.manufacturingApi.deleteManufacturing()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/manufacturing/all-manufacturing');
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
