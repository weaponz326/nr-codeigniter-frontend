import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ClassesApiService } from '../classes-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ClassFormComponent } from '../class-form/class-form.component'


@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private classesApi: ClassesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('classFormComponentReference') classForm: ClassFormComponent;

  navHeading: any[] = [
    { text: "All Classes", url: "/suite/classes/all-classes" },
    { text: "View Class", url: "/suite/classes/view-class" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.classesApi.getSingleClass()
      .subscribe(
        res => {
          console.log(res);
          this.classForm.className.val(res.class_name);
          this.classForm.department.val(res.department);
          this.classForm.location.val(res.location);
          this.classForm.classTeacher.val(res.teacher);
          this.classForm.term.val(res.term);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveClass(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a class");

    var classData = {
      school_id: sessionStorage.getItem('school_id'),
      class_name: this.classForm.className.val(),
      department: this.classForm.department.val(),
      location: this.classForm.location.val(),
      teacher: this.classForm.classTeacher.val(),
      term: this.classForm.term.val(),
    }

    this.classesApi.putClass(classData)
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

    console.log(classData);
  }

  deleteClass(){
    console.log("dude... u are gonna delete the class?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.classesApi.deleteClass()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/classes/all-classes');
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
