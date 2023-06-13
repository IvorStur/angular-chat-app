import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: UserService["historyList"];
  lastKnownHistory: UserService["historyList"];

  constructor(private userService: UserService) { }

  ngOnInit() {
    const savedHistory = localStorage.getItem('history');
    if (savedHistory) {
      this.lastKnownHistory = JSON.parse(savedHistory);
    }

    this.userService.historyListSubject.subscribe((res: UserService["historyList"]) => {
      this.history = res;
      this.saveHistoryToLocalStorage();
    });
  }

  saveHistoryToLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this.history));
  }
}
