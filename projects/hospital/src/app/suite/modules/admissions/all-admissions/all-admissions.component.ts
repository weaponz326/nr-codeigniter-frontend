import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AdmissionsApiService } from '../admissions-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-admissions',
  templateUrl: './all-admissions.component.html',
  styleUrls: ['./all-admissions.component.css']
})
export class AllAdmissionsComponent implements OnInit, AfterViewInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(
    private router: Router,
    private admissionsApi: AdmissionsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.admissionsApi.getAdmissions()
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

  viewAdmission(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('admission_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/admissions/view-admission');
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'admission_code', type: 'string' },
      { name: 'admission_date', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Admission ID", dataField: "admission_code", width: "25%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Admission Date", dataField: "admission_date", filtertype: "range", width: "25%" },
  ];

}
