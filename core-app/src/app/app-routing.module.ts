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
import { AuthenticationComponent } from './components/authz/authentication.component';

const routes: Routes = [
  { path: '', component: MasterComponent,  data: { title: 'Master', animation: 'right' } },
  { path: 'detail/:id', component: DetailComponent,  data: { title: 'Detail', animation: 'left' } },
  { path: 'detail', component: DetailComponent,  data: { title: 'Detail', animation: 'detailPage' } },
  { path: 'authz/signin', component: AuthenticationComponent,  data: { title: 'Sign in' } },
  { path: 'authz/verify', component: VerifyComponent,  data: { title: 'Verify', animation: 'left' } },
  { path: 'authz/verification', component: VerificationComponent,  data: { title: 'Verification', animation: 'left' } },
  { path: 'authz/register', component: RegisterComponent,  data: { title: 'Register', animation: 'left' } },
  { path: 'eligibility', component: EligibilityComponent,  data: { title: 'Eligibility', animation: 'left' } },
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
