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
  firstName: string;
  lastName: string;
  conversation: {username: string, message: string}[];
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
  historyActiveUser: string;
  

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  beginChat(user: allUsers) {
    this.activeChat.next(user);
  }

  historyMessage(firstName: string, lastName: string, username: string, message: string) {
    if (this.historyActiveUser == firstName + lastName) {
      
      this.historyList[this.historyList.length - 1].conversation.push({username, message})
    }
    else {
      this.historyActiveUser = firstName + lastName
      let hist = new History();
      hist.firstName = firstName
      hist.lastName = lastName
      hist.conversation.push({username, message})
      this.historyList.push(hist)

    }
    
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
