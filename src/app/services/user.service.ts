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

interface allUsers {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  birthdate: string;
  image: string;
  eyeColor: string;
  university: string;
  macAddress: string;
  ip: string;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  allUsers: allUsers[] = [];

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  // clicked(click: number) {
  //   this.click.next(click++);
  // }

  addUsers(user: allUsers) {
    this.allUsers.push(user);
  }

  getAllUsers() {
    return this.allUsers;
  }



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