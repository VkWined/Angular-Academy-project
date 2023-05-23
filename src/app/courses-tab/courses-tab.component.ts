import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-tab',
  templateUrl: './courses-tab.component.html',
  styleUrls: ['./courses-tab.component.css']
})
export class CoursesTabComponent {
  courses: any[] = []; // Array to store registered courses
  selectedCourse: any = {}; // Holds the selected course object

  saveCourse() {
    if (this.selectedCourse.id) {
      // Update existing course
      const index = this.courses.findIndex(course => course.id === this.selectedCourse.id);
      if (index !== -1) {
        this.courses[index] = { ...this.selectedCourse };
        localStorage.setItem('courses', JSON.stringify(this.courses));
        console.log('Course updated:', this.selectedCourse);
      }
    } else {
      // Save new course
      const newCourse = { ...this.selectedCourse, id: Date.now() };
      this.courses.push(newCourse);
      localStorage.setItem('courses', JSON.stringify(this.courses));
      console.log('Course saved:', this.selectedCourse);
    }

    this.clearForm();
  }

  clearForm() {
    this.selectedCourse = {};
  }

  loadCourse(course: any) {
    this.selectedCourse = { ...course };
  }
}
