import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { SectionsApiService } from '../sections-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-section',
  templateUrl: './view-section.component.html',
  styleUrls: ['./view-section.component.css']
})
export class ViewSectionComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private sectionsApi: SectionsApiService,
  ) { }

  @ViewChild('sectionNameReference') sectionName: jqxInputComponent;
  @ViewChild('teacherReference') teacher: jqxInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('saveSectionReference') saveButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Sections", url: "/suite/sections/all-sections" },
    { text: "View Section", url: "/suite/sections/view-section" },
  ];

  teacherIdStore;
  termIdStore;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sectionsApi.getSingleSection()
      .subscribe(
        res => {
          console.log(res);
          this.sectionName.val(res.section_name);
          this.teacher.val(res.teacher.teacher_name);
          this.term.val(res.term.term_name);
          this.teacherIdStore = res.teacher.id;
          this.termIdStore = res.term.id;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveSection(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a section");

    var sectionData = {
      account: sessionStorage.getItem('school_id'),
      section_name: this.sectionName.val(),
      teacher: this.teacherIdStore,
    }

    this.sectionsApi.putSection(sectionData)
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

    console.log(sectionData);
  }

  deleteSection(){
    console.log("dude... u are gonna delete the section?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.sectionsApi.deleteSection()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/section/all-section');
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
