export class CardHeader {
  title: string;
  avatarURL: string;
}

export class Location {
  latitude: number;
  longitude: number;
}

export class Master {
  documentId: string;           // uuid

  cardHeader: CardHeader;

  cardContent: {
    title: string;
    subTitle: string;
    imageSrcURL: string;
    imageAltText: string;
    routerLink: string
  };

  location?: Location;
  createdAt?: string;

}
