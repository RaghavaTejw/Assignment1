import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent 
{
  products:any;
  constructor(public service:TestService){
    service.fetchProducts().subscribe(data=>{
      this.products=data;
    })
  }
  

}
 
  