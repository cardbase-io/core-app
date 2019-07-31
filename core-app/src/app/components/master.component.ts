import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Master} from '../model/Master';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  title = 'Master';

  master: Master[];

  constructor() { }

  ngOnInit() {
    // TODO: init dummy data
    this.master = [{
      id: 123,
      cardContent: {title: 'location',
                    subTitle: 'eventName',
                    imageSrcURL: 'https://dummyimage.com/600x400/c7af25/fff',
                    imageAltText: 'hint'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: {btnText: '', btnPostURL: ''}
    },
    {
      id: 123,
      cardContent: {title: 'location',
                    subTitle: 'eventName',
                    imageSrcURL: 'https://dummyimage.com/600x400/c7af25/fff',
                    imageAltText: 'hint'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: {btnText: '', btnPostURL: ''}
    }];

  }

}
