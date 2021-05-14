import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { FilesApiService } from '../files-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { FileFormComponent } from '../file-form/file-form.component'


@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.css']
})
export class ViewFileComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private filesApi: FilesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('fileFormComponentReference') fileForm: FileFormComponent;

  navHeading: any[] = [
    { text: "All Folders", url: "/suite/files/all-folders" },
    { text: "View Folder", url: "/suite/files/view-folder" },
    { text: "View File", url: "/suite/files/view-file" },
  ];

  employeeIdStore: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.filesApi.getSingleFile()
      .subscribe(
        res => {
          console.log(res);
          this.fileForm.fileNumber.val(res.file_number);
          this.fileForm.fileName.val(res.file_name);
          this.fileForm.fileType.val(res.file_type);
          this.fileForm.dateAdded.val(res.date_added);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveFile(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a file");

    var fileData = {
      folder: sessionStorage.getItem('folder_id'),
      file_number: this.fileForm.fileNumber.val(),
      file_name: this.fileForm.fileName.val(),
      file_type: this.fileForm.fileType.val(),
      date_added: this.fileForm.dateAdded.val(),
    }

    this.filesApi.putFile(fileData)
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

    console.log(fileData);
  }

  deleteFile(){
    console.log("dude... u are gonna delete the file?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.filesApi.deleteFile()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/file/all-file');
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
