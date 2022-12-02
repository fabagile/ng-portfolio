import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse=true
  links = routes
  active=false
  toggleCollapse(){
    this.collapse = !this.collapse
  }

  constructor() { }

  ngOnInit(): void {
  }

}
