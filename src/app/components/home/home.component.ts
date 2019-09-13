import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Section } from "src/app/shared/section.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit, Section {
  @Output()
  public viewProjectsClicked: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild("homeSection")
  private homeSection: ElementRef;

  constructor() {}

  ngOnInit() {}

  onEnter(): void {}
  onExit(): void {}
  getHeight(): number {
    return this.homeSection.nativeElement.offsetHeight;
  }

  public viewProjects(): void {
    this.viewProjectsClicked.emit();
  }
}
