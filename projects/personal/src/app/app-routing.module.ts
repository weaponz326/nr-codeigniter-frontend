import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  },
  {
    path: "user-auth",
    loadChildren: () => import("./user-auth/user-auth.module").then(m => m.UserAuthModule)
  },
  {
    path: "guest",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  },
  {
    path: "suite",
    loadChildren: () => import("./suite/suite.module").then(m => m.SuiteModule)
  },
  {
    path: "**",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
