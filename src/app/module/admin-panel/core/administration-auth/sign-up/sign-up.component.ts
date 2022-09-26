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
  btn =true;
  previewImg:any ="https://library.kissclipart.com/20180904/ujq/kissclipart-businessperson-clipart-businessperson-leadership-c-131c1d56d75dc3d9.png"
  signUpForm = new FormGroup({
    user_name:new FormControl('',Validators.required),
    contact:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  avatar= {}

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
    this.imgService.singleUpload(this.avatar).subscribe(url=>{
      this.service.signUp(
        user_name,contact,email,password,url                  //get form data 1st method  best practice
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
    },error => {
      console.log(error)
    });

  }

  imageSelect(event: any) {
    this.avatar=event;
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (rst:any)=>{
        this.previewImg=rst.target.result;
      }
    }
  }



  btnTriggering(id: string) {
    let btn = document.getElementById(id) as HTMLElement;
    btn.click()

  }
}
