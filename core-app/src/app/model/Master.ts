export class Master {
  id: number;

  cardHeader: {title: string, avatarURL: string};

  cardContent: {title: string;
                subTitle: string;
                imageSrcURL: string;
                imageAltText: string};

  cardActions: {btnText: string, btnPostURL: string};
  // TODO: update model field names
}
