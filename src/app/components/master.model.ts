export class CardHeader {
  title: string;
  avatarURL: string;
}

export class location {
  latitude: number;
  longitude: number;
}

export class Master {
  documentId: string;           //uuid

  cardHeader: CardHeader;

  cardContent: {
    title: string;
    subTitle: string;
    imageSrcURL: string;
    imageAltText: string;
    routerLink: string
  };

  location?: location;
  createdAt?: string;

}