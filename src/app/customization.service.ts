import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {
  productName = 'cardbase';
  masterTitle = 'Master';
  detailTitle = 'Detail';

  //on detailPage, round circle name
  defaultFiltering = ['lorem', 'ipsum'];

  constructor() {}
}
