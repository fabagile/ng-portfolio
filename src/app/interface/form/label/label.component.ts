import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() label!:string
  @Input() input!:string
  @Input() required!:boolean
  constructor() { }

  ngOnInit(): void {
    if(!this.required) this.required = false
  }

}
