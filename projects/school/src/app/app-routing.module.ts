import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  },
  {
    path: "guest",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user-page/user-page.module").then(m => m.UserPageModule)
  },
  {
    path: "user-auth",
    loadChildren: () => import("projects/personal/src/app/user-auth/user-auth.module").then(m => m.UserAuthModule)
  },
  {
    path: "register",
    loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
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
