import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  },
  {
    path: "signup",
    loadChildren: () => import("./signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "**",
    loadChildren: () => import("./guest-page/guest-page.module").then(m => m.GuestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
