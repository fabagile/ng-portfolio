import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HelpComponent } from './components/help/help.component';
import { CguComponent } from './components/cgu/cgu.component';

const routes = [
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'help', component: HelpComponent },
  { path: 'cgu', component: CguComponent },
];
@NgModule({
  declarations: [

  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class FooterRoutingModule {}
