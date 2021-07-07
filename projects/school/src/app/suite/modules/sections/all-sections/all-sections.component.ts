import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SectionsApiService } from '../sections-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.css']
})
export class AllSectionsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private sectionsApi: SectionsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Sections", url: "/suite/sections/all-sections" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.sectionsApi.getSections()
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

  viewSection(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('section_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/sections/view-section');
  }

  // widgets
  // --------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'section_name', type: 'string' },
      { name: 'teacher_name', map: 'teacher>teacher_name', type: 'string' },
      { name: 'teacher_id', map: 'teacher>id', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Section Name", dataField: "section_name", width: "60%" },
    { text: "Section Teacher", dataField: "teacher_name", width: "40%" },
  ];

}
