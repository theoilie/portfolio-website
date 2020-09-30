import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { Project } from '../components/projects/project.interface';
import { ProjectsComponent } from '../components/projects/projects.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private domService: DomService) {}

  private modalElementId = 'modal-container';
  private overlayElementId = 'modal-overlay';
  private selectedProject: Project;
  private projectsComponent: ProjectsComponent;

  public create(component: any, inputs: object, outputs: object): void {
    this.destroy();
    const componentConfig = {
      inputs,
      outputs
    };
    this.domService.appendComponentTo(
      this.modalElementId,
      component,
      componentConfig
    );
    document.getElementById(this.modalElementId).className =
      'modal-container__visible';
    document.getElementById(this.overlayElementId).className =
      'modal-overlay__visible';
  }

  public destroy(): void {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className =
      'modal-container__hidden';
    document.getElementById(this.overlayElementId).className =
      'modal-overlay__hidden';
  }

  public setSelectedProject(selectedProject: Project): void {
    this.selectedProject = selectedProject;
  }

  public getSelectedProject(): Project {
    return this.selectedProject;
  }

  public setProjectsComponent(projectsComponent: ProjectsComponent): void {
    this.projectsComponent = projectsComponent;
  }

  public getProjectsComponent(): ProjectsComponent {
    return this.projectsComponent;
  }
}
