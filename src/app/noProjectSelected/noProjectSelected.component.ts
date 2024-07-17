import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-no-project-selected',
  standalone: true,
  imports: [],
  templateUrl: './noProjectSelected.component.html',
})
export class NoProjectSelectedComponent {
  @Output() addProject = new EventEmitter<string>();
  addNewProject(){
    this.addProject.emit();
  }

}
