import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';


@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit {

  constructor(private reportsApi: ReportsApiService) { }

  @ViewChild("addAssessmentReference") addAssessmentWindow: jqxWindowComponent;
  @ViewChild("assessmentGridReference") assessmentGrid: jqxGridComponent;

  @Output() assessmentEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.assessmentGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.addAssessmentWindow.open();
  }

  selectAssessment(event: any){
    console.log("u have double clicked an assessment");
    this.assessmentEvent.emit(event.args.row.bounddata);
    this.addAssessmentWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.reportsApi.getAssessments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.assessmentGrid.updatebounddata();
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
      { name: 'assessment_code', type: 'string' },
      { name: 'assessment_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Assessment ID", dataField: "assessment_code", width: "30%" },
    { text: "Assessment Name", dataField: "assessment_name", width: "70%" },
  ];


}
