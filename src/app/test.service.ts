import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService{
  products:any;
  constructor(private http:HttpClient) { }

  mobiles:Mobiles[]=[
    {
      name:"Samsung",
      description:"Samsung F21 FE with 6GB RAM and 845 Snapdragon Chipset",
      image:"../assets/samsung.jpg",
      price:28000
    },
    {
      name:"Vivo",
      description:"Vivo v20 pro with 6GB RAM and 675 Snapdragon Chipset",
      image:"../assets/Vivo.jpg",
      price:29000
    },
    {
      name:"Redmi",
      description:"Redmi note 12 pro with 8GB RAM and 675 Snapdragon Chipset",
      image:"../assets/redmi.jpg",
      price:22000
    },
    {
      name:"Realme",
      description:"Realme GT NEO 3T with 8GB RAM and 888 Snapdragon Chipset",
      image:"../assets/realme.jpg",
      price:25000
    },
    {
      name:"oneplus",
      description:"Oneplus 11R with 8GB RAM and 888 Snapdragon Chipset",
      image:"../assets/oneplus.jpg",
      price:38000
    },
    {
      name:"Iphone",
      description:"Iphone 14 pro with A14 Bionic Chip",
      image:"../assets/iphone.jpg",
      price:140000
    }
];

GetProducts(){
  return this.mobiles;
}
fetchProducts(){
  return this.http.get('http://localhost:3000/mobiles');
}
AddNewProduct(data:any):Observable<any>
{
  return this.http.post('http://localhost:3000/mobiles',data.value);
}
}
class Mobiles
{
  name:string="";
  description:string="";
  image:string="";
  price:number=0;
}

