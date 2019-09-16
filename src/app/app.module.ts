import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { RegisterComponent } from './components/authz/register/register.component';
import { VerificationComponent } from './components/authz/verification/verification.component';
import { DetailComponent } from './components/detail/detail.component';
import { MasterComponent } from './components/master.component';
import { VerifyComponent } from './components/authz/verify/verify.component';
import { AuthenticationComponent } from './components/authz/authentication.component';
import { PageNotFoundComponent } from './components/404/page-not-found.component';

import { FirebaseModule } from './firebase.module';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    VerificationComponent,
    DetailComponent,
    MasterComponent,
    VerifyComponent,
    AuthenticationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
