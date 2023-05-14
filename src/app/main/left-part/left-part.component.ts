import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface allUsers {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  birthdate: string;
  image: string;
  eyeColor: string;
  university: string;
  macAddress: string;
  ip: string;
  city: string;
}


@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  // firstName: string;
  // lastName: string;
  // email: string;
  // jsonUsersList: jsonUsers[];
  @Input() allUsers: allUsers[];

  ngOnInit() {
    // this.http.get('https://dummyjson.com/users').subscribe(res => {
    //   // Marcel Jones
    //   this.jsonUsersList.push(res["users"])
      
        
    //   }
    // );
  }
  

  

}