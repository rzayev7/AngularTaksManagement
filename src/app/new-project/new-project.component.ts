// src/app/new-project/new-project.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './new-project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, NgbDatepickerModule],
  templateUrl: './new-project.component.html',
})
export class NewProjectComponent {
  @Output() saveProject = new EventEmitter<void>();
  @Output() cancelProject = new EventEmitter<void>();

  project: Project = {
    id: '',
    title: '',
    description: '',
    date: new Date(),
    tasks: [],
  };

  constructor(private projectService: ProjectService) {}

  handleSave() {
    this.projectService.addProject(this.project);
    this.saveProject.emit();
  }

  handleCancel() {
    this.cancelProject.emit();
  }
}
