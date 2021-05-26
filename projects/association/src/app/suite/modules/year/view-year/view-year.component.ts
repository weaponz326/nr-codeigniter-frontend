import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { YearApiService } from '../year-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { YearFormComponent } from '../year-form/year-form.component'


@Component({
  selector: 'app-view-year',
  templateUrl: './view-year.component.html',
  styleUrls: ['./view-year.component.css']
})
export class ViewYearComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private yearApi: YearApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('yearFormComponentReference') yearForm: YearFormComponent;

  navHeading: any[] = [
    { text: "All Year", url: "/suite/year/all-year" },
    { text: "View Year", url: "/suite/year/view-year" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.yearApi.getSingleYear()
      .subscribe(
        res => {
          console.log(res);
          this.yearForm.year.val(res.year);
          this.yearForm.yearBegins.val(res.year_begins);
          this.yearForm.yearEnds.val(res.year_ends);
          this.yearForm.yearStatus.val(res.year_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveYear(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a year");

    var yearData = {
      account: sessionStorage.getItem('association_id'),
      year: this.yearForm.year.val(),
      year_begins: this.yearForm.yearBegins.val(),
      year_ends: this.yearForm.yearEnds.val(),
      year_status: this.yearForm.yearStatus.val(),
    }

    this.yearApi.putYear(yearData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(yearData);
  }

  deleteYear(){
    console.log("dude... u are gonna delete the year?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.yearApi.deleteYear()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/year/all-year');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
