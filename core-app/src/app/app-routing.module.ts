import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { SigninComponent } from './components/authz/signin/signin.component';
import { RegisterComponent } from './components/authz/register/register.component';
import { LoginComponent } from './components/authz/login/login.component';
import { VerificationComponent } from './components/authz/verification/verification.component';
import { MasterComponent } from './components/master.component';


const routes: Routes = [
  { path: 'index', component: MasterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'authz/signin', component: SigninComponent },
  { path: 'authz/login', component: LoginComponent },
  { path: 'authz/register', component: RegisterComponent },
  { path: 'authz/verification', component: VerificationComponent },
  // { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
