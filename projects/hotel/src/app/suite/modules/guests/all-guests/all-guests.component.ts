import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { GuestsApiService } from '../guests-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-guests',
  templateUrl: './all-guests.component.html',
  styleUrls: ['./all-guests.component.css']
})
export class AllGuestsComponent implements OnInit {

  constructor(
    private router: Router,
    private guestsApi: GuestsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Guests", url: "/suite/guests/all-guests" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.guestsApi.getAllGuests()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  viewGuest(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('guest_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/guests/view-guest');
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'guest_code', type: 'string' },
      { name: 'guest_name', type: 'string' },
      { name: 'phone', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Guest ID", dataField: "guest_code", width: "25%" },
    { text: "Guest Name", dataField: "guest_name", width: "50%" },
    { text: "Phone No.", dataField: "phone", width: "25%" }
  ];

}
