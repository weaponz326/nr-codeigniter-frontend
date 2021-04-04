import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ProcurementApiService } from '../procurement-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-procurement',
  templateUrl: './all-procurement.component.html',
  styleUrls: ['./all-procurement.component.css']
})
export class AllProcurementComponent implements OnInit {

  constructor(
    private router: Router,
    private procurementApi: ProcurementApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Procurement", url: "/suite/procurement/all-procurement" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.procurementApi.getProcurement()
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

  viewProcurement(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('procurement_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/procurement/view-procurement');
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'procurement_code', type: 'string' },
      { name: 'vendor_name', type: 'string' },
      { name: 'order_code', type: 'string' },
      { name: 'order_date', type: 'string' },
      { name: 'order_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Procurement ID", dataField: "procurement_code", width: "15%" },
    { text: "Vendor Name", dataField: "vendor_name", width: "30%" },
    { text: "Order ID", dataField: "order_code", width: "15%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "20%" },
    { text: "Order Status", dataField: "order_status", width: "20%" },
  ];

}
