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
  history: UserService['historyList'];
  lastHistory: UserService['lastHistory'];
  private subscription: Subscription;
  clear: boolean = false;

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

    this.userService.clearRightPartChat.subscribe(() => {
      this.clearChat();
      // this.child.clearChat();
    });

    this.userService.historyListSubject.subscribe(
      (res: UserService['historyList']) => {
        this.history = res;
        this.lastHistory = this.history[res.length - 1];
      }
    );
  }

  clearChat() {
    this.clear = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  formSubmit() {
    this.clear = false;
    this.userService.historyMessage(this.user, this.text);
  }
}
