import { Component, OnInit } from '@angular/core';
import { RELEASES } from './releases';

@Component({
  selector: 'page-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  releases = RELEASES

  constructor() { }

  ngOnInit(): void {
  }

}
