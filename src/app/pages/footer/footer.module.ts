import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HelpComponent } from './components/help/help.component';
import { CguComponent } from './components/cgu/cgu.component';

@NgModule({
  declarations: [
    MapComponent,
    ContactComponent,
    FaqComponent,
    CguComponent,
    HelpComponent
  ],
  imports: [CommonModule, FooterRoutingModule],
  exports: [
    MapComponent,
    ContactComponent,
    FaqComponent,
    CguComponent,
    HelpComponent,
  ],
})
export class FooterModule {}
