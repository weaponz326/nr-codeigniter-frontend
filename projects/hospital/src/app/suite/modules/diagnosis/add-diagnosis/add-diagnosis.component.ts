import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { DiagnosisApiService } from '../diagnosis-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {

  constructor(
    private router: Router,
    private diagnosisApi: DiagnosisApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild("addDiagnosisReference") addDiagnosis: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('diagnosisCodeReference') diagnosisCode: jqxInputComponent;
  @ViewChild('diagnosisDateReference') diagnosisDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  
  ngOnInit(): void {
  }

  openWindow(){
    this.addDiagnosis.open();
  }

  saveDiagnosis(){
    this.loadingSpinner.httpLoader.open();

    let diagnosisData = {
      hospital: localStorage.getItem('hospital_id'),
      lab_code: this.diagnosisCode.val(),
      lab_date: this.diagnosisDate.val(),
    }

    this.diagnosisApi.postDiagnosis(diagnosisData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/diagnsis/view-diagnosis');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(diagnosisData);
  }

}
