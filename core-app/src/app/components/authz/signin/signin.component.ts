import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MasterComponent } from '../../master.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  companyName = 'cardbase.io';
  buttonText = 'Sign in with phone';

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
