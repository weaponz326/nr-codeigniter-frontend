import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorsWrapperComponent } from './contractors-wrapper/contractors-wrapper.component';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { AddContractorComponent } from './add-contractor/add-contractor.component';
import { ViewContractorComponent } from './view-contractor/view-contractor.component';


const routes: Routes = [
  {
    path: "",
    component: ContractorsWrapperComponent,
    children: [
      { path: "", component: AllContractorsComponent },
      { path: "all-contractors", component: AllContractorsComponent },
      { path: "add-contractor", component: AddContractorComponent },
      { path: "view-contractor", component: ViewContractorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
