import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    user_name:new FormControl('',Validators.required),
    contact:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  constructor(private service:UserService,private localstorage:LocalStorageService,private router:Router) {
    if(this.localstorage.get('adminToken')!=null){
      this.router.navigateByUrl('/adminpanel/dashBoard-admin');
    }
  }

  ngOnInit(): void {
  }

  signUp() {
    this.service.signUp(
      this.signUpForm.get('user_name')?.value,
      this.signUpForm.get('contact')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value
    ).subscribe(response=>{
      if(response.status){
        this.localstorage.add('adminToken',response.admin_token);
        this.router.navigateByUrl('/adminpanel/dashBoard-admin')
      }else {
        alert("Try again");
      }
    },error => {
      alert(error);
      return;
    });
  }
}
