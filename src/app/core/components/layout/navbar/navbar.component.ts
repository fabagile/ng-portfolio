import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_LINKS } from 'src/app/routes';
// import { routes } from 'src/app/routes';

@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapse = true;
  links = MAIN_LINKS;
  active = false;

  constructor() {}

  ngOnInit(): void {}
  toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
