// src/app/project-info/project-info.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../new-project/new-project.model';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-info.component.html',
})
export class ProjectInfoComponent {
  @Input() project?: Project;
  newTask: string = '';
  @Output() removeProject = new EventEmitter<string>();

  constructor(private projectService: ProjectService) {}

  addTask() {
    if (this.newTask.trim() && this.project) {
      this.project.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
    console.log(this.project?.tasks);
  }

  removeTasks() {
    if (this.project) {
      this.project.tasks = [];
    }
  }

  removeTab(project: Project) {
    if (project.id) {
      this.projectService.removeProject(project.id);
      this.removeProject.emit(project.id);
    } else {
      console.error('Project ID is undefined');
    }
  }
}
