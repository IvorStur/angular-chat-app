import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  resChar: number;
  loggedInTime: string;

  login() {
    window.location.href="https://angular-ivy-plfjdy.stackblitz.io";
    // this.router.navigate(["one"])
  }

  ngOnInit() {
    if (!localStorage.getItem("logged")) {
      this.router.navigate(["one"])
    }
    localStorage.setItem('logged', 'flase');
    this.loggedInTime = this.userService.getLoggedInTime().toTimeString().split(' ')[0]
    this.resChar = this.userService.getResChar();
  }

}