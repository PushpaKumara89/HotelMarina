import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navBack() {
    this.route.navigateByUrl('/guest_panel/available-rooms/hotel-details').then(r => {
    })
  }
}
