import { Component, OnInit } from '@angular/core';
import { Detail } from './detail.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MasterComponent} from '../master.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailCardsCollection: AngularFirestoreCollection<Detail>;
  detailCards: Observable<Detail[]>;

  parentDocumentId: string;

  constructor(private route: ActivatedRoute,
              private db: AngularFirestore) {

    //get parentId param from url
    this.route.params.subscribe(res => {
      console.log(res);
      console.log(`parentDocumentId: ${res.documentId}`);

      this.parentDocumentId = res.documentId;
    });

    // TODO: init dummy data
    // this.parent.masterCards.subscribe();
    this.detailCardsCollection = this.db.collection(`masterCards/${this.parentDocumentId}/detailCards`);
    this.detailCards = this.detailCardsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
