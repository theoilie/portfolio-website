import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Section } from "src/app/shared/section.interface";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.less"]
})
export class ContactComponent implements OnInit, Section {
  @ViewChild("contactSection", {static: false})
  private contactSection: ElementRef;

  constructor() {}

  ngOnInit() {}

  public onEnter(): void {}

  public onExit(): void {}

  public getHeight(): number {
    return this.contactSection.nativeElement.offsetHeight;
  }
}
