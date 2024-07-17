import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../new-project/new-project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];
  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSubject.asObservable();

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    project.id = this.generateId(); 
    this.projects.push(project);
    this.projectsSubject.next(this.projects);
  }

  removeProject(id: string): void {
    this.projects = this.projects.filter(project => project.id !== id);
    this.projectsSubject.next(this.projects);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
