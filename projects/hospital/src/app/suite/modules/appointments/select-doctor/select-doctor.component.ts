import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AppointmentsApiService } from '../appointments-api.service';


@Component({
  selector: 'app-select-doctor',
  templateUrl: './select-doctor.component.html',
  styleUrls: ['./select-doctor.component.css']
})
export class SelectDoctorComponent implements OnInit, AfterViewInit {

  @ViewChild("selectDoctorWindowReference") selectDoctorWindow: jqxWindowComponent;
  @ViewChild("selectDoctorGridReference") selectDoctorGrid: jqxGridComponent;

  @Output() doctorEvent = new EventEmitter<any>();

  constructor(private appointmentsApi: AppointmentsApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectDoctorGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectDoctorWindow.open();
  }

  selectDoctor(event: any){
    console.log("u have double clicked a doctor");
    this.doctorEvent.emit(event.args.row.bounddata);
    this.selectDoctorWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.appointmentsApi.getDoctors()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectDoctorGrid.updatebounddata();
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
      { name: 'doctor_code', type: 'string' },
      { name: 'doctor_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Doctor ID", dataField: "doctor_code", width: "30%" },
    { text: "Doctor Name", dataField: "doctor_name", width: "70%" },
  ];

}
