import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MasterComponent } from '../master.component';
import { AuthenticationService } from './authentication.service';
import {CustomizationService} from '../../customization.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(public idea: CustomizationService,
              private bottomSheetRef: MatBottomSheetRef<MasterComponent>,
              public auth: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * below is called from html part, and delivers bottom-sheet handler
   * @param event
   */
  openLink(event: MouseEvent): void {

    this.bottomSheetRef.dismiss();
    event.preventDefault();

  }

}
