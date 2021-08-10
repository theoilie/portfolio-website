import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeEntryComponent } from './components/resume/resume-entry/resume-entry.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeroEngineerComponent } from './components/projects/descriptions/hero-engineer/hero-engineer.component';
import { PycoalParallelComponent } from './components/projects/descriptions/pycoal-parallel/pycoal-parallel.component';
import { TheoilieComComponent } from './components/projects/descriptions/theoilie-com/theoilie-com.component';
import { TradeCatcherComponent } from './components/projects/descriptions/trade-catcher/trade-catcher.component';
import { Cs201SchedulerComponent } from './components/projects/descriptions/cs201-scheduler/cs201-scheduler.component';
import { SnapMysqlPluginComponent } from './components/projects/descriptions/snap-mysql-plugin/snap-mysql-plugin.component';
import { GameDispenserComponent } from './components/projects/descriptions/game-dispenser/game-dispenser.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ModalService } from './services/modal.service';

// TODO: Use canActivate to not navigate to sections until their pictures are loaded
const appRoutes: Routes = [
  { path: '#home', component: HomeComponent },
  { path: '#projects', component: ProjectsComponent },
  { path: '#references', component: ReferencesComponent },
  { path: '#resume', component: ResumeComponent },
  { path: '#contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumeComponent,
    ReferencesComponent,
    ContactComponent,
    ResumeEntryComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectModalComponent,
    HeroEngineerComponent,
    PycoalParallelComponent,
    TheoilieComComponent,
    TradeCatcherComponent,
    Cs201SchedulerComponent,
    SnapMysqlPluginComponent,
    GameDispenserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'disabled',
      onSameUrlNavigation: 'ignore'
    })
  ],
  entryComponents: [ProjectModalComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
