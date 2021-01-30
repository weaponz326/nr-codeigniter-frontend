import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PaymentsApiService } from '../payments-api.service';


@Component({
  selector: 'app-select-patient',
  templateUrl: './select-patient.component.html',
  styleUrls: ['./select-patient.component.css']
})
export class SelectPatientComponent implements OnInit, AfterViewInit {

  constructor(private paymentsApi: PaymentsApiService) { }

  @ViewChild("selectPatientWindowReference") selectPatientWindow: jqxWindowComponent;
  @ViewChild("selectPatientGridReference") selectPatientGrid: jqxGridComponent;

  @Output() patientEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectPatientGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectPatientWindow.open();
  }

  selectPatient(event: any){
    console.log("u have double clicked a patient");
    this.patientEvent.emit(event.args.row.bounddata);
    this.selectPatientWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.paymentsApi.getPatients()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectPatientGrid.updatebounddata();
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
      { name: 'clinical_id', type: 'string' },
      { name: 'patient_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Patient ID", dataField: "clinical_id", width: "30%" },
    { text: "Patient Name", dataField: "patient_name", width: "70%" },
  ];

}
