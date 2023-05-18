import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  // detailToggle: boolean = true;
  toggle: boolean[] = [];  
  @Output() detailEmit = new EventEmitter<boolean>();

  allUsers: UserService["allUsers"];

  ngOnInit() {
    this.allUsers = this.userService.getAllUsers();
    this.initializeToggleArray();
  }

  detail(user: UserService["singleUser"]) {
    this.userService.addSingleUser(user);
    this.detailEmit.emit(true);

  }
  

// Populate the toggle array with initial values
  initializeToggleArray(): void {
  this.allUsers.forEach(() => {
    this.toggle.push(false);
  });
}

  

  

}