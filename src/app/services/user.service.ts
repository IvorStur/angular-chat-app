import { HttpClient } from '@angular/common/http';
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
  conversation: { messageUser: string; message: string; messageTime: string }[];
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
  lastHistory: History;
  historyListSubject: Subject<History[]> = new Subject<History[]>();
  clearRightPartChat: Subject<void> = new Subject<void>();
  historyDetails: Subject<void> = new Subject<void>();
  userChar: number = 0;
  userCharSubject: Subject<number> = new Subject<number>();
  resChar: number = 0;
  resCharSubject: Subject<number> = new Subject<number>();
  chatsStarted: number = 0;
  chatsStartedSubject: Subject<number> = new Subject<number>();
  loggedIn: Date;

  historyActiveUser: allUsers;

  private click = new Subject<number>();
  click$ = this.click.asObservable();

  postData(text: string) {
    const body = { text: text };
    return this.http.post('https://httpbin.org/post', body);
  }

  getLoggedInTime() {
    return new Date(Date.now() - this.loggedIn.getTime() - 3600000);
  }

  // in right part submit
  addUserChar(lenght: number) {
    this.userChar = this.userChar + lenght;
    this.userCharSubject.next(this.userChar);
  }
  // in getA service
  addResChar(lenght: number) {
    this.resChar = this.resChar + lenght;
  }

  getResChar() {
    return this.resChar;
  }

  detailEmit() {
    this.historyDetails.next();
  }

  beginChat(user: allUsers) {
    this.activeChat.next(user);
    this.clearRightPartChat.next();
  }

  historyMessage(messageUser: allUsers, message: string) {
    if (this.historyActiveUser == messageUser && this.historyList.length) {
      this.historyList[this.historyList.length - 1].conversation.push({
        messageUser: 'you',
        messageTime: new Date().toTimeString().split(' ')[0],
        message: message,
      });
    } else {
      this.chatsStarted++;
      this.chatsStartedSubject.next(this.chatsStarted);
      this.historyActiveUser = messageUser;
      let hist = new History();
      hist.user = messageUser;
      hist.conversation = [];

      hist.conversation.push({
        messageUser: 'you',
        messageTime: new Date().toTimeString().split(' ')[0],
        message: message,
      });
      // console.log('historyList pushed');
      // console.log(this.historyList);
      this.historyList.push(hist);
    }
    // console.log('historyList pushed async');
    // console.log(this.historyList);
    this.historyListSubject.next(this.historyList);

    this.postData(message).subscribe(
      (response) => {
        this.historyList[this.historyList.length - 1].conversation.push({
          messageUser: messageUser['username'],
          messageTime: new Date().toTimeString().split(' ')[0],
          message: this.getA(response['json']['text'].length).concat(
            String(response['origin'][response['origin'].length - 1])
          ),
        });
        // console.log('in post data');
        // console.log(this.historyList);
        // console.log(response['json']['text'].length);
        // console.log(response["origin"][response["origin"].length - 1]);
        // console.log(response);
      },
      (error) => {
        this.historyList[this.historyList.length - 1].conversation.push({
          messageUser: 'error',
          messageTime: new Date().toTimeString().split(' ')[0],
          message: error['message'],
        });
        console.error(error);
      }
    );
    // console.log('historyList pushed async');
    // console.log(this.historyList);
    this.historyListSubject.next(this.historyList);
    localStorage.setItem('history', JSON.stringify(this.historyList)); //in history
  }

  getA(num: number): string {
    this.addResChar(num + 1);
    return 'A'.repeat(num);
  }

  // addResponseToHistory() {

  // }

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

  // user: User;
  // allUsers: allUsers[] = [];
  // singleUser: allUsers;
  // testUser: Subject<allUsers> = new Subject<allUsers>();
  // activeChat: Subject<allUsers> = new Subject<allUsers>();
  // historyList: History[] = [];
  // lastHistory: History;
  // historyListSubject: Subject<History[]> = new Subject<History[]>();
  // clearRightPartChat: Subject<void> = new Subject<void>();
  // historyDetails: Subject<void> = new Subject<void>();
  // userChar: number = 0;
  // userCharSubject: Subject<number> = new Subject<number>();
  // resChar: number = 0;
  // resCharSubject: Subject<number> = new Subject<number>();
  // chatsStarted: number = 0;
  // chatsStartedSubject: Subject<number> = new Subject<number>();

  // historyActiveUser: allUsers;
  getAllUsers() {
    return this.allUsers;
  }

  deleteAllUsers() {
    this.allUsers = [];
  }

  addUser(user: User) {
    this.loggedIn = user.logInTime;
    this.user = user;
  }

  globalClick() {
    this.user.clicks++;
  }

  getUser() {
    return this.user;
  }

  constructor(private http: HttpClient) {}
}
