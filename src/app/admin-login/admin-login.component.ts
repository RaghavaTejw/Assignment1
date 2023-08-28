import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(public router:Router){

  }
  Login(data:NgForm){
    if(data.value.user=="raghava" && data.value.password=="#raghava")
    {
      alert("login success");
      return this.router.navigate(['/DisplayProducts']);
    }
   else{
    return alert("Invalid username or password");
   }
  }
}
