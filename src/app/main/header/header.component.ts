import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  fName: string;
  lName: string;
  logInTime: Date;
  clicks: number;
  char: number;
  chats: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) {
    // this.user = userService.getUser();
  }

  ngOnInit() {}

  logout() {
    localStorage.setItem('logged', 'flase');
    localStorage.removeItem('history');
    this.router.navigate(['one']);
  }
}
