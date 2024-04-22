import { Iproducts } from './../../models/iproducts';
import { Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {Icategory} from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Input} from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges , OnInit{
   products:Iproducts[]=[] as Iproducts[];
   categories:Icategory[];
  totalOrderPrice:number = 0;
  filteredProducts:Iproducts[];
@Output() onTotalPriceChanged:EventEmitter<number>;
@Input() recievedCatId:number=0;


  constructor(private _ApiProductsService:ApiProductsService,
    private router:Router){
    // this.products =this._StaticProductsServices.getAllProducts()
    this.filteredProducts=this.products;
      this.onTotalPriceChanged=new EventEmitter<number>();

  this.categories=[
    {id:1,name:"Laptop"},
    {id:2,name:"Mobile"},
    {id:3,name:"Tablate"},
  ]
  // this.filteredProducts=this.products
}
  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products=res;
        this.filteredProducts=this.products;
      },
      error:(err) =>{
        console.log(err)
      }
    })

  }
  ngOnChanges(){
    this._ApiProductsService.getProductsByCatId(this.recievedCatId).subscribe({
      next:(res)=>{
        this.filteredProducts=res;
      },
      error:(err) =>{
        console.log(err)
      }
    })
    // this.filterProducts()
    // this.filteredProducts=this._StaticProductsServices.getProductsByCatId(this.recievedCatId)
  }
  buy(count:string ,price:number){
    this.totalOrderPrice+=+count*price;
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
  }

  decreaseQuantity(product: Iproducts) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }



  change(){
    // this.selectedCatId
  }
  trackItem(index:number,item:Iproducts){
    return item.id

  }
  navigateToDetails(id:number){
    this.router.navigateByUrl(`/Details/${id}`)

  }
  // filterProducts(){
  //   if(this.recievedCatId ==0){
  //     this.filteredProducts=this.products;
  //   }else{
  //     this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)

  //   }
  // }

}








