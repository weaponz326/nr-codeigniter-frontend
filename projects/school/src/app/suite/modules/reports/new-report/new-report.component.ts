import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectTermComponent } from '../select-term/select-term.component'
import { SelectClassComponent } from '../select-class/select-class.component'


@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
  ) { }

  @ViewChild("newReportReference") newReport: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('reportCodeReference') reportCode: jqxInputComponent;
  @ViewChild('reportNameReference') reportName: jqxInputComponent;
  @ViewChild('reportDateReference') reportDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('classReference') clas: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectTermComponentReference") selectTerm: SelectTermComponent;
  @ViewChild("selectClassComponentReference") selectClass: SelectClassComponent;

  termIdStore: any;
  classIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.newReport.open();
  }

  closeWindow(){
    this.newReport.close();
  }

  termSelected(term: any){
    console.log(term);
    this.term.val(term.term_name);
    this.termIdStore = term.id;
  }

  classSelected(clas: any){
    console.log(clas);
    this.clas.val(clas.class_name);
    this.classIdStore = clas.id;
  }

  saveReport(){
    this.loadingSpinner.httpLoader.open();

    let ReportData = {
      account: sessionStorage.getItem('school_id'),
      report_code: this.reportCode.val(),
      report_name: this.reportName.val(),
      report_date: this.reportDate.val(),
      term: this.termIdStore,
      source: this.classIdStore,
    }

    this.reportsApi.postReport(ReportData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('report_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/reports/view-report');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(ReportData);
  }

}
