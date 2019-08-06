import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';



@NgModule({
  imports: [ AngularFireModule.initializeApp(environment.firebase),
             AngularFireAuthModule,
             AngularFirestoreModule],
  exports: [ AngularFireAuthModule, AngularFirestoreModule ]
})
export class FirebaseModule { }
