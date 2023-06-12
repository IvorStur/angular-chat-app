import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';
import { RightPartComponent } from './right-part/right-part.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  detail: boolean = false;
  user: UserService['user'];
  allUsers: UserService['allUsers'];
  activeChat: UserService['singleUser'];
  @ViewChild('rightPartComponent') child:RightPartComponent;

  constructor(private router: Router, private userService: UserService) {
    this.user = userService.getUser();
    // this.allUsers = userService.getAllUsers();
    // userService.click$.subscribe();
  }

  openDetail(open: boolean) {
    // console.log("opend details")
    this.detail = open;
  }

  updateUser() {
    this.user = this.userService.getUser();
  }

  globalClick() {
    // this.user.clicks += 1;
    this.userService.globalClick();
    this.updateUser();
  }

  ngOnInit() {
    this.activeChat = null; // Initialize to a default value
    this.userService.activeChat.subscribe((res: UserService['singleUser']) => {
      this.activeChat = res;
      // this.child.clearChat();
    });
  }
}
