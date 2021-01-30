import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { NotesApiService } from '../notes-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild("searchInputReference") searchInput: jqxInputComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.notesApi.getNotes()
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

  viewNote(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('note_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/notes/view-note')
  }

  // widgets
  // ------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'created_at', type: 'date' },
      { name: 'updated_at', type: 'date' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "50%" },
    { text: "Date Created", dataField: "created_at", filtertype: "range", width: "25%" },
    { text: "Last Updated", dataField: "updated_at", filtertype: "range", width: "25%" },
  ];

}
