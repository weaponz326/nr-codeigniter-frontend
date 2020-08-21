import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersWrapperComponent } from './workers-wrapper/workers-wrapper.component';
import { AllWorkersComponent } from './all-workers/all-workers.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';


const routes: Routes = [
  {
    path: "",
    component: WorkersWrapperComponent,
    children: [
      { path: "", component: AllWorkersComponent },
      { path: "all-workers", component: AllWorkersComponent },
      { path: "new-worker", component: NewWorkerComponent },
      { path: "view-worker", component: ViewWorkerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
