import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TermsApiService } from '../terms-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-terms',
  templateUrl: './all-terms.component.html',
  styleUrls: ['./all-terms.component.css']
})
export class AllTermsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private termsApi: TermsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Terms", url: "/suite/terms/all-terms" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.termsApi.getTerms()
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

  viewTerm(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('term_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/terms/view-term');
  }

  // widgets
  // --------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'term_name', type: 'string' },
      { name: 'academic_year', type: 'string' },
      { name: 'term_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Term Name", dataField: "term_name", width: "50%" },
    { text: "Academic Year", dataField: "academic_year", width: "25%" },
    { text: "Term Status", dataField: "term_status", width: "25%" },
  ];

}
