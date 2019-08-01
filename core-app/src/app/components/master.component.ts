import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Master} from '../model/Master';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  title = 'Master';

  masterCards: Master[];

  constructor() { }

  ngOnInit() {
    // TODO: init dummy data
    this.masterCards = [{
      id: 123,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/c7af25/fff',
                    imageAltText: 'hint',
                    routerLink: '/detail/123'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    },
    {
      id: 124,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/c7af25/fff',
                    imageAltText: 'hint',
                    routerLink: '/detail/124'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    }];

  }

}
