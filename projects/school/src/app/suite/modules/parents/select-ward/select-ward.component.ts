import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ParentsApiService } from '../parents-api.service';


@Component({
  selector: 'app-select-ward',
  templateUrl: './select-ward.component.html',
  styleUrls: ['./select-ward.component.css']
})
export class SelectWardComponent implements OnInit, AfterViewInit {

  constructor(private parentsApi: ParentsApiService) { }

  @ViewChild("selectWardWindowReference") selectWardWindow: jqxWindowComponent;
  @ViewChild("selectWardGridReference") selectWardGrid: jqxGridComponent;

  @Output() wardEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectWardGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectWardWindow.open();
  }

  selectWard(event: any){
    console.log("u have double clicked a ward");
    this.wardEvent.emit(event.args.row.bounddata);
    this.selectWardWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.parentsApi.getAllStudents()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectWardGrid.updatebounddata();
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
      { name: 'class_name', map: 'clas>class_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "20%" },
    { text: "Student Name", dataField: "student_name", width: "50%" },
    { text: "Class", dataField: "class_name", width: "30%" }
  ];

}
