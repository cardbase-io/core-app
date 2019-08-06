
export class CardActions {
  btnText: string;
  btnPostURL: string;
  routerLink: string;
}

export class Detail{
  parentId: number;
  id: number;

  cardContent: {
    title: string;
    headline: string;
    icon: string;
    tags: string;
    externalRouterLink: string
  };

  // TODO: cardActions must be and array!
  cardActions: CardActions[];

  // TODO: update model field names
}
