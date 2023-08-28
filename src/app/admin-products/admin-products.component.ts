import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{
  products1:any;
  showForm=false;
  name:string="";
  description:string="";
  image:string="";
  price:number=0;
  show=false;
  edit=false;
  add=false;
  update=false;
  title:string="Add New Product";
  constructor(public service:TestService){
    this.GetProducts();
  }
  GetProducts()
  {
    this.service.fetchProducts().subscribe(data=>{
      this.products1=data;
    });
  }
  CloseForm()
  {
    this.showForm=false;
    this.show=false;
    this.title="Add New Product"
  }
  OpenForm()
  {
    if(this.edit==true)
    {
      this.show=true;
      this.showForm=true;
    }
    else if(this.edit==false)
    {
      this.showForm=true;
      this.show=true;
    }
    
  }
  AddProduct()
  {
    this.CloseForm();
    let products={
        name:this.name,
        description:this.description,
        image:this.image,
        price:this.price
    }
    this.service.AddNewProduct(products).subscribe(res=>{
      this.GetProducts();
    });
  }
  EditForm()
  {
    this.title="Update Product Details";
    this.edit=true;
    this.add=false;
    this.update=true;
    this.OpenForm();
  }
  AddForm()
  {
    this.title="Add Product Details";
    this.add=true;
    this.edit=false;
    this.update=false;
    this.OpenForm();
  }
}
