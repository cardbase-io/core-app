import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Master } from './master.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticationComponent } from './authz/authentication.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CustomizationService } from '../customization.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {

  masterCardsCollection: AngularFirestoreCollection<Master>;
  masterCards: Observable<Master[]>;

  currentDocumentId: string;

  constructor(public idea: CustomizationService,
              private bottomSheet: MatBottomSheet,
              private router: Router,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore) { }

  ngOnInit() {

    this.masterCardsCollection = this.db.collection('masterCards');
    this.masterCards = this.masterCardsCollection.valueChanges({idField: 'documentId'});

  }

  /**
   * onFirstLoad (not logged yet), show
   * if users backs from another page, don't show (already logged)
   */
  ngAfterViewInit() {

    if (!this.afAuth.auth.currentUser) {
      this.openBottomSheet();
    }
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

  setCurrent(documentId: string) {
    this.currentDocumentId = documentId;

    console.log(documentId);
  }
}
