import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface User {
  fName: string;
  lName: string;
  logInTime: Date;
  clicks: number;
  char: number;
  chats: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  // clicked(click: number) {
  //   this.click.next(click++);
  // }


  addUser(user: User) {
    this.user = user;
  }

  globalClick() {
    this.user.clicks++;
  }

  getUser() {
    return this.user;
  }

  constructor() { }

}