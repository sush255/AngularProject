import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { authGuard } from './auth.guard';
import { MenuMasterComponent } from './menu-master/menu-master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
   {
      path: '', 
      redirectTo: 'login', 
      pathMatch: 'full',
    },
   { 
    path:'login',
    component:LoginComponent
   },
  
   {
      path:'',
      component:LayoutComponent,
      canActivate:[authGuard],
      children:[
         {path:'dashboard',component:DashboardComponent},
         {path:'menuMaster',component:MenuMasterComponent},
         {path:'Users',component:UsersComponent}
      ]
   },
   {
      path:'register',
      component:RegisterComponent
   },
   { path: '**', redirectTo: '/login', pathMatch: 'full' }

];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
