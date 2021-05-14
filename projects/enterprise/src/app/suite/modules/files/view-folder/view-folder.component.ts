import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { FilesApiService } from '../files-api.service';
import { FilesTableComponent } from '../files-table/files-table.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-folder',
  templateUrl: './view-folder.component.html',
  styleUrls: ['./view-folder.component.css']
})
export class ViewFolderComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private filesApi: FilesApiService,
  ) { }

  @ViewChild("folderNameReference") folderName: jqxInputComponent;
  @ViewChild("folderNumberReference") folderNumber: jqxInputComponent;
  @ViewChild("dateCreatedReference") dateCreated: jqxDateTimeInputComponent;
  @ViewChild("lastUpdatedReference") lastUpdated: jqxDateTimeInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;
  @ViewChild('filesTableComponentReference') filesTableComponent: FilesTableComponent;

  navHeading: any[] = [
    { text: "All Folders", url: "/suite/files/all-folders" },
    { text: "View Folder", url: "/suite/files/view-folder" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.filesApi.getSingleFolder()
      .subscribe(
        res => {
          console.log(res);
          this.folderNumber.val(res.folder_number);
          this.folderName.val(res.folder_name);
          this.dateCreated.val(res.date_created);
          this.lastUpdated.val(res.last_updated);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.filesApi.deleteFolder()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/files/all-folders');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  saveFolder(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the folder");

    let folderData = {
      user: sessionStorage.getItem('enterprise_id'),
      file_name: this.folderName.val(),
      file_number: this.folderNumber.val(),
    }

    this.filesApi.putFolder(folderData)
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

    console.log(folderData);
  }

  deleteFolder(){
    console.log("dude... u are gonna delete the folder");

    this.deleteConfirmComponent.openWindow();
  }

}
