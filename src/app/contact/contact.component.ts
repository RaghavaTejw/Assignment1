import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  emailAddress:string="";
  Address:string="";
  Mobile:string="";
  Gender:string="";
  Contact(contact:NgForm){
    console.log(contact.value);
  }
}
