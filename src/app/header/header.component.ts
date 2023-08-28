import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private router:Router)
{

}
  Home(){
    return this.router.navigate(['/Home']);
  }
  Contact(){
    return this.router.navigate(['/Contact']);
  }
  Footer(){
    return this.router.navigate(['/CopyRight']);
  }
  Admin(){
    return this.router.navigate(['admin']);
  }
  User(){
    return this.router.navigate(['UserLogin']);
  }
}
