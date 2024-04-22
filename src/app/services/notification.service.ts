import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications:string[];

  constructor() {
    this.notifications=[
      'you have unread messages',
      'people reacting to your post',
      'hager sent you a friend request',
      "",
      'post shared successfully'
    ]
   }
   getNotifications():Observable<string>{
    // return from(this.notifications)
    return new Observable<string>((observer)=>{
      // observable.next()
      let counter=0
    let notificationInterval=  setInterval(()=>{
        if(counter==this.notifications.length){
          observer.complete()
        }

        if(this.notifications[counter]==""){
          observer.error()
        }
        observer.next(this.notifications[counter])
        counter++
      },2000);

      return {
        unsubscribe:()=>{
          clearInterval(notificationInterval)

        }
      }

    })
   }
}
