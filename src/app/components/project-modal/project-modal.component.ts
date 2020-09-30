import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Project } from '../projects/project.interface';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.less']
})
export class ProjectModalComponent implements OnInit {
  public selectedProject: Project;

  constructor(private modalService: ModalService) {
    this.selectedProject = modalService.getSelectedProject();
  }

  ngOnInit() {}

  public close(): void {
    this.modalService.getProjectsComponent().selectProject(-1);
  }

  public selectPrevious(): void {
    this.modalService.getProjectsComponent().selectPrevious();
  }

  public selectNext(): void {
    this.modalService.getProjectsComponent().selectNext();
  }
}
