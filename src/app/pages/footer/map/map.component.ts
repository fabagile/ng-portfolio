import { Component, OnInit } from '@angular/core';
import { FOOTER_LINKS, MAIN_LINKS } from './map-links';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mainLinks = MAIN_LINKS
  footerLinks = FOOTER_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
