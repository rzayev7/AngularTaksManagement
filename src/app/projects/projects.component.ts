// src/app/projects/projects.component.ts
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../new-project/new-project.model';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NewProjectComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  @Output() addProject = new EventEmitter<void>();
  @Output() projectInfo = new EventEmitter<Project>();

  @Input() projects: Project[] = [];

  shownNewComponent: boolean = false;
  index!: number;

  constructor(private projectService: ProjectService) {
    this.projectService.projects$.subscribe((projects) => {
      this.projects = projects;
    });
  }

  addNewProject() {
    this.addProject.emit();
    this.shownNewComponent = true;
  }

  showProjectInfo(project: Project) {
    this.projectInfo.emit(project);
  }
}
