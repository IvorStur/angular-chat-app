import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: UserService["singleUser"]
  properties: string[] = ["firstName", "lastName", "username", "birthdate", "image", "eyeColor", "university", "macAddress", "ip", "city"];
  genderString: string = "https://api.genderize.io?name=";
  postalcodeString: string = "https://api.zippopotam.us/us/";

  ngOnInit() {
    this.user = this.userService.getSingleUser();

  }

}