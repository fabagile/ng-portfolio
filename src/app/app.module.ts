import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';
import { PagesModule } from './pages/pages.module';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { IconComponent } from './interface/icon/icon.component';
import { RequiredFieldComponent } from './interface/form/required-field/required-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    IconComponent,
    // RequiredFieldComponent,

  ],
  imports: [
    BrowserModule,
    PagesModule,
    // FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    // NgbModule,
    // LayoutModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr_FR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
