import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() tag!: string
  @Input() mode?: string
  @Input() color?: string
  constructor() { }

  ngOnInit(): void {
    if (!this.mode) this.mode = "solid"
    if (!this.color) this.color = "light"
  }

}
