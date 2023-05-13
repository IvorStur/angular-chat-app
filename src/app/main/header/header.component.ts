import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fName: string;
  @Input() lName: string;
  @Input() user: UserService["user"];

  constructor(private router: Router, private userService: UserService) { 
    this.user = userService.getUser();
  }

  ngOnInit() {
  }
  

}