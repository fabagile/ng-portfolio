import { Component, OnInit } from '@angular/core';
import { PAGE_LINKS, SOCIAL_LINKS } from './footer-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageLinks = PAGE_LINKS
  socialLinks = SOCIAL_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
