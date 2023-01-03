import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './footer/map/map.component';
import { ContactComponent } from './footer/contact/contact.component';
import { FaqComponent } from './footer/faq/faq.component';
import { HelpComponent } from './footer/help/help.component';
import { CguComponent } from './footer/cgu/cgu.component';

const routes = [
  { path: 'footer/map', component: MapComponent },
  { path: 'footer/contact', component: ContactComponent },
  { path: 'footer/faq', component: FaqComponent },
  { path: 'footer/help', component: HelpComponent },
  { path: 'footer/cgu', component: CguComponent },
];
@NgModule({
  declarations: [
    MapComponent,
    ContactComponent,
    CguComponent,
    HelpComponent,
    FaqComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
