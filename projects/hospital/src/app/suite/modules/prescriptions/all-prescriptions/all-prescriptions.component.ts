import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PrescriptionsApiService } from '../prescriptions-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-prescriptions',
  templateUrl: './all-prescriptions.component.html',
  styleUrls: ['./all-prescriptions.component.css']
})
export class AllPrescriptionsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private prescriptionsApi: PrescriptionsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Prescriptions", url: "/suite/prescriptions/all-prescriptions" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.prescriptionsApi.getPrescriptions()
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

  viewPrescription(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('prescription_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/prescriptions/view-prescription');
  }

  // widgets
  // --------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'prescription_code', type: 'string' },
      { name: 'prescription_date', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Prescription ID", dataField: "prescription_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Prescription Date", dataField: "prescription_date", filtertype: "range", width: "30%" },
  ];

}
