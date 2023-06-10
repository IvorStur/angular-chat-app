import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: UserService["historyList"]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.historyListSubject.subscribe((res: UserService["historyList"]) => {
      this.history = res;
    });
  }

}