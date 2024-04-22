import { RegisterComponent } from './components/register/register.component';
import { Component } from '@angular/core';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'Login',loadComponent:()=>import('./components/login/login.component').then((obj)=>obj.LoginComponent)},
  {path:'Products',component:ProductsComponent, canActivate:[authGuard]},
  {path:'AddProduct',component:AddProductComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'About',component:AboutUsComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:'Vision'},
    {path:'Vision',component:VisionComponent},
    {path:'Values',component:ValuesComponent}
  ]},
  {path:'**',component:NotFoundComponent},
];
