import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

interface Student {
  id: number;
  name: string;
  lastName: string;
  class: string;
  age: number;
  birthDate: Date;
  department: string;
  gender: string;
  gradeAverage: number;
  disable: string;
  awards: string[];
  lastEdit: Date;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  student: Student;
  name1: string;
  name2: string;
  // date: Date = new Date();

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.student = {
      id: 0,
      name: '',
      lastName: '',
      class: '',
      age: 0,
      birthDate: new Date(),
      department: '',
      gender: '',
      gradeAverage: 0,
      disable: '',
      awards: [],
      lastEdit: new Date(),
    };
  }

  onSubmit() {
    // console.log(this.date.getFullYear())
    // const ageInMilliseconds = this.date.getTime() - this.student.birthDate.getTime();
    // this.student.age = ageInMilliseconds / 31536000000;

    // let now = new Date().getTime();
    // let bd = this.student.birthDate.getTime();
    // this.student.age = new Date(now - bd).getFullYear();
    // console.log(this.student.age)
    let id1 = Number(localStorage.getItem('id')) + 1;
    this.student.id = id1;
    let id_out = String(id1);
    localStorage.setItem('id', id_out);
    this.student.lastEdit = new Date();
    this.studentService.addStudent(this.student);
    this.router.navigate(['two', 365]);
  }

  back() {
    this.router.navigate(['two', 365]);
  }

  toNumber(cislo: string) {
    console.log('cislo: ' + cislo);
    return Number(cislo);
  }
}
