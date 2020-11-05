import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from '../../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, AfterViewInit {

  @ViewChild("appointmentWindowReference") appointmentWindow: jqxWindowComponent;
  @ViewChild("appointmentGridReference") appointmentGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @Output() sourceSelected = new EventEmitter<object>();

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appointmentGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.portalApi.getAppointments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.appointmentGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  rowSelect(event: any){
    this.sourceSelected.emit(event.args.row.bounddata);
    this.appointmentWindow.close();
    console.log(event);
  }

  // widgets
  // ---------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
      { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' },
      { name: 'status', type: 'string' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "40%" },
    { text: "From", dataField: "start", filtertype: "range", width: "22%" },
    { text: "To", dataField: "end", filtertype: "range", width: "22%" },
    { text: "Status", dataField: "status", width: "16%" }
  ];


}
