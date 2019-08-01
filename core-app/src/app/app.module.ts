import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { LoginComponent } from './components/authz/login/login.component';
import { SigninComponent } from './components/authz/signin/signin.component';
import { RegisterComponent } from './components/authz/register/register.component';
import { VerificationComponent } from './components/authz/verification/verification.component';
import { DetailComponent } from './components/detail/detail.component';
import { MasterComponent } from './components/master.component';
import { EligibilityComponent } from './components/authz/eligibility/eligibility.component';
import { VerifyComponent } from './components/authz/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    RegisterComponent,
    VerificationComponent,
    DetailComponent,
    MasterComponent,
    EligibilityComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
