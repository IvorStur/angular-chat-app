import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  text: string;
  user: UserService["singleUser"]

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.testUser.subscribe((res: UserService['singleUser']) => {
      this.user = res;
    });
  }

  formSubmit() {};

}