import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {ProductCardDirective} from './directives/product-card.directive';
import {EgyptianNationalIdPipe} from './pipes/egyptian-national-id.pipe'
import { OrderComponent } from './components/order/order.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,OrderComponent,FooterComponent,ProductCardDirective,EgyptianNationalIdPipe,RouterOutlet,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerceApp';
  language$:Observable<string>
  dir:string="ltr"
  constructor(private store:Store<{language:string}>){
    this.language$=this.store.select("language")

    this.language$.subscribe((lang)=>{
      this.dir=(lang=="en")?'ltr':'rtl'
    })
  }
}
