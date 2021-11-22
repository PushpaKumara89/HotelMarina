import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GuestRegiserComponent} from "../../core_guest/guest-regiser/guest-regiser.component";
import {LocalStorageService} from "angular-2-local-storage";
import {GuestSignInComponent} from "../../core_guest/guest-sign-in/guest-sign-in.component";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit,DoCheck {
  guest_registered = false;
  guest_Not_registered = true;
  guest: any = [];

  constructor(private localstorage: LocalStorageService, public dialog: MatDialog) {
  }


  ngOnInit(): void {

  }
  ngDoCheck(): void {
    if (this.localstorage.get('gustToken') === null) {
      this.guest_registered = false;
      this.guest_Not_registered = true;
    } else {
      this.guest_registered = true;
      this.guest_Not_registered = false;
      this.guest = this.localstorage.get('gustToken');
    }
  }

  openRegister() {
    const dialogRef = this.dialog.open(GuestRegiserComponent, {
      height: 'auto',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logOut() {
    this.localstorage.remove('gustToken');
    this.localstorage.clearAll();
    this.guest_registered = false;
    this.guest_Not_registered = true;
  }

  openSignIn() {
    const dialogRef = this.dialog.open(GuestSignInComponent, {
      height: 'auto',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
