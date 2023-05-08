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
          this.loggedUser = {
            fName: this.fname,
            lName: this.lName,
            logInTime: new Date(),
            clicks: 0,
            char: 0,
            chats: 0
          };

          this.userService.addUser(this.loggedUser)

          localStorage.setItem('logged', 'true');
          this.router.navigate(['two', 365]);
        }
        
      }
    });

    
  }
}
