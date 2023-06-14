import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
  userChar: number;

  constructor(private router: Router, private userService: UserService) {
    // this.user = userService.getUser();
  }

  ngOnInit() {
    this.userService.userCharSubject.subscribe((res: number) => {
      this.userChar = res;
    });
  }

  logout() {
    localStorage.setItem('logged', 'flase');
    localStorage.removeItem('history');
    this.router.navigate(['one']);
  }
}
