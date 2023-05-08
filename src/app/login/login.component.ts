import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  touch = new EventEmitter();

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  lName: string;
  fname: string;

  formSubmit() {
    this.http.get('https://dummyjson.com/users').subscribe(res => {
      // Marcel Jones
      for (const user of res["users"]) {

        if (user.firstName == this.fname && user.lastName == this.lName) {
          localStorage.setItem('logged', 'true');
          this.router.navigate(['two', 365]);
        }
        
      }
    });

    
  }
}
