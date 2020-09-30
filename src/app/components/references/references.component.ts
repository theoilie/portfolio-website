import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Reference, REFERENCES } from './reference.interface';
import { Section } from 'src/app/shared/section.interface';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.less']
})
export class ReferencesComponent implements OnInit, Section {
  public references: Reference[] = REFERENCES;
  public heightCalculated: boolean = false;

  private ROTATE_INTERVAL_SECONDS = 3;

  private timer;
  private secondsUntilRotate: number;
  private currentReferenceIndex: number;
  @ViewChild('referencesSection', {static: false})
  private referencesSection: ElementRef;

  // Change the absolutely-positioned references container height dynamically based on its child's height
  @ViewChild('relativeContainer', {static: false})
  private relativeContainer: ElementRef;
  @ViewChild('referenceDiv', {static: false})
  private referenceDiv: ElementRef;

  constructor() {}

  ngOnInit() {
    this.selectReference(0);
  }

  // Start rotating between references when the user scrolls to the references section
  public onEnter(): void {
    this.startInterval();
    this.recalculateHeight();
  }

  // Stop rotating between references when the user scrolls out of the references section
  public onExit(): void {
    this.stopInterval();
  }

  public getHeight(): number {
    // getHeight() is called when the browser window resizes
    setTimeout(() => {
      this.recalculateHeight();
    }, 100);
    return this.referencesSection.nativeElement.offsetHeight;
  }

  public selectReference(index: number): void {
    this.currentReferenceIndex = index;
    this.secondsUntilRotate = this.ROTATE_INTERVAL_SECONDS;
  }

  // Selects a reference and pauses automatic rotation so that the user can read
  public selectReferenceAndPause(index: number): void {
    this.selectReference(index);
    this.stopInterval();
  }

  public isReferenceActive(index: number): boolean {
    return this.currentReferenceIndex === index;
  }

  public onImageLoaded(_: any): void {
    this.recalculateHeight();
  }

  private recalculateHeight(): void {
    // Set the container's height to contain the selected reference
    const height = this.referenceDiv.nativeElement.offsetHeight;
    this.relativeContainer.nativeElement.style.setProperty(
      '--dynamicHeight',
      height + 'px'
    );
    setTimeout(() => {
      this.heightCalculated = true;
    }, 100);
  }

  // Start cycling between references every ROTATE_INTERVAL_SECONDS seconds
  private startInterval(): void {
    this.stopInterval();
    this.secondsUntilRotate = this.ROTATE_INTERVAL_SECONDS;
    this.timer = setInterval(() => {
      if (this.secondsUntilRotate > 0) {
        this.secondsUntilRotate--;
      } else {
        if (this.currentReferenceIndex + 1 >= this.references.length)
          this.selectReference(0);
        else this.selectReference(this.currentReferenceIndex + 1);
      }
    }, 1000);
  }

  // Stop cycling between references automatically
  private stopInterval(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
