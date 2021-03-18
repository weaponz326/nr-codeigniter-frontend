import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-select-term',
  templateUrl: './select-term.component.html',
  styleUrls: ['./select-term.component.css']
})
export class SelectTermComponent implements OnInit {

  constructor() { }

  @ViewChild("selectTermWindowReference") selectTermWindow: jqxWindowComponent;
  @ViewChild("selectTermGridReference") selectTermGrid: jqxGridComponent;

  @Output() termEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.selectTermWindow.open();
  }

  selectTerm(event: any){
    console.log("u have double clicked a term");
    this.termEvent.emit(event.args.row.bounddata);
    this.selectTermWindow.close();
  }

  // ---------------------------------------------------------------------------

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
    { text: "Term Name", dataField: "term_name", width: "70%" },
    { text: "Academic Year", dataField: "academic_year", width: "30%" },
  ];

}
