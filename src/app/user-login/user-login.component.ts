import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(public router:Router){

  }
  Login(data:NgForm){
    if(data.value.user=="user1" && data.value.password=="#user123")
    {
        alert("Login success");
        return this.router.navigate(['/products']);
    }
    else
    {
        return alert("Invalid username or password");
    }
  }
}
