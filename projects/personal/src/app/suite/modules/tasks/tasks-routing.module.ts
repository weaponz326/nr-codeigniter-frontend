import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TasksWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "kanban-view", component: KanbanViewComponent },
      { path: "all-tasks", component: AllTasksComponent },
      { path: "settings", component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
