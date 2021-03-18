import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TermsApiService } from '../terms-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { TermFormComponent } from '../term-form/term-form.component'


@Component({
  selector: 'app-view-term',
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.css']
})
export class ViewTermComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private termsApi: TermsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('termFormComponentReference') termForm: TermFormComponent;

  navHeading: any[] = [
    { text: "All Terms", url: "/suite/terms/all-terms" },
    { text: "View Term", url: "/suite/terms/view-term" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.termsApi.getSingleTerm()
      .subscribe(
        res => {
          console.log(res);
          this.termForm.termName.val(res.term_name);
          this.termForm.termBegins.val(res.term_begins);
          this.termForm.termEnds.val(res.term_ends);
          this.termForm.academicYear.val(res.academic_year);
          this.termForm.termStatus.val(res.term_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveTerm(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a term");

    var termData = {
      school_id: sessionStorage.getItem('school_id'),
      term_name: this.termForm.termName.val(),
      term_begins: this.termForm.termBegins.val(),
      term_ends: this.termForm.termEnds.val(),
      academic_year: this.termForm.academicYear.val(),
      term_status: this.termForm.termStatus.val(),
    }

    this.termsApi.putTerm(termData)
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

    console.log(termData);
  }

  deleteTerm(){
    console.log("dude... u are gonna delete the term?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.termsApi.deleteTerm()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/terms/all-terms');
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
