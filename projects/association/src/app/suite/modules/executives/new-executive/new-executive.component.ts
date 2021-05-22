import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ExecutivesApiService } from '../executives-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ExecutiveFormComponent } from '../executive-form/executive-form.component'


@Component({
  selector: 'app-new-executive',
  templateUrl: './new-executive.component.html',
  styleUrls: ['./new-executive.component.css']
})
export class NewExecutiveComponent implements OnInit {

  constructor(
    private router: Router,
    private executivesApi: ExecutivesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('executiveFormComponentReference') executiveForm: ExecutiveFormComponent;

  navHeading: any[] = [
    { text: "New Executive", url: "/suite/executives/new-executive" },
  ];

  ngOnInit(): void {
  }

  saveExecutive(){
    console.log('u are saving a new executive');
    this.loadingSpinner.httpLoader.open();

    var executiveData = {
      account: sessionStorage.getItem('association_id'),
      executive_name: this.executiveForm.executiveName.val(),
      position: this.executiveForm.position.val(),
      date_inducted: this.executiveForm.dateInducted.val(),
    }

    console.log(executiveData);

    // this.executivesApi.postExecutive(executiveData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();

    //       if (res.message == "OK"){
    //         sessionStorage.setItem('executive_id', res.data.id);
    //         this.router.navigateByUrl('/suite/executives/view-executive');
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
