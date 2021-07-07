import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SelectTermComponent } from '../select-term/select-term.component'
import { SelectClassComponent } from '../select-class/select-class.component'


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
  @ViewChild('classReference') clas: jqxInputComponent;
  @ViewChild('assessmentsReference') assessments: jqxListBoxComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild("selectTermComponentReference") selectTerm: SelectTermComponent;
  @ViewChild("selectClassComponentReference") selectClass: SelectClassComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
    { text: "Class Report", url: "/suite/reports/class-report" },
  ];

  termIdStore: any;
  classIdStore: any;

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
          // this.term.val(res.term.term_name);
          this.clas.val(res.clas.class_name);
          // this.termIdStore = res.term.id;
          this.classIdStore = res.clas.id;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.getAssessmentData();
  }

  saveReport(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a report");

    var reportData = {
      account: sessionStorage.getItem('school_id'),
      report_code: this.reportCode.val(),
      report_name: this.reportName.val(),
      report_date: this.reportDate.val(),
      term: this.termIdStore,
      clas: this.classIdStore,
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

  // --------------------------------------------------------------------------------------------------------------
  // assessments

  assessmentAdded(assessmentData){
    this.grid.addrow(null, assessmentData);
  }

  getAssessmentData(){
    this.reportsApi.getReportAssessments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'assessment_code', map: 'assessment>assessment_code', type: 'string' },
      { name: 'assessment_name', map: 'assessment>assessment_name', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Assessment ID", dataField: "assessment_code", width: "30%" },
    { text: "Assessment Name", dataField: "assessment_name", width: "70%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let assessmentData =  {
      report: sessionStorage.getItem('report_id'),
      assessment: rowdata.id,
    }

    console.log(assessmentData);

    this.loadingSpinner.httpLoader.open();

    this.reportsApi.postReportAssessment(assessmentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
