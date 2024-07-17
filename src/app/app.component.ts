// src/app/app.component.ts
import { Component, Input } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NoProjectSelectedComponent } from './noProjectSelected/noProjectSelected.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { Project } from './new-project/new-project.model';
import { ProjectInfoComponent } from './project-info/project-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProjectsComponent,
    NoProjectSelectedComponent,
    NewProjectComponent,
    ProjectInfoComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  projects: Project[] = [];

  @Input({ required: true }) id!: string;

  shownNewComponent: boolean = false;
  projectInfo!: Project;

  showProject: boolean = false;

  handleAddEvent() {
    this.shownNewComponent = true;
  }

  handleSaveEvent() {
    this.shownNewComponent = false;
  }

  handleCancelNewProjcet() {
    this.shownNewComponent = false;
  }

  showProjectInfo(project: Project) {
    this.showProject = true;
    this.projectInfo = project;
  }

  removeTab(id: string) {
    this.projects = this.projects.filter((task) => task.id !== id);
    this.showProject = false;
  }
}
