import { CommonModule } from '@angular/common';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { languageAction } from '../../store/language/language.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged!:boolean;
  counter$:Observable<number>
  language$:Observable<string>
  currentlang!:string
  
  constructor(private userAuthSer:UserAuthService,
              private store:Store<{counter:number,language:string}>){


                this.counter$=this.store.select('counter')
                this.language$=this.store.select('language')
                this.language$.subscribe((val)=>{
                  this.currentlang=val

                })
      
  }
  ngOnInit(): void {
  //  this.isUserLogged=this.userAuthSer.getUserLogged()
  this.userAuthSer.getAuthSubject().subscribe({
    next:(status)=>{
      this.isUserLogged=status
    }
  })
  }
  // constructor(private _StaticProductsServices: StaticProductsService){}
  

  changeLang(){
    this.store.dispatch(languageAction({lang:(this.currentlang=="en")?'ar':'en'}))
  }
}
