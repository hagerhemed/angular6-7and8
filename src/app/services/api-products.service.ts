import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
import { enviroment } from '../../enviroments/enviroments.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httClient:HttpClient) { }

  getAllProducts():Observable<Iproducts[]>{
    return this.httClient.get<Iproducts[]>(`http://localhost:3000/products`)

  }
  getProductById(id:number):Observable<Iproducts>{
    return this.httClient.get<Iproducts>(`http://localhost:3000/products/${id}`)

  }
  getProductsByCatId(catId:number):Observable<Iproducts[]>{
    return this.httClient.get<Iproducts[]>(`http://localhost:3000/products?catId=${catId}`)

  }
  addProduct(newPrd:Iproducts):Observable<Iproducts>{
  return this.httClient.post<Iproducts>(`http://localhost:3000/products`,JSON.stringify(newPrd));
  }
  deleteProductById(){}
  updateProductById(){}
}
