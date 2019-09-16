import { Component, OnInit } from '@angular/core';
import { Detail } from './detail.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { CustomizationService } from '../../customization.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authz/authentication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailCardsCollection: AngularFirestoreCollection<Detail>;
  detailCards: Observable<Detail[]>;

  parentDocumentId: string;
  currentUserId: string;

  constructor(public idea: CustomizationService,
              private route: ActivatedRoute,
              private db: AngularFirestore,
              private router: Router,
              private auth: AuthenticationService) {

    this.auth.user$.subscribe(user => this.currentUserId = user.uid);

    // get parentId param from url
    this.route.params.subscribe(res => {
      console.log(res);

      this.parentDocumentId = res.documentId;
    });


    this.detailCardsCollection = this.db.collection(`masterCards/${this.parentDocumentId}/detailCards`,
                                                  (ref) => ref.orderBy('defaultOrder', 'asc'));

    // we need meta data
    this.detailCards = this.detailCardsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Detail;
        data.documentId = a.payload.doc.id;
        return data;
      });
    }));

    // logging
    // tslint:disable-next-line:max-line-length
    // this.detailCards.subscribe(detailCards => detailCards.forEach(detailCard => console.log(detailCard.documentId, detailCard.cardContent)));
  }

  ngOnInit() { }

  /**
   * Default filtering capability w/ asc ordering
   *
   * @param value: default filter value
   */
  filter(value: string) {

    this.detailCardsCollection = this.db.collection(`masterCards/${this.parentDocumentId}/detailCards`,
                                                 (ref) => ref.where('filters.default', '==', value)
                                                                     .orderBy('defaultOrder', 'asc'));

    // we need meta data
    this.detailCards = this.detailCardsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Detail;
        data.documentId = a.payload.doc.id;
        return data;
      });
    }));

    // logging
    // tslint:disable-next-line:max-line-length
    // this.detailCards.subscribe(detailCards => detailCards.forEach(detailCard => console.log(detailCard.documentId, detailCard.cardContent)));
  }


  routeToPrimary(detailDocumentId: string) {

    // const navigateURL = `${environment.link.primary}/listening/${this.parentDocumentId}/${detailDocumentId}/${this.currentUserId}`;

    // document.location.href = navigateURL;
    // window.open(navigateURL, 'listening-app');

    // tslint:disable-next-line:max-line-length
    // this.router.navigateByUrl(navigateURL).then(e => e ? console.log('navigation to listening-app ok') :
    //                                                      console.log('navigation to listening-app nok'));
  }

  routeToAlternate(detailDocumentId: string) {

    // tslint:disable-next-line:max-line-length
    // const navigateURL = `${environment.link.alternate}/translating/${this.parentDocumentId}/${detailDocumentId}/${this.currentUserId}`;

    // document.location.href = navigateURL;
    // window.open(navigateURL, 'translating-app');

    // tslint:disable-next-line:max-line-length
    // this.router.navigateByUrl(navigateURL).then(e => e ? console.log('navigation to listening-app ok') :
    //                                                      console.log('navigation to listening-app nok'));
  }

  routeToSecondary(detailDocumentId: string) {

    // tslint:disable-next-line:max-line-length
    // const navigateURL = `${environment.link.secondary}/broadcasting/${this.parentDocumentId}/${detailDocumentId}/${this.currentUserId}`;

    // document.location.href = navigateURL;
    // window.open(navigateURL, 'broadcasting-app');

    // tslint:disable-next-line:max-line-length
    // this.router.navigateByUrl(navigateURL).then(e => e ? console.log('navigation to listening-app ok') :
    //
  }

}
