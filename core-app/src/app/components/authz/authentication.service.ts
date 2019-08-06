import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //User's user document in firestore! And that will be shared across the app.
  user$: Observable<any>;
  displayName: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    //user-in-firebase-Authentication console !
    this.displayName = this.afAuth.authState.pipe(
      map(authState => {
        console.log(authState);

        authState != null ? authState.displayName : null;
      })
    );

    //user-in-firebase-Authentication w/ user-in-firestore record
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.displayName = of(user.displayName);

          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else
          return of(null);
      })
    );

  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    //TODO: if we can get phoneNumber from google, (after user-consent), then registration process becomes faster!
    //provider.addScope('prompt');
    provider.setCustomParameters({'prompt' : 'select_account'});

    //const credential = await this.afAuth.auth.signInWithPopup(provider);
    await this.afAuth.auth.signInWithPopup(provider).then(result => {
      console.log(result.user.toJSON());

      this.updateUserData(result.user);

    });

  }

  async facebookSignin() {
    // Creates the provider object.
    const provider = new auth.FacebookAuthProvider();

    // You can add additional scopes to the provider:
    provider.addScope('email');
    provider.addScope('user_friends');

    // Sign in with popup:
    this.afAuth.auth.signInWithPopup(provider)
      .then(function(result) {
              // The firebase.User instance:
              const user = result.user;
              // The Facebook firebase.auth.AuthCredential containing the Facebook
              // access token:
              const credential = result.credential;
    }, function(error) {
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      const email = error.email;

      // The provider's credential:
      const credential = error.credential;

      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      if (error.code === 'auth/account-exists-with-different-credential') {
        this.afAuth.auth.fetchSignInMethodsForEmail(email)
          .then(function(providers) {
          // The returned 'providers' is a list of the available providers
          // linked to the email address. Please refer to the guide for a more
          // complete explanation on how to recover from this error.
        });
      }
    });
  }

  async phoneSignin() {
    // const provider = new auth.PhoneAuthProvider();
    // const recaptchaVerifier = provider.
    // const credential = await this.afAuth.auth.signInWithPhoneNumber('+905369236120', );
    //
    // console.log('credential' + credential);

    //routerLink="/authz/verify"
  }

  async signOut() {
     await this.afAuth.auth.signOut().then(() => {
       //successful signOut
       console.log('signOut successful');

     }).catch(error => {
       console.log('signOut error occurred' + error.toString());
     });

     return this.router.navigate(['/']);
  }

  /**
   * Update or create User data in firestore
   *
   * @param uid
   * @param displayName
   * @param phoneNumber
   * @param email
   */
  private updateUserData ({ uid, displayName, phoneNumber, email } : User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    // TODO: user.model should be updated
    //  diff between google's data model and user.model regarding to custom fields
    const data = { uid, displayName, phoneNumber, email };

    //creates or updates if available w/ merge:true
    return userRef.set(data, {merge: true});
  }

}
