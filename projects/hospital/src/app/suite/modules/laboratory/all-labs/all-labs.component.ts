import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { LaboratoryApiService } from '../laboratory-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-labs',
  templateUrl: './all-labs.component.html',
  styleUrls: ['./all-labs.component.css']
})
export class AllLabsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private laboratoryApi: LaboratoryApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Laboratory", url: "/suite/laboratory/all-labs" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.laboratoryApi.getLabs()
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

  viewLab(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('lab_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/laboratory/view-lab');
  }

  // widgets
  // -----------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'lab_code', type: 'string' },
      { name: 'lab_date', type: 'string' },
      { name: 'patient_name', type: 'string' },
      { name: 'lab_type', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Lab ID", dataField: "lab_code", width: "20%" },
    { text: "Lab Date", dataField: "lab_date", filtertype: "range", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "30%" },
    { text: "Lab Type", dataField: "lab_type", width: "30%" },
  ];

}
