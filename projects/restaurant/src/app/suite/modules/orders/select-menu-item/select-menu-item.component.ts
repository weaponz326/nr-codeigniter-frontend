import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { OrdersApiService } from '../orders-api.service';


@Component({
  selector: 'app-select-menu-item',
  templateUrl: './select-menu-item.component.html',
  styleUrls: ['./select-menu-item.component.css']
})
export class SelectMenuItemComponent implements OnInit, AfterViewInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild("selectMenuItemWindowReference") selectMenuItemWindow: jqxWindowComponent;
  @ViewChild("selectMenuItemGridReference") selectMenuItemGrid: jqxGridComponent;

  @Output() menuItemEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectMenuItemGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectMenuItemWindow.open();
  }

  selectMenuItem(event: any){
    console.log("u have double clicked a menu item");
    this.menuItemEvent.emit(event.args.row.bounddata);
    this.selectMenuItemWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.ordersApi.getMenuItems()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectMenuItemGrid.updatebounddata();
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
      { name: 'item_code', type: 'string' },
      { name: 'item_name', type: 'string' },
      { name: 'price', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Menu Item ID", dataField: "item_code", width: "25%" },
    { text: "Menu Item Name", dataField: "item_name", width: "50%" },
    { text: "Price", dataField: "price", width: "25%" },
  ];

}
