import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
products:Iproducts[]
  constructor() {
    this.products = [
      {id:100,name:"Dell laptop",price:50000,quantity:3,imgUrl:'https://fakeimg.pl/300',catId:1},
      {id:99,name:"lenovo laptop",price:80000,quantity:0,imgUrl:'https://fakeimg.pl/300',catId:1},
      {id:98,name:"samsung laptop",price:60000,quantity:5,imgUrl:'https://fakeimg.pl/300',catId:2},
      {id:97,name:"oop",price:70000,quantity:1,imgUrl:'https://fakeimg.pl/300',catId:2},
      {id:96,name:"HP laptop",price:20000,quantity:3,imgUrl:'https://fakeimg.pl/300',catId:3},
      {id:95,name:"Iphone",price:90000,quantity:7,imgUrl:'https://fakeimg.pl/300',catId:3}
    ]
   }
   getAllProducts():Iproducts[]{
    return this.products
   }
   getProductById(id:number):Iproducts | null{
    let foundedPrd =  this .products.find((prd)=>prd.id == id);
    return foundedPrd ? foundedPrd : null;
   }
   getProductsByCatId(catId:number):Iproducts[]{
    if(catId==0){
      return this.products
    }else{
      return this.products.filter((prd)=>prd.catId==catId)

    }
   }
   mapProductsToIds():number[]{
   return this.products.map((prd)=>prd.id)
   }
  }
