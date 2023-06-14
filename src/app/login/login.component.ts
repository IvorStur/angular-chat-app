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

// interface allUsers {
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
//   birthdate: string;
//   image: string;
//   eyeColor: string;
//   university: string;
//   macAddress: string;
//   ip: string;
//   city: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  touch = new EventEmitter();
  // resChar: number;

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {
    userService.deleteAllUsers();
    // window.location.reload();
  }

  ngOnInit() {
    // this.resChar = this.userService.getResChar();
    this.loggedUser = null;
    this.allUser = null;
  }

  lName: string;
  fname: string;
  loggedUser: User;
  allUser: UserService["singleUser"];


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
        
        } else {
          this.allUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            birthdate: user.birthDate,
            image: user.image,
            eyeColor: user.eyeColor,
            university: user.university,
            macAddress: user.macAddress,
            ip: user.ip,
            city: user.address.city,
            postalCode: user.address.postalCode
        }
        this.userService.addUsers(this.allUser);
        };



      }
      if (this.loggedUser) {
        this.router.navigate(['two', 365]);
      }
        
      
    });

    
  }
}
