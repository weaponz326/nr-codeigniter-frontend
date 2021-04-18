import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ManufacturingApiService } from '../manufacturing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ManufacturingFormComponent } from '../manufacturing-form/manufacturing-form.component';


@Component({
  selector: 'app-new-manufacturing',
  templateUrl: './new-manufacturing.component.html',
  styleUrls: ['./new-manufacturing.component.css']
})
export class NewManufacturingComponent implements OnInit {

  constructor(
    private router: Router,
    private manufacturingApi: ManufacturingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('manufacturingFormComponentReference') manufacturingForm: ManufacturingFormComponent;

  navHeading: any[] = [
    { text: "Add Manufacturing", url: "/suite/manufacturing/new-manufacturing" },
  ];

  ngOnInit(): void {
  }

  saveManufacturing(){
    console.log('u are saving a new manufacturing');
    this.loadingSpinner.httpLoader.open();

    var manufacturingData = {
      production_id: sessionStorage.getItem('production_id'),
      manufacturing_code: this.manufacturingForm.manufacturingCode.val(),
      description: this.manufacturingForm.description.val(),
      start_date: this.manufacturingForm.startDate.val(),
      end_date: this.manufacturingForm.endDate.val(),
      manufacturing_status: this.manufacturingForm.manufacturingStatus.val(),
      remarks: this.manufacturingForm.remarks.val(),
    }

    console.log(manufacturingData);

    this.manufacturingApi.postManufacturing(manufacturingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('manufacturing_id', res.manufacturing_id);
            this.router.navigateByUrl('/suite/manufacturing/view-manufacturing');
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
