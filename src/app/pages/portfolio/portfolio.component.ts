import { Component, OnInit } from '@angular/core';
import { RELEASES } from './releases';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  releases = RELEASES

  constructor() { }

  ngOnInit(): void {
  }

}
