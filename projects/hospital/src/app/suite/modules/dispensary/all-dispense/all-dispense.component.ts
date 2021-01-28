import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DispensaryApiService } from '../dispensary-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-dispense',
  templateUrl: './all-dispense.component.html',
  styleUrls: ['./all-dispense.component.css']
})
export class AllDispenseComponent implements OnInit, AfterViewInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(
    private router: Router,
    private dispensaryApi: DispensaryApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.dispensaryApi.getDispensary()
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

  viewDispense(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('dispensary_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/dispensary/view-dispense');
  }

  // widgets
  // --------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'dispense_code', type: 'string' },
      { name: 'dispense_date', type: 'string' },
      { name: 'prescription_code', map: 'prescription>prescription_code', type: 'string' },
      { name: 'patient_name', map: 'prescription>patient>patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Dispense ID", dataField: "dispense_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "40%" },
    { text: "Prescription ID", dataField: "prescription_code", width: "20%" },
    { text: "Dispense Date", dataField: "dispense_date", filtertype: "range", width: "20%" },
  ];

}
