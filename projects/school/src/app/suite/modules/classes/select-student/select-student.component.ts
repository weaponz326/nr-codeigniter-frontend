import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ClassesApiService } from '../classes-api.service';


@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css']
})
export class SelectStudentComponent implements OnInit {

  constructor(private classesApi: ClassesApiService) { }

  @ViewChild("selectStudentWindowReference") selectStudentWindow: jqxWindowComponent;
  @ViewChild("selectStudentGridReference") selectStudentGrid: jqxGridComponent;

  @Output() classEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectStudentGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectStudentWindow.open();
  }

  selectStudent(event: any){
    console.log("u have double clicked a student");
    this.classEvent.emit(event.args.row.bounddata);
    this.selectStudentWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.classesApi.getAllStudents()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectStudentGrid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'student_code', type: 'string' },
      { name: 'student_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "30%" },
    { text: "Student Name", dataField: "student_name", width: "70%" },
  ];

}
