import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';

import { FilesRoutingModule } from './files-routing.module';

import { FilesWrapperComponent } from './files-wrapper/files-wrapper.component';
import { AllFoldersComponent } from './all-folders/all-folders.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { ViewFolderComponent } from './view-folder/view-folder.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { AddFileComponent } from './add-file/add-file.component';


@NgModule({
  declarations: [
    FilesWrapperComponent,
    AllFoldersComponent,
    NewFolderComponent,
    ViewFolderComponent,
    FilesTableComponent,
    ViewFileComponent,
    AddFileComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxFileUploadModule
  ]
})
export class FilesModule { }
