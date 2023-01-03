import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from '../../home/landing-page.component';
import { ServicesComponent } from './components/supplies/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
     LandingPageComponent,
    SkillsComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports: [
     LandingPageComponent,
    SkillsComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
  ]
})
export class MainModule { }
