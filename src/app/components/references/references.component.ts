import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
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
  public heightCalculated: boolean;

  private ROTATE_INTERVAL_SECONDS = 3;

  private timer;
  private secondsUntilRotate: number;
  private currentReferenceIndex: number;
  @ViewChild('referencesSection', {static: false})
  private referencesSection: ElementRef;

  // Change the height of the carousel container to always be at the max height of the images in it
  @ViewChild('referencesCarousel')
  private referencesCarousel: ElementRef;
  private biggestCarouselHeight: number;

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
    setTimeout(() => {
      this.setMaxCarouselHeight();
    }, 1000);
  }

  // Stop rotating between references when the user scrolls out of the references section
  public onExit(): void {
    this.stopInterval();
  }

  public getHeight(): number {
    return this.referencesSection.nativeElement.offsetHeight;
  }

  public selectReference(index: number): void {
    this.currentReferenceIndex = index;
    this.secondsUntilRotate = this.ROTATE_INTERVAL_SECONDS;
  }

  // Selects a reference and pauses automatic rotation so that the user can read it
  public selectReferenceAndPause(index: number): void {
    this.selectReference(index);
    this.stopInterval();
  }

  public isReferenceActive(index: number): boolean {
    return this.currentReferenceIndex === index;
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

  // Set the height of the carousel to be the maximum of its children's heights
  // This prevents the page from bouncing when the active carousel item transitions
  private setMaxCarouselHeight(): void {
    for (const carouselImg of this.referencesCarousel.nativeElement.children) {
      this.biggestCarouselHeight = Math.max(
        this.biggestCarouselHeight || 0,
        carouselImg.offsetHeight,
        this.referencesCarousel.nativeElement.offsetHeight);
    }
    this.referencesCarousel.nativeElement.style.setProperty(
      '--dynamicCarouselHeight',
      this.biggestCarouselHeight + 'px'
    );
  }
}
