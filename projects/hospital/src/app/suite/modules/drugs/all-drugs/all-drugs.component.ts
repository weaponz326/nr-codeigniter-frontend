import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DrugsApiService } from '../drugs-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-drugs',
  templateUrl: './all-drugs.component.html',
  styleUrls: ['./all-drugs.component.css']
})
export class AllDrugsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private drugsApi: DrugsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.drugsApi.getDrugs()
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

  viewDrug(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('drug_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/drugs/view-drug');
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'ndc_number', type: 'string' },
      { name: 'drug_name', type: 'string' },
      { name: 'quantity_number', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "NDC No.", dataField: "ndc_number", width: "30%" },
    { text: "Drug Name", dataField: "drug_name", width: "50%" },
    { text: "Quantity Remaining", dataField: "quantity_remaining", columntype: "number", cellalign: "right", width: "20%" },
  ];

}
