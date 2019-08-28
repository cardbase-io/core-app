import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MasterComponent } from '../master.component';
import { AuthenticationService } from './authentication.service';
import { CustomizationService } from '../../customization.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  environment = environment.www;

  constructor(public idea: CustomizationService,
              private bottomSheetRef: MatBottomSheetRef<MasterComponent>,
              public auth: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * below is called from html part, and delivers bottom-sheet handler
   * @param: MouseEvent to handle bottom-sheet handler
   */
  openLink(event: MouseEvent): void {

    this.bottomSheetRef.dismiss();
    event.preventDefault();

  }

}
