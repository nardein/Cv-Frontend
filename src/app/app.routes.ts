import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', loadComponent:()=> import ('./components/home/home.component').then(c =>c.HomeComponent)},
  {path: 'login', loadComponent:()=> import ('./components/login/login.component').then(c=> c.LoginComponent) },
  {path: 'profile', loadComponent:()=> import ('./components/profile/profile.component').then(c => c.ProfileComponent)},
  {path: 'candidati', loadComponent:()=> import('./components/candidati/candidati.component').then(c=>c.CandidatiComponent)},
  {path: 'register', loadComponent:()=> import('./components/register/register.component').then(c=>c.RegisterComponent)}
];
