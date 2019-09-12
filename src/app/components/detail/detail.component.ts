import { Component, OnInit } from '@angular/core';
import { Detail } from './detail.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { CustomizationService } from '../../customization.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailCardsCollection: AngularFirestoreCollection<Detail>;
  detailCards: Observable<Detail[]>;

  parentDocumentId: string;

  constructor(public idea: CustomizationService,
              private route: ActivatedRoute,
              private db: AngularFirestore) {

    // get parentId param from url
    this.route.params.subscribe(res => {
      console.log(res);
      console.log(`parentDocumentId: ${res.documentId}`);

      this.parentDocumentId = res.documentId;
    });


    this.detailCardsCollection = this.db.collection(`masterCards/${this.parentDocumentId}/detailCards`,
                                                  (ref) => ref.orderBy('defaultOrder', 'asc'));
    this.detailCards = this.detailCardsCollection.valueChanges();

    // logging
    // this.detailCards.subscribe(detailCards => detailCards.forEach(detailCard => console.log(detailCard.filters)));
  }

  ngOnInit() {
  }

  /**
   * Default filtering capability w/ asc ordering
   *
   * @param value: default filter value
   */
  filter(value: string) {

    this.detailCardsCollection = this.db.collection(`masterCards/${this.parentDocumentId}/detailCards`,
                                                 (ref) => ref.where('filters.default', '==', value)
                                                             .orderBy('defaultOrder', 'asc'));
    this.detailCards = this.detailCardsCollection.valueChanges();

    // logging
    // this.detailCards.subscribe(detailCards => detailCards.forEach(detailCard => console.log(detailCard.defaultFilters)));

  }

}
