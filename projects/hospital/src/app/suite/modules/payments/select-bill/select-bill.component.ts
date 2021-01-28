import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PaymentsApiService } from '../payments-api.service';


@Component({
  selector: 'app-select-bill',
  templateUrl: './select-bill.component.html',
  styleUrls: ['./select-bill.component.css']
})
export class SelectBillComponent implements OnInit, AfterViewInit {

  @ViewChild("selectBillWindowReference") selectBillWindow: jqxWindowComponent;
  @ViewChild("selectBillGridReference") selectBillGrid: jqxGridComponent;

  @Output() patientEvent = new EventEmitter<any>();

  constructor(private paymentsApi: PaymentsApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectBillGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectBillWindow.open();
  }

  selectBill(event: any){
    console.log("u have double clicked a patient");
    this.patientEvent.emit(event.args.row.bounddata);
    this.selectBillWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.paymentsApi.getBills()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectBillGrid.updatebounddata();
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
      { name: 'bill_code', type: 'string' },
      { name: 'bill_date', type: 'string' },
      { name: 'total_amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Bill ID", dataField: "bill_code", width: "30%" },
    { text: "Bill Date", dataField: "bill_date", width: "40%" },
    { text: "Amount Due", dataField: "total_amount", width: "30%" },
  ];

}
