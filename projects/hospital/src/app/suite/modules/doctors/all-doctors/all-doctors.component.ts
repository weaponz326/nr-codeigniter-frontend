import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DoctorsApiService } from '../doctors-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private doctorsApi: DoctorsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Doctors", url: "/suite/doctors/all-doctors" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.doctorsApi.getDoctors()
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

  viewDoctor(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('doctor_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/doctors/view-doctor');
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'doctor_name', type: 'string' },
      { name: 'doctor_code', type: 'string' },
      { name: 'speciality', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Doctor ID", dataField: "doctor_code", width: "20%" },
    { text: "Doctor Name", dataField: "doctor_name", width: "45%" },
    { text: "Speciality", dataField: "speciality", width: "35%" },
  ];

}
