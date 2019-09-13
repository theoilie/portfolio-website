import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  Input
} from "@angular/core";
import { NavigationEnd, Router, Scroll } from "@angular/router";
import { filter, delay } from "rxjs/operators";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.less"]
})
export class NavComponent implements OnInit {
  @Input()
  private loaded: boolean;
  @Input()
  private homeHeight: number;
  @Input()
  private projectsHeight: number;
  @Input()
  private referencesHeight: number;
  @Input()
  private resumeHeight: number;
  @Input()
  private contactHeight: number;

  sticky: boolean = false;
  mobileNavVisible: boolean = false;
  desktopNavbarPosition: number;
  navItems: string[];
  currentDiv: string;

  //@ViewChild("desktopStickyNav") desktopNavbar: ElementRef;
  @ViewChild("mobileNav") mobileNavbar: ElementRef;

  constructor(private router: Router) {
    this.navItems = ["home", "projects", "references", "resume", "contact"];
    this.currentDiv = this.navItems[0];
  }

  ngOnInit() {
    window.addEventListener("scroll", this.onScroll, true);
    for (let sectionName of this.navItems) {
      document
        .querySelector("#" + sectionName)
        .addEventListener("touchend", this.onTouch, true);
    }
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    for (let sectionName of this.navItems) {
      document
        .querySelector("#" + sectionName)
        .removeEventListener("touchend", this.onTouch, true);
    }
  }

  ngAfterViewInit() {
    //this.desktopNavbarPosition = this.desktopNavbar.nativeElement.offsetTop;

    // Jump to an anchor and add the "active" class if URL contains a fragment (ex: #resume)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          // The fragment in the URL must be a valid nav item (in the navItems array)
          if (
            this.navItems.filter(item => item === tree.fragment).length == 1
          ) {
            // Scroll to the fragment if it's the first NavigationEnd event (id == 1).
            if (event.id == 1) {
              setTimeout(() => {
                this.selectDiv(tree.fragment);
              }, 2600);
            } else {
              this.selectDiv(tree.fragment);
              //this.currentDiv = tree.fragment;
              //this.sticky = this.currentDiv != "home";
            }
          }
        }
      });
  }

  onScroll = (event: any): void => {
    //const number = event.target.scrollTop;
    // Stick navbar to the top on larger screens when the user scrolls down
    //this.sticky = number >= this.desktopNavbarPosition;
  };

  // Hide the mobile nav dropdown menu when anywhere outside of it is clicked
  onTouch = (event: any): void => {
    if (this.mobileNavVisible) {
      this.mobileNavVisible = false;
    }
  };

  // Recalculate navbar position when the browser is resized
  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    //this.desktopNavbarPosition = this.desktopNavbar.nativeElement.offsetTop;
  }

  public selectDiv(div: string): void {
    // Wait until the loading screen is gone
    while (!this.loaded) {}

    this.mobileNavVisible = false;
    this.currentDiv = div;
    this.sticky = this.currentDiv != "home";
  }

  public scrollToDiv(div: string): void {
    // Wait until the loading screen is gone
    while (!this.loaded) {}
    let scrollHeight: number = 0;
    if (div === "home") {
      scrollHeight = this.homeHeight;
    } else if (div === "projects") {
      scrollHeight = this.projectsHeight;
    } else if (div === "references") {
      scrollHeight = this.referencesHeight;
    } else if (div === "resume") {
      scrollHeight = this.resumeHeight;
    } else if (div === "contact") {
      scrollHeight = this.contactHeight;
    }
    window.scrollTo({
      top: scrollHeight - this.mobileNavbar.nativeElement.offsetHeight,
      behavior: "smooth"
    });
  }

  public isActive(div: string): boolean {
    return this.currentDiv === div;
  }

  public getMobileNavHeight(): number {
    return this.mobileNavbar.nativeElement.offsetHeight;
  }

  public toggleMobileNav(): void {
    this.mobileNavVisible = !this.mobileNavVisible;
  }

  public isMobileNavVisible(): boolean {
    return this.mobileNavVisible;
  }
}
