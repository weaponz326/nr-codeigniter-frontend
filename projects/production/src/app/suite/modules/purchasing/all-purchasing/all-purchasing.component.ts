import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PurchasingApiService } from '../purchasing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-purchasing',
  templateUrl: './all-purchasing.component.html',
  styleUrls: ['./all-purchasing.component.css']
})
export class AllPurchasingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private purchasingApi: PurchasingApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Purchasing", url: "/suite/purchasing/all-purchasing" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.purchasingApi.getPurchasing()
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

  viewPurchasing(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('purchasing_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/purchasing/view-purchasing');
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'purchasing_code', type: 'string' },
      { name: 'purchasing_date', type: 'string' },
      { name: 'supplier_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Purchasing ID", dataField: "purchasing_code", width: "20%" },
    { text: "Purchasing Date", dataField: "purchasing_date", filtertype: "range", width: "25%" },
    { text: "Supplier Name", dataField: "supplier_name", width: "55%" },
  ];

}
