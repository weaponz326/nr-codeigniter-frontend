import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BillsApiService } from '../bills-api.service';


@Component({
  selector: 'app-select-admission',
  templateUrl: './select-admission.component.html',
  styleUrls: ['./select-admission.component.css']
})
export class SelectAdmissionComponent implements OnInit, AfterViewInit {

  @ViewChild("selectAdmissionWindowReference") selectAdmissionWindow: jqxWindowComponent;
  @ViewChild("selectAdmissionGridReference") selectAdmissionGrid: jqxGridComponent;

  @Output() admissionEvent = new EventEmitter<any>();

  constructor(private billsApi: BillsApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectAdmissionGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectAdmissionWindow.open();
  }

  selectAdmission(event: any){
    console.log("u have double clicked an admission");
    this.admissionEvent.emit(event.args.row.bounddata);
    this.selectAdmissionWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.billsApi.getAdmissions()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectAdmissionGrid.updatebounddata();
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
      { name: 'admission_code', type: 'string' },
      { name: 'admission_date', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Admission ID", dataField: "admission_code", width: "50%" },
    { text: "Admission Date", dataField: "admission_date", width: "50%" },
  ];

}
