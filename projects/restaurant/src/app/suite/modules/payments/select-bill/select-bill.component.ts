// ====================================
// component changed from bill to order
// ====================================

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

  @Output() orderEvent = new EventEmitter<any>();

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
    this.orderEvent.emit(event.args.row.bounddata);
    this.selectBillWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.paymentsApi.getOrders()
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
      { name: 'order_code', type: 'string' },
      { name: 'order_date', type: 'string' },
      { name: 'order_total', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "30%" },
    { text: "Order Date", dataField: "order_date", width: "40%" },
    { text: "Amount", dataField: "order_total", width: "30%" },
  ];

}
