import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from '../../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, AfterViewInit {

  @ViewChild("noteWindowReference") noteWindow: jqxWindowComponent;
  @ViewChild("noteGridReference") noteGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @Output() sourceSelected = new EventEmitter<object>();

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.noteGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.portalApi.getNotes()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.noteGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  rowSelect(event: any){
    this.sourceSelected.emit(event.args.row.bounddata);
    this.noteWindow.close();
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
      { name: 'created_at', type: 'date' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "60%" },
    { text: "Date Created", dataField: "created_at", filtertype: "range", width: "40%" },
  ];

}
