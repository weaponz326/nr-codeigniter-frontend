import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { DispensaryApiService } from '../dispensary-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-dispense',
  templateUrl: './new-dispense.component.html',
  styleUrls: ['./new-dispense.component.css']
})
export class NewDispenseComponent implements OnInit {

  constructor(
    private router: Router,
    private dispensaryApi: DispensaryApiService,
  ) { }

  @ViewChild("newDispenseReference") newDispense: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('dispenseCodeReference') dispenseCode: jqxInputComponent;
  @ViewChild('dispenseDateReference') dispenseDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newDispense.open();
  }

  saveDispense(){
    this.loadingSpinner.httpLoader.open();

    let dispenseData = {
      hospital: localStorage.getItem('hospital_id'),
      dispense_code: this.dispenseCode.val(),
      dispense_date: this.dispenseDate.val(),
    }

    this.dispensaryApi.postDispensary(dispenseData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/dispensary/view-dispense');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(dispenseData);
  }

}
