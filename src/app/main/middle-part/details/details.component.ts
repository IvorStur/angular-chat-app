import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private userService: UserService, private http: HttpClient) {}

  user: UserService['singleUser'];
  properties: string[] = [
    'firstName',
    'lastName',
    'username',
    'birthdate',
    // 'image',
    'eyeColor',
    'university',
    'macAddress',
    'ip',
    'city',
    'postalCode',
  ];
  gender: string;
  country: string;
  genderString: string = 'https://api.genderize.io?name=';
  postalcodeString: string = 'https://api.zippopotam.us/us/';
  @Output() detailEmit = new EventEmitter<boolean>();

  close() {
    // console.log('detail closed')
    // this.detailEmit.emit(false);
    this.userService.detailEmit();
  }

  ngOnInit() {
    this.user = this.userService.getSingleUser();
    this.http
      .get(this.genderString + this.user[this.properties[0]])
      .subscribe((res) => {
        this.gender = res['gender'];
      });
    this.http
      .get(this.postalcodeString + this.user['postalCode'])
      .subscribe((res) => {
        this.country = res['country'];
      });
    this.userService.testUser.subscribe((res: UserService['singleUser']) => {
      this.user = res;
    });
    // this.http.get("")
  }
}
