import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductComponent } from './product/product.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'Contact',component:ContactComponent},
  {path:'CopyRight',component:FooterComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'products',component:ProductComponent},
  {path:'DisplayProducts',component:AdminProductsComponent},
  {path:'UserLogin',component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
