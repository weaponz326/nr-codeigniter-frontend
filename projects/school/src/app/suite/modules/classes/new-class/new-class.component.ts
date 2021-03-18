import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ClassesApiService } from '../classes-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ClassFormComponent } from '../class-form/class-form.component'

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(
    private router: Router,
    private classesApi: ClassesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('classFormComponentReference') classForm: ClassFormComponent;

  navHeading: any[] = [
    { text: "New Class", url: "/suite/classes/new-class" },
  ];

  ngOnInit(): void {
  }

  saveClass(){
    console.log('u are saving a new class');
    this.loadingSpinner.httpLoader.open();

    var classData = {
      school_id: sessionStorage.getItem('school_id'),
      class_name: this.classForm.className.val(),
      department: this.classForm.department.val(),
      location: this.classForm.location.val(),
      teacher: this.classForm.classTeacher.val(),
      term: this.classForm.term.val(),
    }

    console.log(classData);

    this.classesApi.postClass(classData)
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
  }

}
