import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ManufacturingApiService } from '../manufacturing-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-manufacturing',
  templateUrl: './all-manufacturing.component.html',
  styleUrls: ['./all-manufacturing.component.css']
})
export class AllManufacturingComponent implements OnInit {

  constructor(
    private router: Router,
    private manufacturingApi: ManufacturingApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Manufacturing", url: "/suite/manufacturing/all-manufacturing" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.manufacturingApi.getAllManufacturing()
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

  viewManufacturing(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('manufacturing_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/manufacturing/view-manufacturing');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'manufacturing_code', type: 'string' },
      { name: 'start_date', type: 'string' },
      { name: 'end_date', type: 'string' },
      { name: 'product_code', map: 'product>product_code', type: 'string' },
      { name: 'product_name', map: 'product>product_name', type: 'string' },
      { name: 'quantity', type: 'string' },
      { name: 'manufacturing_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Manufacturing ID", dataField: "manufacturing_code", width: "10%" },
    { text: "Start Date", dataField: "start_date", filtertype: "range", width: "15%" },
    { text: "End Date", dataField: "end_date", filtertype: "range", width: "15%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "25%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Manufacturing Status", dataField: "manufacturing_status", width: "15%" },
  ];

}
