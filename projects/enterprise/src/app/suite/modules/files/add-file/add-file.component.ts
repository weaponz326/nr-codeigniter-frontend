import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { FilesApiService } from '../files-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { FileFormComponent } from '../file-form/file-form.component'


@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})

export class AddFileComponent implements OnInit {

  constructor(
    private router: Router,
    private filesApi: FilesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('fileFormComponentReference') fileForm: FileFormComponent;

  navHeading: any[] = [
    { text: "All Folders", url: "/suite/files/all-folders" },
    { text: "View Folder", url: "/suite/files/view-folder" },
    { text: "Add File", url: "/suite/files/add-file" },
  ];

  employeeIdStore: any;

  ngOnInit(): void {
  }

  saveFile(){
    console.log('u are saving a new file');
    this.loadingSpinner.httpLoader.open();

    var fileData = {
      folder: sessionStorage.getItem('folder_id'),
      file_number: this.fileForm.fileNumber.val(),
      file_name: this.fileForm.fileName.val(),
      file_type: this.fileForm.fileType.val(),
      date_added: this.fileForm.dateAdded.val(),
    }

    console.log(fileData);

    this.filesApi.postFile(fileData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('file_id', res.data.id);
            this.router.navigateByUrl('/suite/files/view-file');
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
