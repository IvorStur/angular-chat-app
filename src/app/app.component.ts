import { Component, HostListener, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) {}

  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    localStorage.setItem('logged', 'false');
    localStorage.setItem('detail', 'false');
    localStorage.removeItem('history');
    // localStorage.setItem('id', '0');
    // this.studentService.addStudent({
    //   id: 0,
    //   name: 'Jozef',
    //   lastName: 'Kral',
    //   class: '1.A',
    //   age: 9,
    //   birthDate: new Date('2019-02-11'),
    //   department: 'Science',
    //   gender: 'Female',
    //   gradeAverage: 3.2,
    //   disable: 'No',
    //   awards: ['First prize in science fair'],
    //   lastEdit: new Date(),
    // });
  }

  @HostListener('document:click', ['$event'])
  onGlobalClick(event: MouseEvent) {
    this.clickGlobal();
  }

  clickGlobal() {
    try {
      this.userService.globalClick();
    } catch {}
  }
  loginSucces() {
    this.router.navigate(['two', 365]);
  }
}
