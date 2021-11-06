import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestRegisterService} from "../servises/guest-register.service";
import {LocalStorageService} from "angular-2-local-storage";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-guest-sign-in',
  templateUrl: './guest-sign-in.component.html',
  styleUrls: ['./guest-sign-in.component.scss']
})
export class GuestSignInComponent implements OnInit {
  guestSignInForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
  });

  constructor(private guestService:GuestRegisterService ,private localstorage:LocalStorageService,dialogRef: MatDialogRef<GuestSignInComponent>) { }

  ngOnInit(): void {
  }

  signIn() {
    this.guestService.signIn(
      this.guestSignInForm.get('email')?.value,
      this.guestSignInForm.get('password')?.value
    ).subscribe(response=>{

      if(response.status){
        this.localstorage.add('gustToken',response.guest);
      }else {
        alert("Try again");
      }

    },error => {
      alert(error);
    })
  }

}
