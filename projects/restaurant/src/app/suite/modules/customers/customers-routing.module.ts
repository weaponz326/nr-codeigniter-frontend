import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


const routes: Routes = [
  {
    path: "",
    component: CustomersWrapperComponent,
    children: [
      { path: "", component: AllCustomersComponent },
      { path: "all-customers", component: AllCustomersComponent },
      { path: "new-customer", component: NewCustomerComponent },
      { path: "view-customer", component: ViewCustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
