import { NONE_TYPE } from '@angular/compiler';
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

class History {
  user: allUsers;
  conversation: { messageUser: string; message: string }[];
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
  historyList: History[] = [];
  historyActiveUser: allUsers;

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  beginChat(user: allUsers) {
    this.activeChat.next(user);
  }

  historyMessage(messageUser: allUsers, message: string) {
    try {
      this.historyActiveUser;
    } catch {
      this.historyActiveUser = messageUser;
      let hist = new History();
      hist.user = messageUser;
      hist.conversation = [];

      hist.conversation.push({
        messageUser: messageUser['username'],
        message: message,
      });
      this.historyList.push(hist);
    }
    if (this.historyActiveUser == messageUser) {
      this.historyList[this.historyList.length - 1].conversation.push({
        messageUser: messageUser['username'],
        message: message,
      });
    } else {
      this.historyActiveUser = messageUser;
      let hist = new History();
      hist.user = messageUser;
      hist.conversation = [];

      hist.conversation.push({
        messageUser: messageUser['username'],
        message: message,
      });
      this.historyList.push(hist);
    }
    console.log(this.historyList);
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
