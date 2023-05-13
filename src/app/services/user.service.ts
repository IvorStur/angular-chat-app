import { Injectable } from '@angular/core';

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