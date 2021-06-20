import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AssessmentApiService } from '../assessment-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-assessment-table',
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.css']
})
export class AssessmentTableComponent implements OnInit, AfterViewInit {

  constructor(private assessmentApi: AssessmentApiService) { }

  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.refereshSheet();
  }

  getData(){
    this.assessmentApi.getClassSheet()
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

  refereshSheet(){
    this.assessmentApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveSheet(){
    console.log("u are updating a assessment sheet");
    let sheetData = this.grid.getboundrows();

    this.assessmentApi.postClassSheet(sheetData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(sheetData);
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'student_id', map: 'student>id', type: 'string' },
      { name: 'student_name', map: 'student>student_name', type: 'string' },
      { name: 'student_code', map: 'student>student_code', type: 'string' },
      { name: 'Score', type: 'string' },
      { name: 'Grade', type: 'string' },
      { name: 'Remarks', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", editable: false, width: "15%" },
    { text: "Student Name", dataField: "student_name", editable: false, width: "35%" },
    { text: "Score", dataField: "score", editable: true, width: "10%" },
    { text: "Grade", dataField: "grade", editable: true, width: "10%" },
    { text: "Remarks", dataField: "remarks", editable: true, width: "30%" },
  ];

}
