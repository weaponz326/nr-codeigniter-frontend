import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.css']
})
export class ClassReportComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('reportCodeReference') reportCode: jqxInputComponent;
  @ViewChild('reportNameReference') reportName: jqxInputComponent;
  @ViewChild('reportDateReference') reportDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('classReference') class: jqxDropDownListComponent;
  @ViewChild('assessmentsReference') assessments: jqxListBoxComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
    { text: "Class Report", url: "/suite/reports/class-report" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.reportsApi.getSingleReport()
      .subscribe(
        res => {
          console.log(res);
          this.reportCode.val(res.report_code);
          this.reportName.val(res.report_name);
          this.reportDate.val(res.report_date);
          this.term.val(res.term);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveReport(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a report");

    var reportData = {
      account: sessionStorage.getItem('school_id'),
      report_code: this.reportCode.val(),
      report_name: this.reportName.val(),
      report_date: this.reportDate.val(),
    }

    this.reportsApi.putReport(reportData)
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

    console.log(reportData);
  }

  deleteReport(){
    console.log("dude... u are gonna delete the report?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.reportsApi.deleteReport()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/report/all-report');
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
