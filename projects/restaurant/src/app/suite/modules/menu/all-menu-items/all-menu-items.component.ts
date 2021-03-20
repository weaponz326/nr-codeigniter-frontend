import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { MenuApiService } from '../menu-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.css']
})
export class AllMenuItemsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/suite/menu/all-items" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.menuApi.getMenuItems()
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

  viewMenu(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('menu_item_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/menu/view-item');
  }

  // widgets
  // -------------------------------------------------------------------------------------

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
    { text: "Item ID", dataField: "item_code", width: "25%" },
    { text: "Item Name", dataField: "item_name", width: "50%" },
    { text: "Price", dataField: "price", width: "25%", cellsalign: 'right', cellsformat: 'c2' },
  ];

}
