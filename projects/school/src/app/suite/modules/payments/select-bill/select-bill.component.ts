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

  constructor(private paymentsApi: PaymentsApiService) { }

  @ViewChild("selectBillWindowReference") selectBillWindow: jqxWindowComponent;
  @ViewChild("selectBillGridReference") selectBillGrid: jqxGridComponent;

  @Output() billEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {   
  }

  openWindow(){
    this.selectBillWindow.open();
  }

  selectBill(event: any){
    console.log("u have double clicked a patient");
    this.billEvent.emit(event.args.row.bounddata);
    this.selectBillWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getBillData(studentId){
    this.selectBillGrid.showloadelement();

    this.paymentsApi.getBills(studentId)
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
      { name: 'fees_code', map: 'fee>fees_code', type: 'string' },
      { name: 'fees_description', map: 'fee>fees_description', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Fees ID", dataField: "fees_code", width: "25%" },
    { text: "Fees Description", dataField: "fees_description", width: "50%" },
    { text: "Amount", dataField: "amount", width: "25%" },
  ];

}
