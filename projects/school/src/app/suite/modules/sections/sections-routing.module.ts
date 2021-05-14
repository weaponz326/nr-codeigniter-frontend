import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsWrapperComponent } from './sections-wrapper/sections-wrapper.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SectionsWrapperComponent,
    children: [
      { path: "", component: AllSectionsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-sections", component: AllSectionsComponent },
      { path: "view-section", component: ViewSectionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
