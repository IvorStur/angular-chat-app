import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css']
})
export class MiddlePartComponent implements OnInit {

  @Input() detail: boolean;
  @Output() detailEmit = new EventEmitter<boolean>();

  openDetail(open: boolean) {
    // console.log("middle toggled")
    // console.log("opend details")
    this.detailEmit.emit(open);
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}