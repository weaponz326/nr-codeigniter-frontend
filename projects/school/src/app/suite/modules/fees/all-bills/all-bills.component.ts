import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {

  constructor(
    private router: Router,
    private feesApi: FeesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('generateFeesReference') generateFees: jqxButtonComponent;
  @ViewChild('otherButtonReference') otherButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Bills", url: "/suite/fees/all-bills" },
  ];

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "15%" },
    { text: "Student Name", dataField: "student_name", width: "35%" },
    { text: "Bill ID", dataField: "bill_code", width: "15%" },
    { text: "Bill Date", dataField: "bill_date", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2'}
  ];

}
