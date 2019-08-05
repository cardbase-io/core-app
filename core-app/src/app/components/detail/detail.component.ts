import { Component, OnInit } from '@angular/core';
import { Detail } from './detail.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailCards: Detail[];

  constructor(private route: ActivatedRoute) {

    //get id param
    this.route.params.subscribe(res => {
      console.log(`id: ${res.id}`);
    });

    // TODO: init dummy data
    this.detailCards = [
      {
        parentId: 123,
        id: 1,

        cardContent: {
          title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/1'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 2,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/2'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 3,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/3'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 4,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/4'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 5,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/5'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 6,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • sit',
          externalRouterLink: 'listening-app/6'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 7,

        cardContent: {
          title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/7'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 8,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/8'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 9,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/9'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 10,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/10'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 11,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/11'
        },
        cardActions: []
      },
      {
        parentId: 123,
        id: 12,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • sit',
          externalRouterLink: 'listening-app/12'
        },
        cardActions: []
      }
    ];
  }

  ngOnInit() {
  }

}
