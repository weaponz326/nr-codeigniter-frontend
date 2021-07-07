import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
  ) { }

  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;
  @ViewChild('studentNameReference') studentName: jqxInputComponent;
  @ViewChild('reportNameReference') reportName: jqxInputComponent;
  @ViewChild('reportDateReference') reportDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
    { text: "Class Report", url: "/suite/reports/class-report" },
    { text: "Student Report", url: "/suite/reports/student-report" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getReportStudent();
    this.getStudentSheet();
  }

  getReportStudent(){
    this.reportsApi.getSingleReportStudent()
      .subscribe(
        res => {
          console.log(res);
          this.studentCode.val(res.student.student_code);
          this.studentName.val(res.student.student_name);
          this.reportName.val(res.report.report_name);
          this.reportDate.val(res.report.report_date);
          this.term.val(res.report.term);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getStudentSheet(){
    this.reportsApi.getStudentAssessmentSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheet(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // -----------------------------------------------------------------------------------------------------------------------------------

  sheetLocalData: any = [];

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject_name', type: 'string' },
      { name: 'score', type: 'string' },
      { name: 'grade', type: 'string' },
      { name: 'remarks', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject", dataField: "subject_name", width: "40%" },
    { text: "Score", dataField: "score", columntype: "numberinput", editable: true, width: "15%" },
    { text: "Grade", dataField: "grade", editable: true, width: "15%" },
    { text: "Remarks", dataField: "remarks", editable: true, width: "30%" },
  ];

  populateSheet(sheetData){
    this.sheetLocalData = [];
    sheetData.forEach(sheet => {
      let data = { subject_name: sheet.assessment.subject.subject_name, score: sheet.score, grade: sheet.grade, remarks: sheet.remarks };
      this.sheetLocalData.push(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

}
