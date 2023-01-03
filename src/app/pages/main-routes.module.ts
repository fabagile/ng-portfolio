import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from '../home/landing-page.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

const routes = [
  { path: '', component: LandingPageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  declarations: [
    LandingPageComponent,
    SkillsComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
