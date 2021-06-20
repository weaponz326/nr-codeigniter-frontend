import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  constructor(private attendanceApi: AttendanceApiService) { }

  @ViewChild('sheetButtonReference') button: jqxButtonComponent;
  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  refreshSheet(){
    this.attendanceApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          // this.getData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", pinned: "true", width: "8%" },
    { text: "Student Name", dataField: "student_name", pinned: "true", width: "22%" },
  ];

}
