import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';
import { TaskComponent } from '../rink-types/task/task.component';
import { AppointmentComponent } from '../rink-types/appointment/appointment.component';
import { NoteComponent } from '../rink-types/note/note.component';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.css']
})
export class NewRinkComponent implements OnInit, AfterViewInit {

  @ViewChild('goToSearchButtonReference') goToSearchbutton: jqxButtonComponent;
  @ViewChild('nameInputReference') nameInput: jqxInputComponent;
  @ViewChild('locationInputReference') locationInput: jqxInputComponent;
  @ViewChild('typeDropDownListReference') typeDropDownList: jqxDropDownListComponent;
  @ViewChild('sourceButtonReference') sourceButton: jqxButtonComponent;
  @ViewChild('commentTextAreaReference') commentTextArea: jqxTextAreaComponent;
  @ViewChild('sendButtonReference') sendButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('appointmentSourceComponentReference') appointmentSourceComponent: AppointmentComponent;
  @ViewChild('taskSourceComponentReference') taskSourceComponent: TaskComponent;
  @ViewChild('noteSourceComponentReference') noteSourceComponent: NoteComponent;

  selectedSourceId: any;
  selectedSource: string;

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.portalApi.getDetail(sessionStorage.getItem('searchUser'))
      .subscribe(
        res => {
          console.log(res);
          this.nameInput.val(res.user.first_name + " " + res.user.last_name);
          this.locationInput.val(res.location);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // enable source button when user select type
  enableSourceButton(){
    this.sourceButton.disabled(false);
  }

  openSourceWindow(){
    let type = this.typeDropDownList.val();

    if (type == "Task") {
      console.log("u are opening task source window");
      this.taskSourceComponent.taskWindow.open();
    }else if (type == "Appointment") {
      console.log("u are opening appointment source window");
      this.appointmentSourceComponent.appointmentWindow.open();
    }else if (type == "Note") {
      console.log("u are opening note source window");
      this.noteSourceComponent.noteWindow.open();
    }
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);

    let type = this.typeDropDownList.val();

    if (type == "Task") {
      this.selectedSourceId = sourceData.id;
      this.selectedSource = sourceData.task_name;
    }else if (type == "Appointment") {
      this.selectedSourceId = sourceData.id;
      this.selectedSource = sourceData.subject;
    }else if (type == "Note") {
      this.selectedSourceId = sourceData.id;
      this.selectedSource = sourceData.subject;
    }
  }

  sendRink(){
    let rinkData = {
      sender: localStorage.getItem('personal_id'),
      recipient: sessionStorage.getItem('searchUser'),
      rink_type: this.typeDropDownList.val(),
      rink_source: this.selectedSourceId,
      comment: this.commentTextArea.val()
    }

    console.log(rinkData);

    this.loadingSpinner.httpLoader.open();

    this.portalApi.postRink(rinkData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          
          if (res.status == true){
            sessionStorage.setItem('rink_id', res.rink_id);
            this.router.navigateByUrl('/suite/portal/view-rink');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // budget type settings
  typeSource: string[] = ['Appointment', 'Task', 'Note'];

}

