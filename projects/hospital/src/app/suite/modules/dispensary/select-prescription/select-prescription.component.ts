import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DispensaryApiService } from '../dispensary-api.service';

@Component({
  selector: 'app-select-prescription',
  templateUrl: './select-prescription.component.html',
  styleUrls: ['./select-prescription.component.css']
})
export class SelectPrescriptionComponent implements OnInit, AfterViewInit {

  constructor(private dispensaryApi: DispensaryApiService) { }

  @ViewChild("selectPrescriptionWindowReference") selectPrescriptionWindow: jqxWindowComponent;
  @ViewChild("selectPrescriptionGridReference") selectPrescriptionGrid: jqxGridComponent;

  @Output() prescriptionEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectPrescriptionGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectPrescriptionWindow.open();
  }

  selectPrescription(event: any){
    console.log("u have double clicked a patient");
    this.prescriptionEvent.emit(event.args.row.bounddata);
    this.selectPrescriptionWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.dispensaryApi.getPrescriptions()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectPrescriptionGrid.updatebounddata();
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
      { name: 'prescription_code', type: 'string' },
      { name: 'prescription_date', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
      { name: 'doctor_name', map: 'doctor>doctor_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Prescription ID", dataField: "prescription_code", width: "30%" },
    { text: "Prescription Date", dataField: "prescription_date", width: "30%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Prescribing Doctor", dataField: "doctor_name", width: "50%" },
  ];

}
