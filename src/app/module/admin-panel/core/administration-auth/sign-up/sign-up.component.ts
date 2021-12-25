import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
import {ImageServiceService} from "../../../../../core/services/image-service.service";

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
  avatar='';

  constructor(private service:UserService,private localstorage:LocalStorageService,private router:Router, private imgService: ImageServiceService) {
    if(this.localstorage.get('adminToken')!=null){
      this.router.navigateByUrl('/admin_panel/dashBoard-admin').then(r => {

      });
    }
  }

  ngOnInit(): void {
  }

  signUp() {
    const {user_name,contact,email,password}=this.signUpForm.value //get form data 1st method  best practice
    this.service.signUp(
      user_name,contact,email,password,this.avatar                  //get form data 1st method  best practice
      /*this.signUpForm.get('user_name')?.value,
      this.signUpForm.get('contact')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value,
      this.avatar*/                                                 //get form data 2nd method
    ).subscribe(response=>{
      if(response.status){
        this.localstorage.add('adminToken',response.admin_token);
        this.router.navigateByUrl('/admin_panel/dashBoard-admin')
      }else {
        alert("Try again");
      }
    },error => {
      alert(error);
      return;
    });
  }

  upload(event: any) {
    this.imgService.singleUpload(event).subscribe((d)=>{
      this.avatar=d.url;
    },error => {
      console.log(error)
    })
  }

  uploadMultiple(event: any) {
    this.imgService.uploadMultiple(event).subscribe((d)=>{
      console.log(d);
    },error => {
      console.log(error)
    })
  }
}
