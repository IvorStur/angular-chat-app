import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  student: any;
  // time: number = new Date().getTime();

  constructor(
    private router: Router,
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.student = JSON.parse(params.get('student'));
    });
  }

  ngOnInit() {}

  onSubmit() {
    // console.log(this.date.getFullYear())
    // const ageInMilliseconds = this.date.getTime() - this.student.birthDate.getTime();
    // this.student.age = ageInMilliseconds / 31536000000;

    // let now = new Date().getTime();
    // let bd = this.student.birthDate.getTime();
    // this.student.age = new Date(now - bd).getFullYear();
    // console.log(this.student.age)
    this.student.lastEdit = new Date();
    this.studentService.saveStudent(this.student);
    this.router.navigate(['two', 365]);
  }

  back() {
    this.router.navigate([
      'details',
      { student: JSON.stringify(this.student) },
    ]);
  }

  toNumber(cislo: string) {
    console.log("cislo: " + cislo)
    return Number(cislo);
  }

  timer(date: Date) {
    return date.getTime();
  }
}
