import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Master } from './master.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SigninComponent } from './authz/signin/signin.component';
import { LoginComponent } from './authz/login/login.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {

  masterCards: Master[];

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // TODO: init dummy data
    this.masterCards = [
    {
      id: 123,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/123'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    },
    {
      id: 124,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/124'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    }];

  }

  ngAfterViewInit() {
    this.openBottomSheet();
  }

  /**
   * opens login or signin pages as a dialog.
   */
  openBottomSheet(): void {
  // TODO: this has to implement a logic between login (cookie available) and signin (no-cookie) pages !
    console.log(Math.random() );
    Math.random() < 0.6 ?
      this.bottomSheet.open(SigninComponent) : this.bottomSheet.open(LoginComponent);
  }

}
