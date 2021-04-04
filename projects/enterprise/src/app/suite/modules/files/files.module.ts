import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { FilesRoutingModule } from './files-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { FilesWrapperComponent } from './files-wrapper/files-wrapper.component';
import { AllFoldersComponent } from './all-folders/all-folders.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { ViewFolderComponent } from './view-folder/view-folder.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { AddFileComponent } from './add-file/add-file.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { FileFormComponent } from './file-form/file-form.component';


@NgModule({
  declarations: [
    FilesWrapperComponent,
    AllFoldersComponent,
    NewFolderComponent,
    ViewFolderComponent,
    FilesTableComponent,
    ViewFileComponent,
    AddFileComponent,
    DashboardComponent,
    SettingsComponent,
    FileFormComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxFileUploadModule,
    jqxDropDownListModule
  ]
})
export class FilesModule { }
