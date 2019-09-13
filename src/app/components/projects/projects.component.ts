import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Project, PROJECTS } from "./project.interface";
import { Section } from "src/app/shared/section.interface";
import { ModalService } from "src/app/services/modal.service";
import { ProjectModalComponent } from "../project-modal/project-modal.component";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.less"]
})
export class ProjectsComponent implements OnInit, Section {
  public projects: Project[] = PROJECTS;

  @ViewChild("projectsSection")
  private projectsSection: ElementRef;

  // Dynamically open/close the projects modal
  public selectedProject: Project;
  public hoveredProject: number = -1;
  private currentProjectIndex: number;
  @ViewChild("projectModal")
  private projectModal: ElementRef;

  constructor(private modalService: ModalService) {
    modalService.setProjectsComponent(this);
  }

  ngOnInit() {
    this.currentProjectIndex = -1;
  }

  public onEnter(): void {}
  public onExit(): void {}

  public getHeight(): number {
    return this.projectsSection.nativeElement.offsetHeight;
  }

  public selectProject(index: number): void {
    this.currentProjectIndex = index;
    this.selectedProject = index == -1 ? null : this.projects[index];
    this.modalService.setSelectedProject(this.selectedProject);

    if (this.selectedProject) {
      this.modalService.create(ProjectModalComponent, { isMobile: false }, {});
    } else {
      this.modalService.destroy();
    }
  }

  public selectPrevious(): void {
    this.selectProject(
      this.currentProjectIndex == 0
        ? this.projects.length - 1
        : this.currentProjectIndex - 1
    );
  }

  public selectNext(): void {
    this.selectProject(
      this.currentProjectIndex == this.projects.length - 1
        ? 0
        : this.currentProjectIndex + 1
    );
  }

  public isHovering(index: number): boolean {
    return this.hoveredProject == index;
  }

  public setHovering(index: number): void {
    this.hoveredProject = index;
  }
}
