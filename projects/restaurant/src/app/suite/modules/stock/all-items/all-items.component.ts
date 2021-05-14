import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { StockApiService } from '../stock-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private stockApi: StockApiService
  ) { }

  @ViewChild('addItemReference') addItemButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/suite/stock/all-items" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.stockApi.getItems()
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

  viewStock(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('stock_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/stock/view-item');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item_code', type: 'string' },
      { name: 'item_name', type: 'string' },
      { name: 'category', type: 'string' },
      { name: 'item_type', type: 'string' },
      { name: 'quantity', type: 'string' },
      { name: 'refill_ordered', type: 'string' },
    ],
    id: 'id'
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Item ID", dataField: "item_code", width: "20%" },
    { text: "Item Name", dataField: "item_name", width: "60%" },
    { text: "Quantity", dataField: "quantity", width: "20%" },
  ];

}
