// lazy loads between main page, login, signup, and portal pages
// login and signup modules are imported from personal project

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule)
  },
  {
    path: "signup",
    loadChildren: () => import("projects/personal/src/app/signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: "login",
    loadChildren: () => import("projects/personal/src/app/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "**",
    loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
