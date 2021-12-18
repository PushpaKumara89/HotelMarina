import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  ;

  constructor(private service: UserService, private localstorage: LocalStorageService, private router: Router) {
    if (this.localstorage.get('adminToken') != null) {
      this.router.navigateByUrl('/admin_panel/dashBoard-admin').then(r => {
        alert(r);
      });
    }
  }

  ngOnInit(): void {
  }


  login() {
    this.service.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response => {
      if (response.status) {
        this.localstorage.add('adminToken', response.admin_token)
        this.router.navigateByUrl('/admin_panel/dashBoard-admin').then(r => {
          alert(r);
        })
      } else {
        alert("Try again");
      }
    }, error => {
      alert(error);
      return;
    });
  }

}
