import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.css']
})
export class SelectSubjectComponent implements OnInit {

  constructor() { }

  @ViewChild("selectSubjectWindowReference") selectSubjectWindow: jqxWindowComponent;
  @ViewChild("selectSubjectGridReference") selectSubjectGrid: jqxGridComponent;

  @Output() subjectEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.selectSubjectWindow.open();
  }

  selectSubject(event: any){
    console.log("u have double clicked a subject");
    this.subjectEvent.emit(event.args.row.bounddata);
    this.selectSubjectWindow.close();
  }

  // ---------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'clinical_id', type: 'string' },
      { name: 'patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject Name", dataField: "patient_name", width: "70%" },
    { text: "Academic Year", dataField: "academic_year", width: "30%" },
  ];

}
