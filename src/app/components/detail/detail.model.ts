export class Detail {
  sourceDocumentId: string;  // uuid from merchandise-db or other legacy
  parentDocumentId: string;  // uuid
  documentId: string;        // uuid

  cardContent: {
    title: string;
    headline: string;
    icon: string;
    tags: [];
    externalRouterLink: string;
  };

  date: string;               // timestamp
  defaultOrder: number;

  filters: {
    default?: Location;        // comes from tag[0]
    contentType?: string;      // comes from tag[1]
    segments?: [];             // comes from segmentation
    dayPartitioning?:string;   // morning/afternoon/evening: rule based
  }

}
