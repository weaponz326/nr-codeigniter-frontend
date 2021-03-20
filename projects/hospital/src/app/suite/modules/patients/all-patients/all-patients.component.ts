import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PatientsApiService } from '../patients-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private patientsApi: PatientsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Patients", url: "/suite/patients/all-patients" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.patientsApi.getPatients()
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

  viewPatient(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('patient_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/patients/view-patient');
  }

  // widgets
  // ------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'patient_name', type: 'string' },
      { name: 'clinical_number', type: 'string' },
      { name: 'sex', type: 'string' },
      { name: 'phone', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Clinical No.", dataField: "clinical_number", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "45%" },
    { text: "Sex", dataField: "sex", width: "15%" },
    { text: "Phone No.", dataField: "phone", width: "20%" }
  ];

}
