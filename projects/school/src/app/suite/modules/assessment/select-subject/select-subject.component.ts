import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AssessmentApiService } from '../assessment-api.service';


@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.css']
})
export class SelectSubjectComponent implements OnInit {

  constructor(private assessmentApi: AssessmentApiService) { }

  @ViewChild("selectSubjectWindowReference") selectSubjectWindow: jqxWindowComponent;
  @ViewChild("selectSubjectGridReference") selectSubjectGrid: jqxGridComponent;

  @Output() subjectEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.selectSubjectWindow.open();
    this.getData();
  }

  selectSubject(event: any){
    console.log("u have double clicked a subject");
    this.subjectEvent.emit(event.args.row.bounddata);
    this.selectSubjectWindow.close();
  }

  getData(){
    this.assessmentApi.getSubjects()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectSubjectGrid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }
  // ---------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject_code', type: 'string' },
      { name: 'subject_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject ID", dataField: "subject_code", width: "30%" },
    { text: "Subject Name", dataField: "subject_name", width: "70%" },
  ];

}
