import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CustomersApiService } from '../customers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/suite/customers/all-customers" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.customersApi.getCustomers()
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

  viewCustomer(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('customer_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/customers/view-customer');
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'customer_code', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'phone', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Customer ID", dataField: "customer_code", width: "25%" },
    { text: "Customer Name", dataField: "customer_name", width: "50%" },
    { text: "Phone No.", dataField: "phone", width: "25%" }
  ];

}
