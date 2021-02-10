import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DeliveriesApiService } from '../deliveries-api.service';


@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrls: ['./select-order.component.css']
})
export class SelectOrderComponent implements OnInit, AfterViewInit {

  constructor(private deliveriesApi: DeliveriesApiService) { }

  @ViewChild("selectOrderWindowReference") selectOrderWindow: jqxWindowComponent;
  @ViewChild("selectOrderGridReference") selectOrderGrid: jqxGridComponent;

  @Output() doctorEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectOrderGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectOrderWindow.open();
  }

  selectOrder(event: any){
    console.log("u have double clicked a doctor");
    this.doctorEvent.emit(event.args.row.bounddata);
    this.selectOrderWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.deliveriesApi.getOrders()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectOrderGrid.updatebounddata();
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
      { name: 'cutomer_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Order ID", dataField: "doctor_code", width: "30%" },
    { text: "Order Date", dataField: "order_date", width: "40%" },
    { text: "Cutomer Name", dataField: "customer_name", width: "30%" },
  ];

}
