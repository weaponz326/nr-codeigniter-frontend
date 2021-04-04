import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FilesApiService } from '../files-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-folders',
  templateUrl: './all-folders.component.html',
  styleUrls: ['./all-folders.component.css']
})
export class AllFoldersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private filesApi: FilesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Folder", url: "/suite/files/all-folders" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.filesApi.getFolders()
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

  viewFolder(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('folder_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/files/view-folder');
  }

  // widgets
  // ---------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'folder_number', type: 'string' },
      { name: 'folder_name', type: 'string' },
      { name: 'date_created', type: 'string' },
      { name: 'last_updated', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Folder No.", dataField: "folder_number", width: "18%" },
    { text: "Folder Name", dataField: "folder_name", width: "46%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "18%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "18%" },
  ]

}
