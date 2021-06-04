import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BillsApiService } from '../bills-api.service';

@Component({
  selector: 'app-select-guest',
  templateUrl: './select-guest.component.html',
  styleUrls: ['./select-guest.component.css']
})
export class SelectGuestComponent implements OnInit, AfterViewInit {

  constructor(private billsApi: BillsApiService) { }

  @ViewChild("selectGuestWindowReference") selectGuestWindow: jqxWindowComponent;
  @ViewChild("selectGuestGridReference") selectGuestGrid: jqxGridComponent;

  @Output() guestEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectGuestGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectGuestWindow.open();
  }

  selectGuest(event: any){
    console.log("u have double clicked a guest");
    this.guestEvent.emit(event.args.row.bounddata);
    this.selectGuestWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.billsApi.getGuests()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectGuestGrid.updatebounddata();
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
      { name: 'guest_name', type: 'string' },
      { name: 'guest_code', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Guest ID", dataField: "guest_code", width: "30%" },
    { text: "Guest Name", dataField: "guest_name", width: "70%" },
  ];

}
