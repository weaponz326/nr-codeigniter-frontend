import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TermsApiService } from '../terms-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { TermFormComponent } from '../term-form/term-form.component'


@Component({
  selector: 'app-new-term',
  templateUrl: './new-term.component.html',
  styleUrls: ['./new-term.component.css']
})
export class NewTermComponent implements OnInit {

  constructor(
    private router: Router,
    private termsApi: TermsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('termFormComponentReference') termForm: TermFormComponent;

  navHeading: any[] = [
    { text: "New Term", url: "/suite/terms/new-term" },
  ];

  ngOnInit(): void {
  }

  saveTerm(){
    console.log('u are saving a new term');
    this.loadingSpinner.httpLoader.open();

    var termData = {
      school_id: sessionStorage.getItem('school_id'),
      term_name: this.termForm.termName.val(),
      term_begins: this.termForm.termBegins.val(),
      term_ends: this.termForm.termEnds.val(),
      academic_year: this.termForm.academicYear.val(),
      term_status: this.termForm.termStatus.val(),
    }

    console.log(termData);

    this.termsApi.postTerm(termData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('term_id', res.term_id);
            this.router.navigateByUrl('/suite/terms/view-term');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
