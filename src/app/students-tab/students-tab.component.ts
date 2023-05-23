import { Component } from '@angular/core';

@Component({
  selector: 'app-students-tab',
  templateUrl: './students-tab.component.html',
  styleUrls: ['./students-tab.component.css']
})
export class StudentsTabComponent {
  students: any[] = []; // Array to store registered students
  selectedStudent: any = {}; // Holds the selected student object

  saveStudent() {
    if (this.selectedStudent.id) {
      // Update existing student
      const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
      if (index !== -1) {
        this.students[index] = { ...this.selectedStudent };
        localStorage.setItem('students', JSON.stringify(this.students));
        console.log('Student updated:', this.selectedStudent);
      }
    } else {
      // Save new student
      const newStudent = { ...this.selectedStudent, id: Date.now() };
      this.students.push(newStudent);
      localStorage.setItem('students', JSON.stringify(this.students));
      console.log('Student saved:', this.selectedStudent);
    }

    this.clearForm();
  }

  clearForm() {
    this.selectedStudent = {};
  }

  loadStudent(student: any) {
    this.selectedStudent = { ...student };
  }
}
