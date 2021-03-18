import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AssessmentApiService } from '../assessment-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-assessment',
  templateUrl: './all-assessment.component.html',
  styleUrls: ['./all-assessment.component.css']
})
export class AllAssessmentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;


  navHeading: any[] = [
    { text: "All Assessment", url: "/suite/assessment/all-assessment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.assessmentApi.getAssessment()
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

  viewAssessment(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('assessment_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/assessment/view-assessment');
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'assessment_code', type: 'string' },
      { name: 'assessment_name', type: 'string' },
      { name: 'assessment_date', type: 'string' },
      { name: 'term', type: 'string' },
      { name: 'subject', map: 'subject>subject_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Assessment ID", dataField: "assessment_code", width: "10%" },
    { text: "Assessment Name", dataField: "assessment_name", width: "30%" },
    { text: "Assessment Date", dataField: "assessment_date", filtertype: "range", width: "15%" },
    { text: "Term", dataField: "term", width: "20%" },
    { text: "Subject", dataField: "subject", width: "25%" },
  ];

}
