import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ExecutivesApiService } from '../executives-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ExecutiveFormComponent } from '../executive-form/executive-form.component'


@Component({
  selector: 'app-view-executive',
  templateUrl: './view-executive.component.html',
  styleUrls: ['./view-executive.component.css']
})
export class ViewExecutiveComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private executivesApi: ExecutivesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('executiveFormComponentReference') executiveForm: ExecutiveFormComponent;

  navHeading: any[] = [
    { text: "All Executives", url: "/suite/executives/all-executives" },
    { text: "View Executive", url: "/suite/executives/view-executive" },
  ];

  memberId;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.executivesApi.getSingleExecutive()
      .subscribe(
        res => {
          console.log(res);
          this.memberId = res.member.id
          this.executiveForm.executiveName.val(res.member.member_name);
          this.executiveForm.position.val(res.position);
          this.executiveForm.dateInducted.val(res.date_inducted);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveExecutive(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a executive");

    var executiveData = {
      account: sessionStorage.getItem('association_id'),
      member: this.memberId,
      position: this.executiveForm.position.val(),
      date_inducted: this.executiveForm.dateInducted.val(),
    }

    this.executivesApi.putExecutive(executiveData)
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

    console.log(executiveData);
  }

  deleteExecutive(){
    console.log("dude... u are gonna delete the executive?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.executivesApi.deleteExecutive()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/executives/all-executives');
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
