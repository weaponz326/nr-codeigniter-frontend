import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettersWrapperComponent } from './letters-wrapper/letters-wrapper.component';
import { AllLettersComponent } from './all-letters/all-letters.component';


const routes: Routes = [
  {
    path: "",
    component: LettersWrapperComponent,
    children: [
      { path: "", component: AllLettersComponent },
      { path: "all-letters", component: AllLettersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LettersRoutingModule { }
