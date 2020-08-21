import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesWrapperComponent } from './files-wrapper/files-wrapper.component';
import { AllFoldersComponent } from './all-folders/all-folders.component';
import { ViewFolderComponent } from './view-folder/view-folder.component';
import { ViewFileComponent } from './view-file/view-file.component';


const routes: Routes = [
  {
    path: "",
    component: FilesWrapperComponent,
    children: [
      { path: "", component: AllFoldersComponent },
      { path: "all-folders", component: AllFoldersComponent },
      { path: "view-folder", component: ViewFolderComponent },
      { path: "view-file", component: ViewFileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
