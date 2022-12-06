import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CguComponent } from './footer/cgu/cgu.component';
import { HelpComponent } from './footer/help/help.component';
import { MapComponent } from './footer/map/map.component';
import { FaqComponent } from './footer/faq/faq.component';
import { RequiredFieldComponent } from '../interface/form/required-field/required-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../interface/loader/loader.component';

const routes = [
  { path: '', component: LandingPageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'footer/map', component: MapComponent },
  { path: 'footer/faq', component: FaqComponent },
  { path: 'footer/help', component: HelpComponent },
  { path: 'footer/cgu', component: CguComponent },
];

@NgModule({
  declarations: [
    LandingPageComponent,
    SkillsComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    CguComponent,
    HelpComponent,
    MapComponent,
    FaqComponent,
    RequiredFieldComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
