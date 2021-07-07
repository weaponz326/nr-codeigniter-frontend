import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit, AfterViewInit {

  constructor(private feesApi: FeesApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  billArrearsData = [];
  billFeesData = [];
  sourceLocalData = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getBillArrears();
    this.getBillFees();
  }

  getBillArrears(){
    this.feesApi.getBillArrears()
      .subscribe(
        res => {
          console.log(res); 
          this.billArrearsData = res;
          this.getBillFees();                
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getBillFees(){
    this.feesApi.getAllFeesItems()
      .subscribe(
        res => {
          console.log(res);
          this.billFeesData = res;
          this.setLocalData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  setLocalData(){
    this.sourceLocalData = [...this.billArrearsData, ...this.billFeesData];
    this.source.localdata = this.sourceLocalData;
    this.grid.updatebounddata();
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'amount', type: 'string' },
      { name: 'item', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Item Description", dataField: "item", width: "70%" },
    { text: "Amount", dataField: "amount", width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
