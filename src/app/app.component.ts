import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReferencesComponent } from './components/references/references.component';
import { Section } from './shared/section.interface';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  public mobileNavPosition = 0;
  public desktopHomePosition = 0;
  public desktopProjectsPosition = 0;
  public desktopReferencesPosition = 0;
  public desktopResumePosition = 0;
  public desktopContactPosition = 0;

  // Nav is sticky on mobile and thus not included in the home page's height
  @ViewChild(NavComponent, {static: false})
  private navDiv: NavComponent;
  @ViewChild(HomeComponent, {static: false})
  private homeDiv: Section;
  @ViewChild(ProjectsComponent, {static: false})
  private projectsDiv: Section;
  @ViewChild(ReferencesComponent, {static: false})
  private referencesDiv: Section;
  @ViewChild(ResumeComponent, {static: false})
  private resumeDiv: Section;
  @ViewChild(ContactComponent, {static: false})
  private contactDiv: Section;

  public loaded = false;
  public loadedHalfSecondAfter = false;

  private currentDiv: Section;

  constructor(private router: Router, private modalService: ModalService) {}

  public destroyModal(): void {
    this.modalService.destroy();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true);

    // Display a loading animation for a couple seconds
    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.loadedHalfSecondAfter = true;
      }, 500);
    }, 2000);

    // Prevent scrolling on mobile while the page is loading
    document
      .querySelector('#body-wrapper')
      .addEventListener('touchstart', this.onTouchStart, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
    document
      .querySelector('#body-wrapper')
      .removeEventListener('touchstart', this.onTouchStart, true);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mobileNavPosition = this.navDiv.getMobileNavHeight();
      this.desktopHomePosition = this.homeDiv.getHeight();
      this.desktopProjectsPosition = this.projectsDiv.getHeight();
      this.desktopReferencesPosition = this.referencesDiv.getHeight();
      this.desktopResumePosition = this.resumeDiv.getHeight();
      this.desktopContactPosition = this.contactDiv.getHeight();
    }, 500);
  }

  // Recalculate positions when the browser is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.ngAfterViewInit();
  }

  onTouchStart = (event: any) => {
    if (!this.loadedHalfSecondAfter) {
      event.preventDefault();
    }
  };

  onScroll = (event: any): void => {
    if (!this.loadedHalfSecondAfter) {
      return;
    }

    const eventNumber = window.scrollY;
    const atBottom =
      window.innerHeight + Math.ceil(window.pageYOffset + 1) >=
      document.body.offsetHeight;

    if (
      atBottom ||
      eventNumber >=
        this.desktopHomePosition -
          this.mobileNavPosition +
          this.desktopProjectsPosition +
          this.desktopReferencesPosition +
          this.desktopResumePosition
    ) {
      this.selectDiv(this.contactDiv, '#contact');
    } else if (
      eventNumber >=
      this.desktopHomePosition -
        this.mobileNavPosition +
        this.desktopProjectsPosition +
        this.desktopReferencesPosition
    ) {
      this.selectDiv(this.resumeDiv, '#resume');
    } else if (
      eventNumber >=
      this.desktopHomePosition -
        this.mobileNavPosition +
        this.desktopProjectsPosition
    ) {
      this.selectDiv(this.referencesDiv, '#references');
    } else if (
      eventNumber >=
      this.desktopHomePosition - this.mobileNavPosition
    ) {
      this.selectDiv(this.projectsDiv, '#projects');
    } else if (eventNumber < this.desktopHomePosition && eventNumber >= 0) {
      this.selectDiv(this.homeDiv, '#home');
    }
  };

  // Call exit functionality for the previous section and enter functionality for the next section
  private selectDiv(newDiv: Section, newDivFragment: string): void {
    if (this.currentDiv && this.currentDiv !== newDiv) {
      this.currentDiv.onExit();
    }
    if (!this.currentDiv || this.currentDiv !== newDiv) {
      this.currentDiv = newDiv;
      this.currentDiv.onEnter();
      this.router.navigateByUrl(newDivFragment);
      // Recalculate dynamic section heights
      this.ngAfterViewInit();
    }
  }

  public selectProjectsDiv(): void {
    this.navDiv.scrollToDiv('projects');
  }
}
