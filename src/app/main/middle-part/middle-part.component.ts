import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css']
})
export class MiddlePartComponent implements OnInit {

  @Input() detail: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}