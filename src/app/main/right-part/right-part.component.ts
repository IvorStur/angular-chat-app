import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css'],
})
export class RightPartComponent implements OnInit {
  text: string;
  user: UserService['singleUser'];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.subscription = this.userService.activeChat.subscribe(
      (res: UserService['singleUser']) => {
        this.user = res;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  formSubmit() {
    this.userService.historyMessage(this.user, this.text);
  }
}
