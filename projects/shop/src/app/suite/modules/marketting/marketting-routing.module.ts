import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkettingWrapperComponent } from './marketting-wrapper/marketting-wrapper.component';
import { AllMarkettingComponent } from './all-marketting/all-marketting.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';


const routes: Routes = [
  {
    path: "", 
    component: MarkettingWrapperComponent,
    children: [
      { path: "", component: AllMarkettingComponent },
      { path: "all-marketting", component: AllMarkettingComponent },
      { path: "new-campaign", component: NewCampaignComponent },
      { path: "view-campaign", component: ViewCampaignComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkettingRoutingModule { }
