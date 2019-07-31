export class CardHeader {
  title: string;
  avatarURL: string;
}

export class CardActions {
  btnText: string;
  btnPostURL: string;
  routerLink: string;
}


export class Master {
  id: number;

  cardHeader: CardHeader;

  cardContent: {title: string;
                subTitle: string;
                imageSrcURL: string;
                imageAltText: string;
                routerLink: string};

  // TODO: cardActions must be and array!
  cardActions: CardActions[];

  // TODO: update model field names
}
