import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  lName: string;
  fName: string;

  constructor(private router: Router, private studentService: StudentService, private userService: UserService) {}


  ngOnInit() {
  }

  
}
