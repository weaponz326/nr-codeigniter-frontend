import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-class-sheet',
  templateUrl: './class-sheet.component.html',
  styleUrls: ['./class-sheet.component.css']
})
export class ClassSheetComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private reportsApi: ReportsApiService) { }

  @ViewChild('addAssessmentReference') addAssessment: jqxButtonComponent;
  @ViewChild('classGridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  sheetLocalData: any = [];
  sheetDataFields: any = [];
  sheetColumns: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.refreshSheet();
  }

  refreshSheet(){
    this.reportsApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getReportAssessments();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // for column headers
  getReportAssessments(){
    this.reportsApi.getReportAssessments()
      .subscribe(
        res => {
          console.log(res);
          this.getReportStudents();
          this.setSheetColumns(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getReportStudents(){
    this.reportsApi.getReportStudents()
      .subscribe(
        res => {
          console.log(res);
          this.getReportAssessmentSheets();
          this.populateSheetStudents(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getReportAssessmentSheets(){
    this.reportsApi.getClassAssessmentSheets()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetAssessments(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  populateSheetStudents(sheetStudents){
    this.sheetLocalData = [];
    sheetStudents.forEach(sheet => {
      let data = { student_code: sheet.student.student_code, student_name: sheet.student.student_name, student_id: sheet.student.id };
      this.sheetLocalData.push(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

  populateSheetAssessments(sheetAssessments){
    let sheetRows = this.grid.getrows();
    console.log(sheetRows);

    sheetRows.forEach(row => {
      sheetAssessments.forEach(studentAssessment => {
        studentAssessment.forEach(assessment => {
          if(row.student_id == assessment.student){
            this.grid.setcellvalue(row.boundindex, assessment.assessment, assessment.score);
          }
        });
      });
    });
  }

  viewStudentReport(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('report_student_id', event.args.row.bounddata.student_id);

    this.router.navigateByUrl('/suite/reports/student-report');
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  assessmentColumnGroups: any[] = [
      { text: "Assessments", align: "center", name: "assessmentGroup" }
  ];

  setSheetColumns(assessmentSheet){
    // set datafields
    this.sheetDataFields = [];
    this.sheetDataFields.push({ name: 'student_id', type: 'string' });
    this.sheetDataFields.push({ name: 'student_code', type: 'string' });
    this.sheetDataFields.push({ name: 'student_name', type: 'string' });

    // set columns
    this.sheetColumns = [];
    this.sheetColumns.push({ text: "Student ID", dataField: "student_code", pinned: "true", width: "8%", minwidth: "100" });
    this.sheetColumns.push({ text: "Student Name", dataField: "student_name", pinned: "true", width: "22%", minwidth: "200" });

    assessmentSheet.forEach(sheet => {
      // datafields
      this.sheetDataFields.push({ name: sheet.assessment.assessment_code, type: 'string' });

      // columns
      var assessmentColumn = { text: sheet.assessment.assessment_name, dataField: sheet.assessment.id, columngroup: 'assessmentGroup', width: 140 };
      this.sheetColumns.push(assessmentColumn);
    });

    let assessmentColumnGroups: any[] = [
      { text: "Income", align: "center", name: "incomeGroup" }
    ];
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: this.sheetDataFields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

}
