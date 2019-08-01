import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MasterComponent } from '../../master.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  companyName = 'cardbase.io';
  // TODO: get user name dynamically
  buttonText = 'Continue as ....';

  constructor(private bottomSheetRef: MatBottomSheetRef<MasterComponent>) { }

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
