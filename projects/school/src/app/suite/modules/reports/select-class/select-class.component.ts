import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css']
})
export class SelectClassComponent implements OnInit, AfterViewInit {

  constructor(private reportsApi: ReportsApiService) { }

  @ViewChild("selectClassWindowReference") selectClassWindow: jqxWindowComponent;
  @ViewChild("selectClassGridReference") selectClassGrid: jqxGridComponent;

  @Output() classEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectClassGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectClassWindow.open();
  }

  selectClass(event: any){
    console.log("u have double clicked a class");
    this.classEvent.emit(event.args.row.bounddata);
    this.selectClassWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.reportsApi.getClasses()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectClassGrid.updatebounddata();
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
      { name: 'class_name', type: 'string' },
      { name: 'department', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Class Name", dataField: "class_name", width: "60%" },
    { text: "Department", dataField: "department", width: "40%" },
  ];

}
