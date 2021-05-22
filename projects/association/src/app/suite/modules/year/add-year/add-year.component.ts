import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { YearApiService } from '../year-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { YearFormComponent } from '../year-form/year-form.component'


@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.css']
})
export class AddYearComponent implements OnInit {

  constructor(
    private router: Router,
    private yearApi: YearApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('yearFormComponentReference') yearForm: YearFormComponent;

  navHeading: any[] = [
    { text: "Add Year", url: "/suite/year/add-year" },
  ];

  ngOnInit(): void {
  }

  saveYear(){
    console.log('u are saving a new year');
    this.loadingSpinner.httpLoader.open();

    var yearData = {
      account: sessionStorage.getItem('school_id'),
      year: this.yearForm.year.val(),
      year_begins: this.yearForm.yearBegins.val(),
      year_ends: this.yearForm.yearEnds.val(),
      year_status: this.yearForm.yearStatus.val(),
    }

    console.log(yearData);

    // this.yearApi.postYear(yearData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();

    //       if (res.message == "OK"){
    //         sessionStorage.setItem('year_id', res.data.id);
    //         this.router.navigateByUrl('/suite/year/view-year');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

}
