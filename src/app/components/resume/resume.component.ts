import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList
} from "@angular/core";
import { ResumeEntry, RESUME_ENTRIES } from "./resume-entry.interface";
import { Section } from "src/app/shared/section.interface";
import { ResumeEntryComponent } from "./resume-entry/resume-entry.component";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.less"]
})
export class ResumeComponent implements OnInit, Section {
  public entries: ResumeEntry[]; // Make the entries available in the template
  public currentEntry: { index: number; entry: ResumeEntry };
  @ViewChild("resumeSection", {static: false})
  private resumeSection: ElementRef;
  // Change the sliding bar dynamically
  @ViewChild("controlItems", {static: false})
  private controlItems: ElementRef;
  // Change the absolutely-positioned references container height dynamically based on its child's height
  @ViewChild("relativeContainer", {static: false})
  private relativeContainer: ElementRef;
  @ViewChildren("resumeEntry")
  private resumeEntries: QueryList<ResumeEntryComponent>;

  constructor() {}

  onEnter() {
    this.recalculateHeight();
  }

  onExit() {}

  public getHeight(): number {
    // getHeight() is called when the browser window resizes
    setTimeout(() => {
      this.recalculateHeight();
    }, 100);
    return this.resumeSection.nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.entries = RESUME_ENTRIES;
    this.currentEntry = { index: 0, entry: this.entries[0] };
  }

  public onClick(index: number): void {
    this.currentEntry = { index, entry: this.entries[index] };

    // Move the sliding bar's left property to the currently-selected entry
    this.controlItems.nativeElement.style.setProperty(
      "--dynamicLeft",
      index * 100 + "%"
    );
  }

  private recalculateHeight(): void {
    // Set the container's height to contain the longest resume entry
    let height: number = 0;
    this.resumeEntries.forEach(entry => {
      if (entry.getHeight() > height) {
        height = entry.getHeight();
      }
    });
    this.relativeContainer.nativeElement.style.setProperty(
      "--dynamicHeight",
      height + "px"
    );
  }
}
