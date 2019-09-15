export class Location {
  latitude: number;
  longitude: number;
}

export class Master {
  sourceDocumentId: string;     // uuid
  documentId: string;           // uuid

  cardHeader: {
    title: string;
    avatarURL: string;
  };

  cardContent: {
    title: string;
    subTitle: string;
    imageSrcURL: string;
    imageAltText: string;
    routerLink: string
  };

  filters: {
    default?: Location;
    locationName?: string;      // subTitle
  };

}
