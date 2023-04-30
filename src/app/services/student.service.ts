import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  saveStudent(student: Student) {
    const studentToUpdate = this.students.find((s) => s.id === student.id);
    if (studentToUpdate) {
      studentToUpdate.name = student.name;
      studentToUpdate.lastName = student.lastName;
      studentToUpdate.class = student.class;
      studentToUpdate.age = student.age;
      studentToUpdate.birthDate = student.birthDate;
      studentToUpdate.department = student.department;
      studentToUpdate.gender = student.gender;
      studentToUpdate.gradeAverage = student.gradeAverage;
      studentToUpdate.disable = student.disable;
      studentToUpdate.awards = student.awards;
    }
  }

  deleteStudent(student: Student) {
    const studentIndex = this.students.findIndex((s) => s.id === student.id);
    if (studentIndex !== -1) {
      const studentToDelete = this.students[studentIndex];
      this.students.splice(studentIndex, 1);
      console.log(
        `Deleted student: ${studentToDelete.name} ${studentToDelete.lastName}`
      );
    } else {
      console.log('not found');
    }
  }

  getStudents() {
    return this.students;
  }
}
