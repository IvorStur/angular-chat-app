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
  id: number;
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
  // postal code je pod address
  postalCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  allUsers: allUsers[] = [];
  singleUser: allUsers;
  testUser: Subject<allUsers> = new Subject<allUsers>();
  activeChat: Subject<allUsers> = new Subject<allUsers>();
  history: {
    firstName: allUsers['firstName'];
    lastName: allUsers['lastName'];
    conversation: string[];
  }[] = [];

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  beginChat(user: allUsers) {
    this.activeChat.next(user);
  }

  addSingleUser(user: allUsers) {
    this.singleUser = user;
    this.testUser.next(user);
  }

  getSingleUser() {
    return this.singleUser;
  }

  // getHistory() {
  //   return this.history;
  // }

  addUsers(user: allUsers) {
    this.allUsers.push(user);
  }

  getAllUsers() {
    return this.allUsers;
  }

  deleteAllUsers() {
    this.allUsers = [];
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

  constructor() {}
}
