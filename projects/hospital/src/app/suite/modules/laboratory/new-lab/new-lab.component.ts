import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { LaboratoryApiService } from '../laboratory-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-lab',
  templateUrl: './new-lab.component.html',
  styleUrls: ['./new-lab.component.css']
})
export class NewLabComponent implements OnInit {

  constructor(
    private router: Router,
    private laboratoryApi: LaboratoryApiService,
  ) { }

  @ViewChild("newLabReference") newLab: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("labCodeReference") labCode: jqxInputComponent;
  @ViewChild("labDateReference") labDate: jqxDateTimeInputComponent;
  @ViewChild("labTypeReference") labType: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newLab.open();
  }

  saveLab(){
    this.loadingSpinner.httpLoader.open();

    let labData = {
      hospital: localStorage.getItem('hospital_id'),
      lab_code: this.labCode.val(),
      lab_date: this.labDate.val(),
      lab_type: this.labType.val(),
    }

    this.laboratoryApi.postLab(labData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/laboratory/view-lab');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(labData);
  }

}
