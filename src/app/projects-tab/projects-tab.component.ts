import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.css']
})
export class ProjectsTabComponent {
  projects: any[] = []; // Array to store registered projects
  selectedProject: any = {}; // Holds the selected project object

  saveProject() {
    if (this.selectedProject.id) {
      // Update existing project
      const index = this.projects.findIndex(project => project.id === this.selectedProject.id);
      if (index !== -1) {
        this.projects[index] = { ...this.selectedProject };
        localStorage.setItem('projects', JSON.stringify(this.projects));
        console.log('Project updated:', this.selectedProject);
      }
    } else {
      // Save new project
      const newProject = { ...this.selectedProject, id: Date.now() };
      this.projects.push(newProject);
      localStorage.setItem('projects', JSON.stringify(this.projects));
      console.log('Project saved:', this.selectedProject);
    }

    this.clearForm();
  }

  clearForm() {
    this.selectedProject = {};
  }

  loadProject(project: any) {
    this.selectedProject = { ...project };
  }
}
