import { Component, OnInit } from '@angular/core';
// import { PAGE_LINKS, SOCIAL_LINKS } from './footer-links';
import { FOOTER_LINKS, SOCIAL_LINKS } from 'src/app/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageLinks = FOOTER_LINKS
  socialLinks = SOCIAL_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
