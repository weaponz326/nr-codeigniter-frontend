import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BillsApiService } from '../bills-api.service';
import { BillsCalcService } from '../bills-calc.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit, AfterViewInit {

  constructor(private billsApi: BillsApiService, private billsCalc: BillsCalcService) { }

  @Output() totalEvent = new EventEmitter<any>();

  @ViewChild("appointmentsGridReference") appointmentsGrid: jqxGridComponent;
  @ViewChild("laboratoryGridReference") laboratoryGrid: jqxGridComponent;
  @ViewChild("dispensaryGridReference") dispensaryGrid: jqxGridComponent;
  @ViewChild("wardsGridReference") wardsGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appointmentsGrid.showloadelement();
    this.laboratoryGrid.showloadelement();
    this.dispensaryGrid.showloadelement();
    this.wardsGrid.showloadelement();
    this.getAppointmentsData();
    this.getLaboratoryData();
    this.getDispensaryData();
    this.getWardsData();
  }

  getAppointmentsData(){
    this.billsApi.getAppointmentsItems()
      .subscribe(
        res => {
          console.log(res);
          this.appointmentsSource.localdata = res;
          this.appointmentsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getLaboratoryData(){
    this.billsApi.getLaboratoryItems()
      .subscribe(
        res => {
          console.log(res);
          this.laboratorySource.localdata = res;
          this.laboratoryGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getDispensaryData(){
    this.billsApi.getDispensaryItems()
      .subscribe(
        res => {
          console.log(res);
          this.dispensarySource.localdata = res;
          this.dispensaryGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getWardsData(){
    this.billsApi.getWardsItems()
      .subscribe(
        res => {
          console.log(res);
          this.wardsSource.localdata = res;
          this.wardsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  calculateTotal(event: any){
    console.log(event);

    let appointmentsSum = this.appointmentsGrid.getcolumnaggregateddata('amount', ['sum']);
    let laboratorySum = this.laboratoryGrid.getcolumnaggregateddata('amount', ['sum']);
    let dispensarySum = this.dispensaryGrid.getcolumnaggregateddata('amount', ['sum']);
    let wardsSum = this.wardsGrid.getcolumnaggregateddata('amount', ['sum']);

    let billsArray = [event, appointmentsSum, laboratorySum, dispensarySum, wardsSum];
    let totalBill = this.billsCalc.totalBill(billsArray);
    this.totalEvent.emit(totalBill);
    console.log(totalBill);
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  // appointments grid

  appointmentsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'appointment_code', type: 'string' },
      { name: 'appointment_date', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  appointmentsDataAdapter: any = new jqx.dataAdapter(this.appointmentsSource);

  appointmentColumns: any[] = [
    { text: 'Appointment ID', columngroup: 'appointmentGroup', dataField: 'appointment_code', width: "30%" },
    { text: 'Appointment Date', columngroup: 'appointmentGroup', dataField: 'appointment_date', width: "40%" },
    { text: 'Amount', columngroup: 'appointmentGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  appointmentColumnGroups: any[] = [
    { text: "Appointments Charges", align: "center", name: "appointmentGroup" }
  ];

  // dispensary grid

  dispensarySource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'dispense_code', type: 'string' },
      { name: 'dispense_date', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  dispensaryDataAdapter: any = new jqx.dataAdapter(this.dispensarySource);

  dispensaryColumns: any[] = [
    { text: 'Dispense ID', columngroup: 'dispensaryGroup', dataField: 'dispense_code', width: "30%" },
    { text: 'Dispense Date', columngroup: 'dispensaryGroup', dataField: 'dispense_date', width: "40%" },
    { text: 'Amount', columngroup: 'dispensaryGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  dispensaryColumnGroups: any[] = [
    { text: "Dispensary Charges", align: "center", name: "dispensaryGroup" }
  ];

  // laboratory grid

  laboratorySource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'lab_code', type: 'string' },
      { name: 'lab_date', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  laboratoryDataAdapter: any = new jqx.dataAdapter(this.laboratorySource);

  laboratoryColumns: any[] = [
    { text: 'Laboratory ID', columngroup: 'laboratoryGroup', dataField: 'lab_code', width: "30%" },
    { text: 'Laboratory Date', columngroup: 'laboratoryGroup', dataField: 'lab_date', width: "40%" },
    { text: 'Amount', columngroup: 'laboratoryGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  laboratoryColumnGroups: any[] = [
    { text: "Laboratory Charges", align: "center", name: "laboratoryGroup" }
  ];

  // ward grid

  wardsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'ward_number', type: 'string' },
      { name: 'days', type: 'string' },
      { name: 'rate', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  wardsDataAdapter: any = new jqx.dataAdapter(this.wardsSource);

  wardsColumns: any[] = [
    { text: 'Ward No.', columngroup: 'wardGroup', dataField: 'ward_number', width: "30%" },
    { text: 'Days', columngroup: 'wardGroup', dataField: 'days', width: "20%" },
    { text: 'Daily Rate', columngroup: 'wardGroup', dataField: 'rate', width: "20%", cellsalign: 'right', cellsformat: 'c2' },
    { text: 'Amount', columngroup: 'wardGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  wardsColumnGroups: any[] = [
    { text: "Wards Charges", align: "center", name: "wardGroup" }
  ];

}
