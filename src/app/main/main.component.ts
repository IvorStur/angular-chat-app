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

  lName: string;
  fName: string;
  user: UserService["user"];

  constructor(private router: Router, private userService: UserService) {
    this.user = userService.getUser();
  }
  
  updateUser() {
    this.user = this.userService.getUser();

  }

  globalClick() {
    // this.user.clicks += 1;
    this.userService.globalClick();
  }

  // Use HostListener to call your function on every click in the application
  @HostListener('click', ['$event'])
  onGlobalClick(event: MouseEvent) {
    this.globalClick();
  }


  ngOnInit() {
  }

  
}
