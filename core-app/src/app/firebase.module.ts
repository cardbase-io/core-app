import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';


// @NgModule({
//   declarations: [],
//   imports: [
//     // CommonModule
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireAuthModule
//   ]
// })
// export class FirebaseModule { }

@NgModule({
  imports: [ AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule],
  exports: [ AngularFireAuthModule ]
})
export class FirebaseModule { }
