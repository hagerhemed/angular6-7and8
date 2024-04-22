import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproducts } from '../../models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories:Icategory[];
  newProduct:Iproducts={} as Iproducts
  constructor(private _ApiProductsService:ApiProductsService,
    private router:Router){
    this.categories=
    [
      {id:1,name:"Laptop"},
      {id:2,name:"Mobile"},
      {id:3,name:"Tablate"},
    ]}
    addNewProduct(){
      this._ApiProductsService.addProduct(this.newProduct).subscribe({
        next:()=>{
          alert('Done');
           this.router.navigateByUrl('/Products')
        },
        error:(err)=>{
          console.log(err)
        }
      })

    }

  }

