import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { SubjectsWrapperComponent } from './subjects-wrapper/subjects-wrapper.component';


const routes: Routes = [
  {
    path: "",
    component: SubjectsWrapperComponent,
    children: [
      { path: "", component: AllSubjectsComponent },
      { path: "all-subjects", component: AllSubjectsComponent },
      { path: "add-subject", component: AddSubjectComponent },
      { path: "view-subject", component: ViewSubjectComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
