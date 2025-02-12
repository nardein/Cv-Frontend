import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', loadComponent:()=> import ('./home/home.component').then(c =>c.HomeComponent)},
  {path: 'login', loadComponent:()=> import ('./login/login.component').then(c=> c.LoginComponent) }
];
