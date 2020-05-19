import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


const routes: Routes = [
  {
    path: "",
    component: CustomersWrapperComponent,
    children: [
      { path: "all_customers", component: AllCustomersComponent },
      { path: "add_customer", component: AddCustomerComponent },
      { path: "view_customer", component: ViewCustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
