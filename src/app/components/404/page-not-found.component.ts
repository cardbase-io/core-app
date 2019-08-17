import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../../customization.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public idea: CustomizationService) { }

  ngOnInit() {
  }

}
