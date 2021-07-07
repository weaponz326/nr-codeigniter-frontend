import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { FeesApiService } from '../fees-api.service';
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
  ) { }

  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('generateFeesReference') generateFees: jqxButtonComponent;
  @ViewChild('otherButtonReference') otherButton: jqxButtonComponent;
  @ViewChild("feesCodeReference") feesCode: jqxInputComponent;
  @ViewChild("feesDescriptionReference") feesDescription: jqxInputComponent;
  @ViewChild("feesDateReference") feesDate: jqxDateTimeInputComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Fees", url: "/suite/fees/all-fees" },
    { text: "View Fees", url: "/suite/fees/view-fees" },
    { text: "All Bills", url: "/suite/fees/all-bills" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getFeesData();
    this.getFeesBills();
  }

  getFeesData(){
    this.feesApi.getSingleFees()
      .subscribe(
        res => {
          console.log(res);
          this.feesCode.val(res.fees_code);
          this.feesDescription.val(res.fees_description);
          this.feesDate.val(res.fees_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getFeesBills(){
    this.feesApi.getFeesBills()
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

  viewBill(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('fees_bill_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/fees/student-bill');
  }

  // widgets
  // ----------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'student_code', map: 'student>student_code', type: 'string' },
      { name: 'student_name', map: 'student>student_name', type: 'string' },
      { name: 'class_name', map: 'student>clas>class_name', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "15%" },
    { text: "Student Name", dataField: "student_name", width: "35%" },
    { text: "Class", dataField: "class_name", width: "30%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2'},
  ];

}
