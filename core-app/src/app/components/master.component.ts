import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Master } from './master.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticationComponent } from './authz/authentication.component';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {
  title = 'Home';
  masterCards: Master[];

  constructor(private bottomSheet: MatBottomSheet,
              private router: Router,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.masterCards = [
    {
      id: 123,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/123'},
      cardHeader: {title: '', avatarURL: ''},
      location: {latitude: 30, longitude: 32}
    },
    {
      id: 124,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/124'},
      cardHeader: {title: '', avatarURL: ''}
    }];

  }

  /**
   * onFirstLoad (not logged yet), show
   * if users backs from another page, don't show (already logged)
   */
  ngAfterViewInit() {

    if (!this.afAuth.auth.currentUser)
      this.openBottomSheet();
  }

  /**
   * opens authentication.component as a bottom sheet (dialog),
   * and inside this, login or signin logic are handled !
   *
   * Once you pressed login or continued-as, you should not see bottomSheet anymore. Esp. after back navigation
   */
  openBottomSheet(): void {

      this.bottomSheet.open(AuthenticationComponent);
  }

}
