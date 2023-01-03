import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFieldComponent } from '../interface/form/required-field/required-field.component';
import { LoaderComponent } from '../interface/loader/loader.component';
import { LabelComponent } from '../interface/form/label/label.component';



@NgModule({
  declarations: [
    RequiredFieldComponent,
    LoaderComponent,
    LabelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequiredFieldComponent,
    LoaderComponent,
    LabelComponent,

  ]
})
export class SharedModule { }
