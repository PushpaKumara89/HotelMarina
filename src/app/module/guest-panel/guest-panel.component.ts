import {Component, OnInit} from '@angular/core';
import {BookingDataSharesService} from "../../share/shares_servises/booking-data-shares.service";

@Component({
  selector: 'app-guest-panel',
  templateUrl: './guest-panel.component.html',
  styleUrls: ['./guest-panel.component.scss']
})
export class GuestPanelComponent implements OnInit {


  constructor() {}


  ngOnInit(): void {
  }

}
