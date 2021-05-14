import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { FilesApiService } from '../files-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit, AfterViewInit {

  constructor(
    private filesApi: FilesApiService,
  ) { }

  @ViewChild("folderNameReference") folderName: jqxInputComponent;
  @ViewChild("folderNumberReference") folderNumber: jqxInputComponent;

  @ViewChild("fileNumberReference") fileNumber: jqxInputComponent;
  @ViewChild("fileNameReference") fileName: jqxInputComponent;
  @ViewChild("fileTypeReference") fileType: jqxDropDownListComponent;
  @ViewChild("dateAddedReference") dateAdded: jqxDateTimeInputComponent;
  @ViewChild("Reference") attachments: jqxFileUploadComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.filesApi.getSingleFolder()
      .subscribe(
        res => {
          console.log(res);
          this.folderNumber.val(res.folder_number);
          this.folderName.val(res.folder_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
