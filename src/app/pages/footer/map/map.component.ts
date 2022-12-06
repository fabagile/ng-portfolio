import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/app/link.model';
import { FOOTER_LINKS, MAIN_LINKS } from 'src/app/routes';

@Component({
  selector: 'page-footer-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mainLinks = MAIN_LINKS
  footerLinks!: Link[]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.footerLinks = FOOTER_LINKS.filter(link=> link.label !='plan du site')
    console.table(this.footerLinks)
  }

}
