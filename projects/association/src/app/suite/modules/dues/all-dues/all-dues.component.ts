import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DuesApiService } from '../dues-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-dues',
  templateUrl: './all-dues.component.html',
  styleUrls: ['./all-dues.component.css']
})
export class AllDuesComponent implements OnInit {

  constructor(
    private router: Router,
    private duesApi: DuesApiService,
  ) { }

  @ViewChild('createButtonReference') createButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('paymentsButtonReference') paymentsButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Dues", url: "/suite/dues/all-dues" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.duesApi.getDues()
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

  viewDues(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('dues_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/dues/view-dues')
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'dues_code', type: 'string' },
      { name: 'dues_name', type: 'string' },
      { name: 'dues_date', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Dues ID", dataField: "dues_code", width: "20%" },
    { text: "Dues Name", dataField: "dues_name", width: "40%" },
    { text: "Dues Date", dataField: "dues_date", width: "20%" },
    { text: "Amount", dataField: "amount", width: "20%" },
  ]

}
