import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { SectionsApiService } from '../sections-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.css']
})
export class NewSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private sectionsApi: SectionsApiService,
  ) { }

  @ViewChild("newSectionReference") newSection: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('sectionNameReference') sectionName: jqxInputComponent;
  @ViewChild('teacherReference') teacher: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  teacherIdStore: any;
  termIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.newSection.open();
  }

  saveSection(){
    this.loadingSpinner.httpLoader.open();

    let sectionData = {
      account: sessionStorage.getItem('school_id'),
      section_name: this.sectionName.val(),
      teacher: this.teacherIdStore,
      term: this.termIdStore,
    }

    this.sectionsApi.postSection(sectionData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('section_id', res.data.id);
            this.router.navigateByUrl('/suite/sections/view-section');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(sectionData);
  }


}
