import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ContractorsApiService } from '../contractors-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-contractors',
  templateUrl: './all-contractors.component.html',
  styleUrls: ['./all-contractors.component.css']
})
export class AllContractorsComponent implements OnInit {

  constructor(
    private router: Router,
    private contractorsApi: ContractorsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Contractors", url: "/suite/contractors/all-contractors" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.contractorsApi.getContractors()
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

  viewContractor(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('contractor_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/contractors/view-contractor');
  }

  // widgets
  // -----------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'contractor_name', type: 'string' },
      { name: 'category', type: 'string' },
      { name: 'project', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Contractor Name", dataField: "contractor_name", width: "45%" },
    { text: "Category", dataField: "category", width: "25%" },
    { text: "Project", dataField: "project", width: "30%" },
  ];

}
