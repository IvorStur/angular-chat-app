import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  detail: boolean = false;
  user: UserService["user"];
  allUsers: UserService["allUsers"];
  

  constructor(private router: Router, private userService: UserService) {
    this.user = userService.getUser();
    this.allUsers = userService.getAllUsers();
    // userService.click$.subscribe();
  }

  openDetail(open: boolean) {
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

  // Use HostListener to call your function on every click in the application
  // @HostListener('click', ['$event'])
  // onGlobalClick(event: MouseEvent) {
  //   this.globalClick();
  //   console.log("yo");
    

  // }


  ngOnInit() {
  }

  
}
