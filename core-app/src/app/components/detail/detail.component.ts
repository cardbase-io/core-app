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

    //get parentId param from url
    this.route.params.subscribe(res => {
      console.log(`parentDocumentId: ${res.documentId}`);
    });

    // TODO: init dummy data
    this.detailCards = [
      {
        parentDocumentId: 123,
        documentId: 1,

        cardContent: {
          title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/1'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 2,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/2'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 3,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/3'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 4,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • amet',
          externalRouterLink: 'listening-app/4'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 5,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/5'
        }
      },
      {
        documentId: 123,
        parentDocumentId: 6,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • sit',
          externalRouterLink: 'listening-app/6'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 7,

        cardContent: {
          title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/7'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 8,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum • dolor',
          externalRouterLink: 'listening-app/8'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 9,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/9'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 10,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/10'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 11,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: '',
          tags: 'lorem • ipsum',
          externalRouterLink: 'listening-app/11'
        }
      },
      {
        parentDocumentId: 123,
        documentId: 12,

        cardContent: {
          title: 'Lorem ipsum dolor sit amet.',
          headline: '',
          icon: 'lock',
          tags: 'lorem • ipsum • sit',
          externalRouterLink: 'listening-app/12'
        }
      }
    ];
  }

  ngOnInit() {
  }

}
