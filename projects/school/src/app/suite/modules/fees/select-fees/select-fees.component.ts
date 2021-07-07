import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';


@Component({
  selector: 'app-select-fees',
  templateUrl: './select-fees.component.html',
  styleUrls: ['./select-fees.component.css']
})
export class SelectFeesComponent implements OnInit {

  constructor(private feesApi: FeesApiService) { }

  @ViewChild("selectFeeWindowReference") selectFeeWindow: jqxWindowComponent;
  @ViewChild("selectFeeGridReference") selectFeeGrid: jqxGridComponent;

  @Output() feesEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectFeeGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectFeeWindow.open();
  }

  selectFee(event: any){
    console.log("u have double clicked a class");
    this.feesEvent.emit(event.args.row.bounddata);
    this.selectFeeWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.feesApi.getAllFees()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectFeeGrid.updatebounddata();
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
      { name: 'fees_code', type: 'string' },
      { name: 'fees_description', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Fees ID", dataField: "fees_code", width: "30%" },
    { text: "Fees Description", dataField: "fees_description", width: "70%" },
  ];

}
