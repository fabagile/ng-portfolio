import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes = [
  {path:"", component:  LandingPageComponent},
  {path:"services", component:  ServicesComponent},
  {path:"skills", component:  SkillsComponent},
  {path:"portfolio", component:  PortfolioComponent},
  {path:"contact", component:  ContactComponent},
  {path:"about", component:  AboutComponent},
]

@NgModule({
  declarations: [LandingPageComponent, SkillsComponent, PortfolioComponent, ServicesComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
