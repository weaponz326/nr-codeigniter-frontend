import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-student-bill',
  templateUrl: './student-bill.component.html',
  styleUrls: ['./student-bill.component.css']
})
export class StudentBillComponent implements OnInit, AfterViewInit {

  constructor(private feesApi: FeesApiService) { }

  @ViewChild('feesCodeReference') feesCode: jqxInputComponent;
  @ViewChild('feesDescriptionReference') feesDescription: jqxInputComponent;
  @ViewChild('feesDateReference') feesDate: jqxDateTimeInputComponent;
  @ViewChild('studentNameReference') studentName: jqxInputComponent;
  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Fees", url: "/suite/fees/all-fees" },
    { text: "View Fees", url: "/suite/fees/view-fees" },
    { text: "All Bills", url: "/suite/fees/all-bills" },
    { text: "Student Bill", url: "/suite/fees/student-bill" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStudentBill();
  }

  getStudentBill(){
    this.feesApi.getStudentBill()
      .subscribe(
        res => {
          console.log(res);
          this.feesCode.val(res.fee.fees_code);
          this.feesDescription.val(res.fee.fees_description);
          this.feesDate.val(res.fee.fees_date);
          this.studentName.val(res.student.student_name);
          this.studentCode.val(res.student.student_code);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
