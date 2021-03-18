import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';


@Component({
  selector: 'app-select-term',
  templateUrl: './select-term.component.html',
  styleUrls: ['./select-term.component.css']
})
export class SelectTermComponent implements OnInit, AfterViewInit {

  constructor(private reportsApi: ReportsApiService) { }

  @ViewChild("selectTermWindowReference") selectTermWindow: jqxWindowComponent;
  @ViewChild("selectTermGridReference") selectTermGrid: jqxGridComponent;

  @Output() doctorEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectTermGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectTermWindow.open();
  }

  selectTerm(event: any){
    console.log("u have double clicked a term");
    this.doctorEvent.emit(event.args.row.bounddata);
    this.selectTermWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.reportsApi.getTerms()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectTermGrid.updatebounddata();
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
      { name: 'term_name', type: 'string' },
      { name: 'academic_year', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Term Name", dataField: "term_name", width: "60%" },
    { text: "Academic Year", dataField: "academic_year", width: "40%" },
  ];

}
