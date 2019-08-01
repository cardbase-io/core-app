import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // animation functions
// } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ //animation triggers
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'carbase.io';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
