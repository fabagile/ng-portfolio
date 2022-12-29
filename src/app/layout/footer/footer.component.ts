import { Component, OnInit } from '@angular/core';
import { FOOTER_LINKS, SOCIAL_LINKS } from 'src/app/routes';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pageLinks = FOOTER_LINKS
  socialLinks = SOCIAL_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
