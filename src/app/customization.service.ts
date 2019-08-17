import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {
  productName = 'cardbaseio';
  masterTitle = 'Master';
  detailTitle = 'Detail';

  constructor() {}
}
