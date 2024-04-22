import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable, Subscription, filter,map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
  subscribtion!:Subscription;
  counter:Observable<number>
  count!:number
  constructor(private _NotificationSer:NotificationService,private store:Store<{counter:number}>){
    this.counter=this.store.select("counter")
    this.counter.subscribe((newVal)=>{
      this.count=newVal
    })

  }
  ngOnInit(): void {
    // this._NotificationSer.getNotifications().subscribe((notification)=>{
    //   console.log(notification)
    // },(error)=>{
    //   console.log(`--------${error}----------`)
    // })
   this.subscribtion= this._NotificationSer.getNotifications().pipe(
      map((msg)=>`${msg} Hager`),
      filter((msg)=>msg.startsWith('h')),
    ).subscribe({
      next:(notification)=>{
        console.log(notification)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("notification completed successfully")
      }

    })

    this.subscribtion=this._NotificationSer.getNotifications().subscribe({

    })
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()

  }

}
