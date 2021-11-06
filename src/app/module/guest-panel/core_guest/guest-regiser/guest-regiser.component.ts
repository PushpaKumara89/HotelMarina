import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestRegisterService} from "../servises/guest-register.service";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-guest-regiser',
  templateUrl: './guest-regiser.component.html',
  styleUrls: ['./guest-regiser.component.scss']
})
export class GuestRegiserComponent implements OnInit {
  guestRegisterForm=new FormGroup({
    name:new FormControl('',Validators.required),
    contact_number:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
  });

  constructor(private guestService:GuestRegisterService ,private localstorage:LocalStorageService,dialogRef: MatDialogRef<GuestRegiserComponent>) { }

  ngOnInit(): void {
  }

  register() {
    this.guestService.register(
      this.guestRegisterForm.get('name')?.value,
      this.guestRegisterForm.get('contact_number')?.value,
      this.guestRegisterForm.get('address')?.value,
      this.guestRegisterForm.get('email')?.value,
      this.guestRegisterForm.get('password')?.value
    ).subscribe(response=>{

      if(response.status){
        this.localstorage.add('gustToken',response.guest);
      }else {
        alert("Try again");
      }

    },error => {
      alert("Try again");
    })
  }
}
