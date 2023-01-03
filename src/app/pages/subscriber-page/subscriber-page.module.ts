import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberPageRoutingModule } from './subscriber-page-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SubscriberPageRoutingModule
  ],
  exports: [
    LogInComponent,
    SignUpComponent
  ]
})
export class SubscriberPageModule { }
