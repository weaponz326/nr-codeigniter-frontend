import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DiagnosisApiService } from '../diagnosis-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-all-diagnosis',
  templateUrl: './all-diagnosis.component.html',
  styleUrls: ['./all-diagnosis.component.css']
})
export class AllDiagnosisComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private diagnosisApi: DiagnosisApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Diagnosis", url: "/suite/diagnosis/all-diagnosis" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.diagnosisApi.getAllDiagnosis()
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

  viewDiagnosis(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('diagnosis_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/diagnosis/view-diagnosis');
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'diagnosis_code', type: 'string' },
      { name: 'diagnosis_date', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Diagnosis ID", dataField: "diagnosis_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Diagnosis Date", dataField: "diagnosis_date", filtertype: "range", width: "30%" },
  ];

}
