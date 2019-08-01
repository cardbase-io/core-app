import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { SigninComponent } from './components/authz/signin/signin.component';
import { RegisterComponent } from './components/authz/register/register.component';
import { LoginComponent } from './components/authz/login/login.component';
import { VerificationComponent } from './components/authz/verification/verification.component';
import { MasterComponent } from './components/master.component';
import { EligibilityComponent } from './components/authz/eligibility/eligibility.component';
import { VerifyComponent } from './components/authz/verify/verify.component';

const routes: Routes = [
  { path: 'index', component: MasterComponent,  data: { title: 'Master', animation: 'masterPage' } },
  { path: 'detail/:id', component: DetailComponent,  data: { title: 'Detail', animation: 'detailPage' } },
  { path: 'detail', component: DetailComponent,  data: { title: 'Detail', animation: 'detailPage' } },
  { path: 'authz/signin', component: SigninComponent,  data: { title: 'Sign in' } },
  { path: 'authz/login', component: LoginComponent,  data: { title: 'Login' } },
  { path: 'authz/verify', component: VerifyComponent,  data: { title: 'Verify' } },
  { path: 'authz/verification', component: VerificationComponent,  data: { title: 'Verification' } },
  { path: 'authz/register', component: RegisterComponent,  data: { title: 'Register' } },
  { path: 'eligibility', component: EligibilityComponent,  data: { title: 'Eligibility' } },
  // { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
