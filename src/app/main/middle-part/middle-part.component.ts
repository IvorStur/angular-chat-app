import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css']
})
export class MiddlePartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}