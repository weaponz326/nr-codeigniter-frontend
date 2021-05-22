import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YearWrapperComponent } from './year-wrapper/year-wrapper.component';
import { AllYearsComponent } from './all-years/all-years.component';
import { AddYearComponent } from './add-year/add-year.component';
import { ViewYearComponent } from './view-year/view-year.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: YearWrapperComponent,
    children: [
      { path: "", component: AllYearsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-years", component: AllYearsComponent },
      { path: "add-year", component: AddYearComponent },
      { path: "view-year", component: ViewYearComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearRoutingModule { }
