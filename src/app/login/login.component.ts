import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

interface User {
  fName: string;
  lName: string;
  logInTime: Date;
  clicks: number;
  char: number;
  chats: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  touch = new EventEmitter();

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  ngOnInit() {}

  lName: string;
  fname: string;
  loggedUser: User;

  formSubmit() {
    this.http.get('https://dummyjson.com/users').subscribe(res => {
      // Marcel Jones
      for (const user of res["users"]) {

        if (user.firstName == this.fname && user.lastName == this.lName) {
          this.loggedUser.fName = this.fname;
          this.loggedUser.lName = this.lName;
          this.loggedUser.logInTime = new Date();
          this.loggedUser.clicks = 0;
          this.loggedUser.char = 0;
          this.loggedUser.chats = 0;

          this.userService.addUser(this.loggedUser)

          localStorage.setItem('logged', 'true');
          this.router.navigate(['two', 365]);
        }
        
      }
    });

    
  }
}
