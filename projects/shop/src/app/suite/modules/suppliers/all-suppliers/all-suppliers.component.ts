import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SuppliersApiService } from '../suppliers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.css']
})
export class AllSuppliersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private suppliersApi: SuppliersApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Suppliers", url: "/suite/suppliers/all-suppliers" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.suppliersApi.getSuppliers()
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

  viewSupplier(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('supplier_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/suppliers/view-supplier');
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'supplier_code', type: 'string' },
      { name: 'supplier_name', type: 'string' },
      { name: 'phone', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Supplier ID", dataField: "supplier_code", width: "25%" },
    { text: "Supplier Name", dataField: "supplier_name", width: "50%" },
    { text: "Phone No.", dataField: "phone", width: "25%" },
  ];


}
