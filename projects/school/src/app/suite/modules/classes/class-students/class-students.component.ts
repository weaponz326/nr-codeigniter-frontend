import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ClassesApiService } from '../classes-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.css']
})
export class ClassStudentsComponent implements OnInit {

  constructor(
    private classesApi: ClassesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.classesApi.getAllClassStudents()
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

  studentSelected(student: any){
    console.log(student);
    let data = {
      student_id: student.id,
      student_name: student.student_name,
      student_code: student.student_code,
    }
    this.grid.addrow(null, data);
  }

  // widgets
  // ---------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'student_id', map: 'student>id', type: 'string' },
      { name: 'student_name', map: 'student>student_name', type: 'string' },
      { name: 'student_code', map: 'student>student_code', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "30%" },
    { text: "Student Name", dataField: "student_name", width: "70%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let studentData =  {
      clas: sessionStorage.getItem('class_id'),
      student: rowdata.student_id,
    }

    console.log(studentData);

    this.loadingSpinner.httpLoader.open();

    this.classesApi.postClassStudent(studentData)
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
