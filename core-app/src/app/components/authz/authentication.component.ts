import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MasterComponent } from '../master.component';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  companyName = 'cardbase.io';

  constructor(private bottomSheetRef: MatBottomSheetRef<MasterComponent>,
              public auth: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * below is called from html part, and delivers bottom-sheet handler
   * @param event
   */
  openLink(event: MouseEvent): void {
    this.auth.googleSignin().then(result => console.log(result));

    this.bottomSheetRef.dismiss();
    event.preventDefault();

  }

}
